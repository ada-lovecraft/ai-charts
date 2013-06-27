/*************************
Gauge Chart 
*************************/
define(['app/colorUtilities', 'app/chartConfig'], function(color,config) {
	return {
			//Creates/shows the gauge chart
			show: function(summary) {
				var point = summary.point;
				//grabs the color of the pie slice and converts it to an rgb object
				var endColor = color.hexToRGB(point.styles.themeColor);
				//sets the end point to be either the actual value or the planned value depending on value
				var endPoint = summary.plan > summary.actual ? summary.plan : summary.actual;

				var tickInterval = endPoint / config.rangeCount;
				var rangeMarker = endPoint / config.rangeCount;

				
				var actualMarkerColor = color.palette.black;
				if (summary.actual > summary.plan) {
					actualMarkerColor = color.palette.red;
				}

				//define the ranges
				/*
					NOTES:
					I'm not exactly sure how the ranges are implemented. That is,
					it works, but I'm not exactly sure why.
				*/ 
				var ranges = [];	
				for (var i = 0; i < config.rangeCount; i++) { 
					ranges.push( {
						startValue: Math.ceil(i*rangeMarker),
						endValue: Math.ceil((i*rangeMarker) + rangeMarker),
						color: color.rgbToString(color.fade(color.palette.darkGray, endColor,config.rangeCount,i)),
					});
				}
				
				$gaugeChart = $("#aiGaugeChart")
				$gaugeChart.fadeIn();
				$gaugeChart.click( function() { 
					$(this).fadeOut();
				});
				
				$gaugeChart.dxCircularGauge({
					title: summary.contractorName,
					size: {
						width: 400,
						height: 300
					},
					scale: {
						startValue: 0,
						endValue: endPoint,
						majorTick: {
						   		tickInterval: Math.ceil(tickInterval)
						}
					},

					rangeContainer: {
						ranges: ranges
					},

					needles: [
						{
							value:summary.actual
						},
						{
							value:summary.actual,
							color: color.rgbToString(actualMarkerColor),
							type: 'rhombus'
						},
						{
							value:summary.plan,
							color: color.rgbToString(endColor),
							type: 'rhombus'
						}
					],
					markers: [
						{
							value: summary.actual, 
							color: color.rgbToString(actualMarkerColor),
							verticalOrientation: 'bottom',
							text: {
								customizeText: function() {
									return "Actual: " + this.value.toFixed(2)
								},
								font: {
									weight: 100,
									family: 'Courier',
									size: 'x-small'
								}
							}
						},
						{
							value: summary.plan, 
							color: color.rgbToString(endColor),
							text: {
								customizeText: function() {
									return "Planned: " + this.value.toFixed(2)
								},
								font: {
									weight: 100,
									family: 'Courier',
									size: 'x-small'
								}
							}
						}
						
					]
				});
			$gaugeChart.fadeIn();
			$gaugeChart.position({
				my: 'center center',
				at: 'center center',
				of: $('#aiPieChart')
			});

		}
	}
 
});