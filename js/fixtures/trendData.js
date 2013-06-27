/*************************
Trend Data
*************************/
define(['app/config'],function(config) {
	var self = this;
	self.subList = {};

	return {
		getDataForEndPoint: function(ep) {
			var endPoint = ep || config.defaults.endPoints.trend;
			if (window.trendData == undefined)
				window.trendData = {};
			if (window.trendData[endPoint] == undefined) {
				$.ajax({
				    url: config.endPoints[endPoint].remote,
				    dataType: 'json',
				    async: false,
				    error: function (XMLHttpRequest, textStatus, errorThrown) {console.log("ERROR: ",textStatus, errorThrown) },
				    success: function (data) {
				        window.trendData[endPoint] = data;
				    }
				});
			};

			var seriesData = {};
			seriesData.trash = [];
			seriesData.actual = {};
			seriesData.actual.subs = [];
			seriesData.actual.series = [];

			seriesData.plan = {};
			seriesData.plan.subs = [];
			seriesData.plan.series = [];

			var subList=[];
			var actualSubList = [];
			var planSubList = [];

			var actualList = [];
			var actualFinal = [];
			var planList = [];

			trendData[endPoint].Dates.forEach(function(date) {
				var actualDataObj = {date: date, dateObj: new Date(date)};
				var planDataObj = {date: date, dateObj: new Date(date)};
				trendData[endPoint].DataSource.forEach(function(data){
					
					if(subList.indexOf(data.ContractorCode) == -1) { 
						subList[data.ContractorCode] = data.ContractorName;
						self.subList[data.ContractorCode] = data.ContractorName;
					}
					data.DataPoints.forEach(function(dataPoint) {
						if (dataPoint.Date == date) {
							if(data.DataType == "Actual")
								actualDataObj[data.ContractorCode] = dataPoint.Value;
							else if(data.DataType == "Plan") {
								if(planSubList.indexOf(data.ContractorCode) == -1) 
									planSubList[data.ContractorCode] = data.ContractorName;
								planDataObj[data.ContractorCode] = dataPoint.Value;
							} else {
								seriesData.trash.push(dataPoint);
							}
						}
					});
				});

				seriesData.actual.series.push(actualDataObj);
				seriesData.plan.series.push(planDataObj);

			});
			seriesData.actual.subs = subList;
			seriesData.plan.subs = planSubList;
			return seriesData;
		},
		getSubList: function() {
			return self.subList;
		}
	}
	
});