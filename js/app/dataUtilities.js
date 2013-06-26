/*************************
Data Utilities
*************************/
define(['fixtures/constants', 'fixtures/trendData'], function(constants,trendData){
	var self = this;
	return {
		getMonthShortNameByDate: function(date) {
			var aDate = new Date(date);
			return constants.shortMonthNames[aDate.getMonth()];
		},
		getMonthNameByDate: function(date) {
			return constants.monthNames[date.getMonth()];
		},
		getActualSeriesDataByDate: function(date) {
			var data = [];
			trendData.actual.series.forEach(function(el) {
				if(el.date == date) {
					data = el;
				}
			});
			return data;
		},
		getPlanSeriesDataByDate: function(date) {
			var data = [];
			trendData.plan.forEach(function(el) {
				if(el.date == date) {
					data = el;
				}
			});
			return data;
		},
		translatePointsForTooltip: function(points, primarySub) {
			var data = [];
			for(var prop in points) {
				if (prop != 'date' && prop != 'dateObj') {
					var pointObj ={};
					pointObj.sub = prop;
					pointObj.value = '$' + (points[prop]/1000000).toFixed(2) + 'MM';
					if (primarySub && prop == primarySub) {
						data.unshift(pointObj)
					}
					else
						data.push(pointObj);
				}
			}
			return data;
		}
	}
});
