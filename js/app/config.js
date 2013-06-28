define(function() {
	return {
		defaults: {
			subs:['DCS'],
			endPoints: {
				trend: 'accountsReceivableTrend'
			}
		},
		tooltipShivMargin: {
			x: -5,
			y: 5
		},
		endPoints: {
			accountsReceivableTrend: {
				local: 'http://localhost:3000/ai/js/fixtures/api.js',
				remote: 'http://aidashboard.azurewebsites.net/api/accountsreceivabletrend'
			},
			paymentsTrend: {
				local: 'http://localhost:3000/ai/js/fixtures/api.js',
				remote: 'http://aidashboard.azurewebsites.net/api/paymentstrend'
			}
		},
		preSelectedSubs: ['PRG','FRS','ICR','IHT']
	}
});