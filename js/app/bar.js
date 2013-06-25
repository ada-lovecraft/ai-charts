/*************************
Bar Chart 
*************************/
define(['fixtures/chartData','app/colorUtilities','dx.chartjs.debug'], function(chartData,color) {
   return {
      show: function(startIndex,endIndex) {
         //define the area chart
         $('#aiBarChart').dxChart({
            dataSource: chartData.summary,
            commonSeriesSettings: {
               //setup default series options
               argumentField: 'contractorName',
               type: 'bar',
               label:{
                  visible: true,
                  format: "fixedPoint",
                  precision: 2
               }
               
            },
            valueAxis: {
               title: 'Millions (USD)',
            },
            //define our series data
            series: [
               { 
                  valueField: 'actual', 
                  name: 'Actual',
                  label: {
                     visible: false
                  },
                  tooltip: {
                     enabled: true
                  },
                  color: color.rgbToString(color.palette.orange)
               },
               { 
                  valueField: 'plan', 
                  name: 'Planned',
                  type: 'spline',
                  label: {
                     visible: false
                  },
                  tooltip: {
                     enabled: true
                  },
                  color: color.rgbToString(color.palette.green)

               }
            ],
            title: {
               text: 'Payments'
            },    
            legend: {
               verticalAlignment: 'bottom',
               horizontalAlignment: 'center'
            }
         });
      }
   }
});