/*************************
Data Utilities
*************************/
define(['fixtures/chartData','fixtures/trendData'], function(chartData){
	var self = this;
	this.chartData = chartData;
	return {
		//Data lookup from the summary object
		getSummaryByContractorName: function(contractorName) {
			var summary = null;
			chartData.summary.forEach(function(element, index, array) {
				if (element.contractorName == contractorName) {
					summary =  element;
				}
			});
			return summary;
		},


		//Clean the chart TREND data to be an actual json object
		clean:function () {
			var newData = [];
			var categories = self.chartData.trend.categories;
			var actuals = self.chartData.trend.actual;
			var plans = self.chartData.trend.plan;
			//NOTE: I changed "categories" from the original data to MONTH for more 
			//coherent development
			categories.forEach(function(el,index,array) {
				newData.push({month: new Date(categories[index]), actual: actuals[index], plan: plans[index]});
			});
			data = newData;
			return data;
		},
		cleanTrend: function() {
			
		},
		getRangeDataByIndex: function(start, end) {
			var rangeData = [];
			if (start && end) {
				var data = this.clean()
				for(var i = start; i <= end; i++) {
					rangeData.push(data[i]);
				}
			} else {
				rangeData = this.clean();
			}
			return rangeData;
		},
		getRangeDataByDates: function(start, end) {
			var rangeData = [];
			for(var i = start; i <= end; i++) {
				rangeData.push(data[i]);
			}
			return rangeData;
		}
	}
});
