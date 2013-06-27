/*************************
Pie Chart 
*************************/
define(['fixtures/chartData','app/dataUtilities','app/gauge'], function(chartData,dataUtil,gauge) {
	return {
		//shows the pie chart
		show: function() {
			//define a pie chart
			$("#aiPieChart").dxPieChart({
				title: "Payments",
				dataSource: chartData.summary,
				series: {
					//use contractor name for the display
					argumentField: 'contractorName',
					//use planned amount for the value for each piece
					valueField: 'plan',
					border: {
						color: 'white',
						visible: true,
						width: 10
					},
					selectionMode: 'allArgumentPoints'
				},
				size: {
					width: 400,
					height: 400
				},

				//click handler
				pointClick: function(clickedPoint) {
					//get the summary info 
					var summary = dataUtil.getSummaryByContractorName(clickedPoint.originalArgument);
					//mark the pie piece as selected
					clickedPoint.select();
					//add the "point" field to the 
					summary.point = clickedPoint; 
					gauge.show(summary);
				}
			});
			
		}
	}

});