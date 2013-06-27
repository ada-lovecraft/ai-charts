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
			var ms = date.getTime();
			var data = [];
			trendData.actual.series.forEach(function(el) {
				var elms = el.dateObj.getTime();
				if(elms == ms) {
					data = el;
				}
			});
			return data;
		},
		getPlanSeriesDataByDate: function(date) {
			var ms = date.getTime();

			var data = [];
			trendData.plan.series.forEach(function(el) {
				var elms = el.dateObj.getTime();
				if(elms == ms) {
					data = el;
				}
			});
			return data;
		},
		translatePointsForTooltip: function(points, primarySub) {
			console.log('primarySub:',primarySub);
			var data = [];
			for(var prop in points) {
				if (prop != 'date' && prop != 'dateObj') {
					var pointObj ={};
					pointObj.sub = prop;
					pointObj.value = '$' + (points[prop]/1000000).toFixed(2) + 'MM';
					if (primarySub && prop == primarySub) {
						pointObj.highlighted = "highlighted";
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
