/*************************
Pie Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','dx.chartjs.debug'], function(dataUtils,color) {
   return {
      show: function($el, startIndex,endIndex) {
         //define the area chart
         var chartData = dataUtils.getRangeDataByIndex(startIndex, endIndex);
         
         $el.dxChart({
            size: {
               width: 800,
               height: 400
            },
            dataSource: chartData,

            commonSeriesSettings: {
               //setup default series options
               argumentField: 'month',
               type: 'splinearea',
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
            series: [
               {
                  valueField: 'actual',
                  name:'Actual',
                  color: color.rgbToString(color.palette.orange),
                  border: {
                     color: color.rgbToString(color.palette.orange),
                  },
               },
               {
                  //change this data to a spline series instead of an area series
                  type: 'spline',
                  valueField: 'plan',
                  name:'Planned',
                  color: color.rgbToString(color.palette.green),
                  border: {
                     color: color.rgbToString(color.palette.green),
                  },
               },

            ],

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