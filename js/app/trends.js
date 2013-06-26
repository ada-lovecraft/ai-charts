/*************************
Pie Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','fixtures/trendData','fixtures/constants','mustache','dx.chartjs.debug','bootstrap.min'], function(dataUtils,color,trendData,constants,Mustache) {
      console.log(color);
   return {

      show: function($el) {
         //define series from trendData
         var series = [];
         
         trendData.plan.subs.forEach(function(sub) {
            var thisColor = color.getSubColor(sub);
            console.log(sub);
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
         }); 

         trendData.actual.subs.forEach(function(sub) {
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
         }); 

         


         //define the area chart
         $el.dxChart({
            size: {
               width: 800,
               height: 400
            },

            commonSeriesSettings: {
               //setup default series options
               argumentField: 'date',
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
               color.dumpSubs();
               $tooltip = $('#tooltipShiv');
               $tooltip.show();
               $tooltip.offset({top: ($el.position().top + clickedPoint.y) - $tooltip.height() + constants.tooltipShivMargin.y , left: $el.position().left + clickedPoint.x + constants.tooltipShivMargin.x});
               var date = new Date(clickedPoint.argument);
               var titleTemplate = '{{month}} {{year}}';
               var contentTemplate = '<table class="table table-condensed">{{#points}}<tr><td>{{value}}</td><td>{{sub}}</td></tr>{{/points}}</table>';
               var points = dataUtils.translatePointsForTooltip(dataUtils.getActualSeriesDataByDate(clickedPoint.argument), clickedPoint.series.name);
               console.log(points);

               $tooltip.popover({
                  title: Mustache.render(titleTemplate,{month: dataUtils.getMonthNameByDate(date), year: 1900+date.getYear()}),
                  html: true,
                  content: Mustache.render(contentTemplate, {points: points}),
                  animation: false
               })
               $tooltip.popover('show');
               $('body').find('.popover-title').attr('style','background-color:' + color.rgbToString(color.getSubColor(clickedPoint.series.tag.sub)));
               $tooltip.mouseleave(function() {
                  $tooltip.popover('destroy');
                  $tooltip.hide();
               });
            }
         });
      }
   }
});