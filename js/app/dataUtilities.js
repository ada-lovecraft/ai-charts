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
		getActualSeriesDataByDate: function(date,endPoint) {
			var ms = date.getTime();
			var data = [];
			var tData = trendData.getDataForEndPoint(endPoint);
			tData.actual.series.forEach(function(el) {
				var elms = el.dateObj.getTime();
				if(elms == ms) {
					data = el;
				}
			});
			return data;
		},
		getSubNameByAbbrev: function(sub) {
			var subs = trendData.getSubList();
			return subs[sub];
		},
		getPlanSeriesDataByDate: function(date,endPoint) {
			var ms = date.getTime();
			var tData = trendData.getDataForEndPoint(endPoint);

			var data = [];
			tData.plan.series.forEach(function(el) {
				var elms = el.dateObj.getTime();
				if(elms == ms) {
					data = el;
				}
			});
			return data;
		},
		translatePointsForTooltip: function(points, primarySub,subList) {
			var subs = trendData.getSubList();
			var data = [];
			for(var prop in points) {
				if (prop != 'date' && prop != 'dateObj') {
					var pointObj ={};
					pointObj.sub = subs[prop];
					if (points[prop] != null)
						pointObj.value = '$' + (points[prop]/1000000).toFixed(2) + 'MM';
					else 
						pointObj.value = '--';
					if (primarySub && prop == primarySub) {
						pointObj.highlighted = "highlighted";
						data.unshift(pointObj)
					}
					else if (subList.indexOf(prop) != -1)
						data.push(pointObj);
				}
			}
			return data;
		}
	}
});
