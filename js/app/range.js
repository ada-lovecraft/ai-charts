/*************************
Range Selection Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','dx.chartjs.debug','fixtures/trendData'], function(dataUtils,color) {
	return {
		show: function($rangeEl) {
			$("#rangeSelectorContainer").dxRangeSelector({
   	 			scale: {
        			startValue: new Date(chartData[0].month),
        			endValue: new Date(chartData[chartData.length-1].month),
        			minorTickInterval: 'month'
    			},
    			size: {
    				width: 800,
    				height: 150
    			},
				behavior: {
			    	callSelectedRangeChanged: "onMoving"
				},
    			selectedRangeChanged: function (e) {
			        var zoomedChart = $rangeEl.dxChart('instance');
			        zoomedChart.zoomArgument(e.startValue, e.endValue);
			    },       
    			dataSource: trendData,
    			chart: {
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

		            title: "Trends",
		            legend: {
		               verticalAlignment: 'bottom',
		               horizontalAlignment: 'center'
		            },
		            tooltip: {
		               argumentFormat: 'decimal',
		               precision: 2,
		               enabled: true
		            },

		            adjustOnZoom: false
    			}
			});
		}
	}
});