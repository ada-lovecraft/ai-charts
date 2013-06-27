define(function() {
	return {
		tooltipShivMargin: {
			x: -5,
			y: 5
		},
		endpoints: {
			trend: {
				local: 'http://localhost:3000/ai/js/fixtures/api.js',
				remote: 'http://aidashboard.azurewebsites.net/api/accountsreceivabletrend'
			}
		},
		defaultSubs: ['DCS'],
		preSelectedSubs: ['PRG','FRS','ICR','IHT']
	}
});