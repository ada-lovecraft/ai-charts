/*************************
Pie Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','fixtures/trendData','app/config','mustache','dx.chartjs.debug','bootstrap.min'], function(dataUtils,color,trendData,config,Mustache) {
   var self = this;
   this.subList =[];
   self.selectedSubEvent = jQuery.Event('selectedSub');
   
   this.triggerSelectedSubs = function(subList) {
      var subs = [];
      console.log('lol');
      subList.each(function() {
         subs.push(this.value);
      });
      $('body').trigger(jQuery.Event('selectedSub',{subs: subs}));
   }

   return {
      populateSubSelector: function($el) {
         console.log('trendData: ',trendData);
         var optionTemplate = '{{#subs}}<option value="{{code}}">{{name}}</option>{{/subs}}';
         var subs = [];
         for(sub in trendData.actual.subs) {
            if(sub != 'DCS') {
               var subObj = {code: sub, name: trendData.actual.subs[sub]};
               subs.push(subObj);
            }
         }
         $el.append(Mustache.render(optionTemplate,{subs: subs}));
         $el.chosen();
         $el.change(function() {
            self.triggerSelectedSubs($el.find(':selected'));
         });
      },
      show: function($el,selectedSubs) {
         //define series from trendData
         var shownSubs = ['DCS'].concat(selectedSubs);
         var series = [];
         
         for(var sub in trendData.plan.subs) {
            if (shownSubs.indexOf(sub) !== -1 ) {
               var thisColor = color.getSubColor(sub);
               series.push({
                  valueField: sub, 
                  name:sub +' - Plan', 
                  tag: {
                     sub: sub,
                     type: 'Plan',
                     color: thisColor
                  },
                  color: color.rgbaToString(thisColor,.2),
                  data: trendData.plan.series, 
                  type:'splinearea', 
                  border:{
                     visible: false
                  },
                  point: {
                     visible: false
                  }
               });
            }
         } 

         for(var sub in trendData.actual.subs) {
            if (shownSubs.indexOf(sub) !== -1 ) {
               var thisColor = color.getSubColor(sub);
               var seriesObj = {};
               series.push({
                  valueField: sub, 
                  name:sub + ' - Actual',
                  tag: {
                     sub: sub,
                     type: 'Actual'
                  }, 
                  data: trendData.actual.series, 
                  type: 'line',
                  point: {
                     visible: false
                  },
                  color: color.rgbToString(thisColor),
               });
            }
         } 

         


         //define the area chart
         $el.dxChart({
            size: {
               width: 800,
               height: 400
            },

            commonSeriesSettings: {
               //setup default series options
               argumentField: 'dateObj',
               type: 'line',
               border: {
                  color: color.rgbToString(color.getTextColor('darkGrey')),
                  width: 2,
                  visible: true
               },
               point: {
                  visible: true,
                  size: 1
               }
            },
            argumentAxis: {
               type: 'datetime',
               label: {
                  customizeText: function() {
                     return dataUtils.getMonthShortNameByDate(this.value).toUpperCase();
                  }
               }

            },
            valueAxis: {
               label: {
                  customizeText: function(point) {
                     return point.value/1000000 + 'M';
                  }
               },
                grid: {
                  visible: false
               }

            },
            //define our series data
            series: series,
            legend: {
               verticalAlignment: 'bottom',
               horizontalAlignment: 'center',
               customizeText: function() {
                  return this.seriesName.replace(/ \- /, '\n');
               }
            },
            tooltip: {
               enabled: false
            },
            pointHover: function(clickedPoint) {
               console.log('cp:',clickedPoint);
               $tooltip = $('#tooltipShiv');



               $tooltip.show();

               $tooltip.attr('style','background-color:' + color.rgbToHex(color.getSubColor(clickedPoint.series.tag.sub)));
               $tooltip.offset({top: ($el.position().top + clickedPoint.y) - $tooltip.height() + config.tooltipShivMargin.y , left: $el.position().left + clickedPoint.x + config.tooltipShivMargin.x});
               $tooltip.mouseout(function() {
                  $tooltip.popover('destroy');
                  $tooltip.hide();
               });
               $tooltip.mouseleave(function() {
                  $tooltip.popover('destroy');
                  $tooltip.hide();
               });

               var date = new Date(clickedPoint.argument);
               var titleTemplate = '{{month}} {{year}}';
               var contentTemplate = '<table class="table table-condensed">{{#points}}<tr class="{{highlighted}}"><td>{{value}}</td><td>{{sub}}</td></tr>{{/points}}</table>';
               var points = null;
               
               if(clickedPoint.series.tag.type == "Plan")
                  points = dataUtils.translatePointsForTooltip(dataUtils.getPlanSeriesDataByDate(clickedPoint.argument), clickedPoint.series.tag.sub);
               else
                  points = dataUtils.translatePointsForTooltip(dataUtils.getActualSeriesDataByDate(clickedPoint.argument), clickedPoint.series.tag.sub);
               
               
               $tooltip.popover({
                  placement: 'top',
                  title: Mustache.render(titleTemplate,{month: dataUtils.getMonthNameByDate(date), year: date.getFullYear()}),
                  html: true,
                  content: Mustache.render(contentTemplate, {points: points}),
                  animation: false,
               });
               
               $tooltip.popover('show');

               $('body').find('.popover-title').attr('style','background-color:' + color.rgbToString(color.getSubColor(clickedPoint.series.tag.sub)));
               
            }
         });
      }
   }
});