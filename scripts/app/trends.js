/*************************
Pie Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','fixtures/trendData','app/config','mustache','dx.chartjs.debug'], function(dataUtils,color,trendData,config,Mustache) {
   var self = this;
   this.subList = config.default.subs || [];
   self.selectedSubEvent = jQuery.Event('selectedSub');
   
   this.triggerSelectedSubs = function(selectedSubList) {
      var subs =  [].concat(config.defaultSubs);
      selectedSubList.each(function() {
         subs.push(this.value);
      });
      this.subList = subs;
      $('body').trigger(jQuery.Event('selectedSub'));
   }

   return {

      populateSubSelector: function($el,endPoint) {
         $el.chosen();
         var optionTemplate = '{{#selectedSubs}}<option selected value="{{code}}">{{name}}</option>{{/selectedSubs}}{{#subs}}<option value="{{code}}">{{name}}</option>{{/subs}}';
         var subs = [];
         var selectedSubs = [];
         var data = trendData.getDataForEndPoint(endPoint);
         console.log('data:' , data);


         for(sub in data.actual.subs) {
            if(config.default.subs.indexOf(sub) == -1) {
               var subObj = {code: sub, name: data.actual.subs[sub]};
               if (config.preSelectedSubs.indexOf(sub) != -1)
                  selectedSubs.push(subObj);
               else
                  subs.push(subObj);
            }
         }

         var keys = [];
         selectedSubs.forEach(function(el) {
            keys.push(el.code);
         });

         console.log(keys);
         console.log(self.subList);

         self.subList = self.subList.concat(keys);
         console.log(self.subList);
         $el.append(Mustache.render(optionTemplate,{selectedSubs: selectedSubs, subs: subs}));
         $el.trigger("liszt:updated");

         $el.change(function() {
            self.triggerSelectedSubs($el.find(':selected'));
         });
         
      },
      show: function($el,endPoint) {
         //define series from trendData
         console.log('ep:',endPoint);
         var shownSubs = self.subList;
         var series = [];
         var data = trendData.getDataForEndPoint(endPoint);
         for(var sub in data.plan.subs) {
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
                  data: data.plan.series, 
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

         for(var sub in data.actual.subs) {
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
                  data: data.actual.series, 
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

               var date = new Date(clickedPoint.argument);
               var titleTemplate = '{{month}} {{year}} - {{type}}';
               var contentTemplate = '<table class="table table-condensed">{{#points}}<tr class="{{highlighted}}"><td>{{value}}</td><td>{{sub}}</td></tr>{{/points}}</table>';
               var points = null;
               

               var $tooltip = $('#tooltipShiv');
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

               
               if(clickedPoint.series.tag.type == "Plan")
                  points = dataUtils.translatePointsForTooltip(dataUtils.getPlanSeriesDataByDate(clickedPoint.argument), clickedPoint.series.tag.sub,self.subList);
               else
                  points = dataUtils.translatePointsForTooltip(dataUtils.getActualSeriesDataByDate(clickedPoint.argument), clickedPoint.series.tag.sub, self.subList);
               
               $tooltip.popover({
                  placement: 'top',
                  title: Mustache.render(titleTemplate,{month: dataUtils.getMonthNameByDate(date), year: date.getFullYear(), type: clickedPoint.series.tag.type}),
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