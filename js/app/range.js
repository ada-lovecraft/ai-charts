/*************************
Range Selection Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','fixtures/trendData','dx.chartjs.debug'], function(dataUtils,color,trendData) {
	return {
		show: function($rangeEl) {
			$("#rangeSelectorContainer").dxRangeSelector({
   	 			scale: {
        			startValue: new Date(trendData.actual.series[0].dateObj),
        			endValue: new Date(trendData.actual.series[trendData.actual.series.length-1].dateObj),
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
    			chart: {
    				commonSeriesSettings: {
		               //setup default series options
		               argumentField: 'dateObj',
		               point: {
		                  visible: false,
		                  size: 3
		               }
		            },
		            //define our series data
		            series: [

		               {
		               	  data: trendData.actual.series,
		               	  type: 'spline',
		                  valueField: 'DCS',
		                  color: color.rgbToString(color.getTextColor('darkGrey')),
		               },
		               {
		               	  data: trendData.plan.series,
		               	  type: 'splinearea',
		                  valueField: 'DCS',
		                  color: color.rgbaToString(color.getTextColor('darkGrey'),.2),
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