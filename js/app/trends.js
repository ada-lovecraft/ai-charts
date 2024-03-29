/*************************
Pie Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','fixtures/trendData','app/config','mustache','dx.chartjs.debug'], function(dataUtils,color,trendData,config,Mustache) {
   var self = this;
   this.subList = config.defaults.subs || [];
   this.selectedSubEvent = jQuery.Event('selectedSub');

   this.legendTemplate = '<li><div class="{{color}}"></div>{{name}}</li>';
   this.hoveredPoint = null;
   
   this.triggerSelectedSubs = function(selectedSubList) {
      var subs =  [].concat(config.defaults.subs);
      selectedSubList.each(function() {
         console.log($(this).data('code'));
         subs.push($(this).data('code'));
      });
      this.subList = subs;
      $('body').trigger(jQuery.Event('selectedSub'));
   }

   this.showTooltip = function($el,endPoint) {
      var clickedPoint = self.hoveredPoint;
      var date = new Date(clickedPoint.argument);
      var titleTemplate = '{{month}} {{year}} - {{type}}';
      var contentTemplate = '<table class="table table-condensed"><thead>{{#highlight}}<th>{{value}}</th><th class="text-right">{{sub}}</th>{{/highlight}}</thead><tbody>{{#points}}<tr><td>{{value}}</td><td class="text-right">{{sub}}</td></tr>{{/points}}</tbody></table>';
      var points = null;
      

      var $tooltip = $('#tooltipShiv');
      $tooltip.show();

      $tooltip.attr('style','background-color:' + color.rgbToHex(color.getSubColor(clickedPoint.series.tag.sub)));
      $tooltip.offset({top: ($el.position().top + clickedPoint.y) - $tooltip.height() + config.tooltipShivMargin.y , left: $el.position().left + clickedPoint.x + config.tooltipShivMargin.x});
      

      if(clickedPoint.series.tag.type == "Plan")
         points = dataUtils.translatePointsForTooltip(dataUtils.getPlanSeriesDataByDate(clickedPoint.argument,endPoint), clickedPoint.series.tag.sub,self.subList);
      else
         points = dataUtils.translatePointsForTooltip(dataUtils.getActualSeriesDataByDate(clickedPoint.argument,endPoint), clickedPoint.series.tag.sub, self.subList);

      $tooltip.popover({
         placement: 'top',
         title: Mustache.render(titleTemplate,{month: dataUtils.getMonthNameByDate(date), year: date.getFullYear(), type: clickedPoint.series.tag.type}),
         html: true,
         content: Mustache.render(contentTemplate, {highlight: points.shift(), points: points}),
         animation: false
      });

      $tooltip.click(function(e) {
         $tooltip.hide();
         $tooltip.popover('destroy');
      });
      
      $tooltip.popover('show');

      $('body').find('.popover-title').attr('style','background-color:' + color.rgbToString(color.getSubColor(clickedPoint.series.tag.sub)));         
   }

   return {

      populateSubSelector: function($el,endPoint) {

         var optionTemplate = '{{#subs}}<button class="btn {{statusClass}} span2" data-toggle="button" data-code="{{code}}">{{name}}</button>{{/subs}}';
         var subs = [];
         var selectedSubs = [];
         var data = trendData.getDataForEndPoint(endPoint);


         for(sub in data.actual.subs) {
            var subObj = {code: sub, name: data.actual.subs[sub],statusClass: ''};
            if(config.defaults.subs.indexOf(sub) == -1) {
               console.log(subObj.code,'not default');
               if (config.preSelectedSubs.indexOf(sub) != -1) {
                  console.log(subObj.code,'preselected');
                  subObj.statusClass = 'active selected';  
               }
               subs.push(subObj);
            }
         }

         var keys = [];
         subs.forEach(function(el) {
            keys.push(el.code);
         });



         self.subList = self.subList.concat(keys);
         $el.append(Mustache.render(optionTemplate,{subs: subs}));
         console.log($el.find('.btn'));

         //$el.find('.btn').button();

         
         
         $el.find('button').click(function(e) {
            $(this).toggleClass('selected');
            console.log($el.find('.active'));
            self.triggerSelectedSubs($el.find('.selected'));
         });
         
         
      },
      show: function($el,endPoint) {
         //define series from trendData
         var $legend = $('#trendLegend');
         var $planList = $legend.find('.plan ul');
         var $actualList = $legend.find('.actual ul');
         $planList.text('');
         $actualList.text('');

         var shownSubs = self.subList;
         var series = [];
         var data = trendData.getDataForEndPoint(endPoint);
         var dateRange = dataUtils.getDateRangeForTrendByEndPoint(endPoint);
         var $tooltip = $('#tooltipShiv');
         var $point = $('#pointShiv');


         $el.click(function() {
            $tooltip.popover('destroy');
            $tooltip.hide();
         });

         var keys = [];
         var planSubs = [];
         var actualSubs = [];

         for (var key in data.plan.subs) {
            keys.push(key);
         }
         planSubs = keys;
         actualSubs = actualSubs.concat(planSubs);

         keys = [];
         for (var key in data.actual.subs) {
            keys.push(key);
         }
         keys.forEach(function(el) {
            if (actualSubs.indexOf(el) == -1) {
               actualSubs.push(el);
            }
         });
         

         actualSubs.reverse();
         planSubs.reverse();
         planSubs.forEach(function(sub) {
            if (shownSubs.indexOf(sub) !== -1 ) {
               var thisColor = color.getSubColor(sub);
               series.push({
                  valueField: sub, 
                  name: sub +' - Plan', 
                  tag: {
                     sub: sub,
                     name: data.plan.subs[sub],
                     type: 'Plan',
                     color: thisColor
                  },
                  color: color.rgbaToString(thisColor,config.areaAlpha),
                  data: data.plan.series, 
                  type: 'splinearea', 
                  border:{
                     visible: false
                  },
                  point: {
                     visible: false
                  }
               });
               $planList.append(Mustache.render(self.legendTemplate,{color: thisColor.className, name: data.plan.subs[sub].match(/\w+/)[0]}));
            }
         }); 

         



         
         actualSubs.forEach(function(sub) {
            if (shownSubs.indexOf(sub) !== -1 ) {
               var thisColor = color.getSubColor(sub);
               var seriesObj = {};
               series.push({
                  valueField: sub, 
                  name:sub + ' - Actual',
                  tag: {
                     sub: sub,
                     type: 'Actual',
                     name: data.actual.subs[sub]
                  }, 
                  data: data.actual.series, 
                  type: 'line',
                  point: {
                     visible: false
                  },
                  color: color.rgbToString(thisColor)
               });

               $actualList.append(Mustache.render(self.legendTemplate,{color: thisColor.className,name: data.actual.subs[sub].match(/\w+/)[0]}));
            }
         });


         //define the area chart
         window.trendChart = $el.dxChart({
            size: {
               width: 685,
               height: 275
            },
            margin: {
               left: 7,
               right: 4
            },
            commonAxisSettings: {
               label: {
                  font: {
                     color: color.rgbToString(color.getTextColor('lightGray')),
                     family: 'Roboto',
                     weight: 300
                  }
               }
            },
            commonPaneSettings: {
               border: {
                  visible: true,
                  left: true,
                  right: false,
                  top: false,
                  color: color.rgbToString(color.getTextColor('lightGray'))
               }
            },
            commonSeriesSettings: {
               //setup default series options
               argumentField: 'dateObj',
               type: 'line',
               hoverMode: 'none',
               border: {
                  color: color.rgbToString(color.getTextColor('darkGray')),
                  width: 2,
                  visible: true
               },
               point: {
                  visible: true,
                  size: 1
               }
            },
            argumentAxis: {
               label: {
                  customizeText: function() {
                     return dataUtils.getMonthShortNameByDate(this.value);
                  }
               }, 
               axisDivisionFactor: 30,
               valueMarginsEnabled: false
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
               visible: false
            },
            tooltip: {
               enabled: false
            },
            pointHover: function(hoveredPoint) {
               self.hoveredPoint = hoveredPoint;
               $point.show();
               $point.attr('style','background-color:' + color.rgbToHex(color.getSubColor(hoveredPoint.series.tag.sub)));
               $point.offset({top: ($el.position().top + hoveredPoint.y) - $point.height() + config.tooltipShivMargin.y , left: $el.position().left + hoveredPoint.x + config.tooltipShivMargin.x});
               var hp = hoveredPoint;
               $point.click(function(e) {
                  e.preventDefault();
                  $('#tooltipShiv').popover('destroy');
                  $point.attr('style', 'left: -10px');
                  self.showTooltip($el,endPoint);
               });

               $point.mouseout(function() {
                  $point.hide();
               });


               $point.mouseleave(function() {
                  $point.hide();
               });

            }, 
            done: function() {
               
               $('#trendLegend').position({
                  my: 'right top',
                  at: 'right-50 top+10',
                  of: $('#aiRangeChart')
               }).fadeIn();
               
            },
         });
      }
   }
});

