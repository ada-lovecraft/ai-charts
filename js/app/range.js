/*************************
Range Selection Chart 
*************************/
define(['app/dataUtilities','app/colorUtilities','fixtures/trendData','app/config', 'dx.chartjs.debug'], function(dataUtils,color,trendData,config) {
	
	return {
		show: function($rangeEl,endPoint) {
			var series = [];
			var data = trendData.getDataForEndPoint(endPoint);
			var dateRange = dataUtils.getDateRangeForTrendByEndPoint(endPoint);

			config.defaults.subs.forEach(function(sub) {
				series.push({
			       	  data: data.actual.series,
			       	  type: 'line',
			          valueField: sub,
			          color: color.rgbToString(color.getSubColor(sub))
			       },
			       {
		           	  data: data.plan.series,
		           	  type: 'splinearea',
		              valueField: sub,
		              color: color.rgbaToString(color.getSubColor(sub),config.areaAlpha)
		           }
				);
			});



			$("#rangeSelectorContainer").dxRangeSelector({
				behavior: {
					manualRangeSelectionEnabled: true,
					callSelectedRangeChanged: "onMovingComplete"

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
		            series: series,
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
    			},
   	 			scale: {
        			startValue: dateRange.start,
        			endValue: dateRange.end,
        			marker: {
        				visible: false
        			},
        			label: {
        				visible: false
        			},
        			minorTickInterval: 'month',
        			tick: {
        				opacity: 0
        			},
        			valueType: 'datetime'
    			},
    			size: {
    				width: 730,
    				height: 100
    			},
    			selectedRangeChanged: function (e) {
			        var zoomedChart = $rangeEl.dxChart('instance');
			        zoomedChart.zoomArgument(e.startValue, e.endValue);
			    },       
			    sliderMarker: {
			    	customizeText: function() {
			    		var date = new Date(this.value);
			    		var year = date.getYear();
			    		year = year > 100 ? (year - 100) < 10 ? '0' + (year - 100) : (year-100) : year;
			    		return dataUtils.getMonthShortNameByDate(date) + ' ' + year;
			    	},
			    	font: {
			    		family: 'Roboto',
			    		weight: 300
			    	},
			    	position: 'outside'
			    }
    			
			});
		}
	}
});