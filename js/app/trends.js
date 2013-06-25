/*************************
Pie Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','fixtures/trendData','dx.chartjs.debug'], function(dataUtils,color,trendData) {
   return {


      show: function($el) {
         //define series from trendData
         var series = [];
         
         trendData.plan.subs.forEach(function(sub) {
            series.push({
               valueField: sub, 
               name:sub, 
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
            var seriesObj = {};
            series.push({
               valueField: sub, 
               name:sub, 
               data: trendData.actual.series, 
               type: 'line',
               point: {
                  visible: false
               }
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
                  color: color.rgbToString(color.palette.darkGrey),
                  width: 2,
                  visible: true
               },
               point: {
                  visible: true,
                  size: 3
               }
            },
            valueAxis: {
               title: 'Millions (USD)',
               label: {
                  customizeText: function(point) {
                     return point.value/1000000;
                  }
               }

            },
            //define our series data
            series: series,
            legend: {
               verticalAlignment: 'bottom',
               horizontalAlignment: 'center'
            },
            tooltip: {
               argumentFormat: 'fixed',
               precision: 2,
               enabled: true,
               customizeText: function() {
                  return '$' + (this.value/1000000).toFixed(2) + ' M';
               }
            }
         });
      },
      update: function(startIndex,endIndex) {
         var chartData = dataUtils.getRangeDataByIndex(startIndex, endIndex);

      }
   }
});