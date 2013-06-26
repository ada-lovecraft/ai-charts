/*************************
Trend Data
*************************/
define(function() {
	var data =  [
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2011-06-01T00:00:00",
	        "Actual": 350698.17,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2011-06-01T00:00:00",
	        "Actual": 1555546,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2011-06-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2011-06-01T00:00:00",
	        "Actual": 189142.63,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2011-06-01T00:00:00",
	        "Actual": 215783.61,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2011-07-01T00:00:00",
	        "Actual": 2661191.53,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2011-07-01T00:00:00",
	        "Actual": 5040145.64,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2011-07-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2011-07-01T00:00:00",
	        "Actual": 3023035.5,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2011-07-01T00:00:00",
	        "Actual": 900307.61,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2011-08-01T00:00:00",
	        "Actual": 5515895.92,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2011-08-01T00:00:00",
	        "Actual": 9842159.75,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2011-08-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2011-08-01T00:00:00",
	        "Actual": 4344276.43,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2011-08-01T00:00:00",
	        "Actual": 4840481.98,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2011-09-01T00:00:00",
	        "Actual": 4033316.37,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2011-09-01T00:00:00",
	        "Actual": 6999715.25,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2011-09-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2011-09-01T00:00:00",
	        "Actual": 3488852.58,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2011-09-01T00:00:00",
	        "Actual": 2104371.08,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2011-10-01T00:00:00",
	        "Actual": 6383417.26,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2011-10-01T00:00:00",
	        "Actual": 12150667.91,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2011-10-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2011-10-01T00:00:00",
	        "Actual": 4080964.39,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2011-10-01T00:00:00",
	        "Actual": 5447814.83,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2011-11-01T00:00:00",
	        "Actual": 6890122.89,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2011-11-01T00:00:00",
	        "Actual": 13294676.64,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2011-11-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2011-11-01T00:00:00",
	        "Actual": 2889850.97,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2011-11-01T00:00:00",
	        "Actual": 2846195.8,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2011-12-01T00:00:00",
	        "Actual": 8655491.87,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2011-12-01T00:00:00",
	        "Actual": 19842115.04,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2011-12-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2011-12-01T00:00:00",
	        "Actual": 3812848.37,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2011-12-01T00:00:00",
	        "Actual": 7269522.14,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-01-01T00:00:00",
	        "Actual": 12212342.1,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-01-01T00:00:00",
	        "Actual": 23208617.97,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-01-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-01-01T00:00:00",
	        "Actual": 4804987.61,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-01-01T00:00:00",
	        "Actual": 7085928.39,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-02-01T00:00:00",
	        "Actual": 11351338.94,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-02-01T00:00:00",
	        "Actual": 20890941.61,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-02-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-02-01T00:00:00",
	        "Actual": 5944920.41,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-02-01T00:00:00",
	        "Actual": 7398070.9,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-03-01T00:00:00",
	        "Actual": 14143829.25,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-03-01T00:00:00",
	        "Actual": 25715410.17,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-03-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-03-01T00:00:00",
	        "Actual": 7124417.45,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-03-01T00:00:00",
	        "Actual": 5857872.86,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-04-01T00:00:00",
	        "Actual": 15738216.81,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-04-01T00:00:00",
	        "Actual": 19352707.01,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-04-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-04-01T00:00:00",
	        "Actual": 5862681,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-04-01T00:00:00",
	        "Actual": 2183847.31,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-05-01T00:00:00",
	        "Actual": 19771309.94,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-05-01T00:00:00",
	        "Actual": 15755552.56,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-05-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-05-01T00:00:00",
	        "Actual": 5819330.48,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-05-01T00:00:00",
	        "Actual": 9679014.69,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-06-01T00:00:00",
	        "Actual": 23284729.76,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-06-01T00:00:00",
	        "Actual": 17479747.97,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-06-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-06-01T00:00:00",
	        "Actual": 3252414.95,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-06-01T00:00:00",
	        "Actual": 6482152.14,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-07-01T00:00:00",
	        "Actual": 21548520.81,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-07-01T00:00:00",
	        "Actual": 21097386.18,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-07-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-07-01T00:00:00",
	        "Actual": 3106974.11,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-07-01T00:00:00",
	        "Actual": 3767777.94,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-08-01T00:00:00",
	        "Actual": 28296795.46,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-08-01T00:00:00",
	        "Actual": 20357939.14,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-08-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-08-01T00:00:00",
	        "Actual": 3767412.72,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-08-01T00:00:00",
	        "Actual": 5547423.24,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-09-01T00:00:00",
	        "Actual": 25585395.89,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-09-01T00:00:00",
	        "Actual": 17009588.74,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-09-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-09-01T00:00:00",
	        "Actual": 4634799,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-09-01T00:00:00",
	        "Actual": 5917710.56,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-10-01T00:00:00",
	        "Actual": 42379272.09,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-10-01T00:00:00",
	        "Actual": 14986289.27,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-10-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-10-01T00:00:00",
	        "Actual": 6209805.35,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-10-01T00:00:00",
	        "Actual": 6737082.11,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-11-01T00:00:00",
	        "Actual": 27561567.12,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-11-01T00:00:00",
	        "Actual": 10997284.86,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-11-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-11-01T00:00:00",
	        "Actual": 4472329.86,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-11-01T00:00:00",
	        "Actual": 6420783.21,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2012-12-01T00:00:00",
	        "Actual": 11938396.28,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2012-12-01T00:00:00",
	        "Actual": 7579272.45,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2012-12-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2012-12-01T00:00:00",
	        "Actual": 2204391.73,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2012-12-01T00:00:00",
	        "Actual": 5927250.11,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2013-01-01T00:00:00",
	        "Actual": 18386580.73,
	        "Plan": 22057967.6
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2013-01-01T00:00:00",
	        "Actual": 6119858.83,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2013-01-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2013-01-01T00:00:00",
	        "Actual": 7596804.76,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2013-01-01T00:00:00",
	        "Actual": 4823586.76,
	        "Plan": 2450885.289
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2013-02-01T00:00:00",
	        "Actual": 31988087.36,
	        "Plan": 69468236.4
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2013-02-01T00:00:00",
	        "Actual": 16261282.75,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2013-02-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2013-02-01T00:00:00",
	        "Actual": 6114446.37,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2013-02-01T00:00:00",
	        "Actual": 8697838.29,
	        "Plan": 7718692.933
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2013-03-01T00:00:00",
	        "Actual": 46811692.25,
	        "Plan": 89149646.26
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2013-03-01T00:00:00",
	        "Actual": 25121978.51,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2013-03-01T00:00:00",
	        "Actual": 10623.57,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2013-03-01T00:00:00",
	        "Actual": 8429403.25,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2013-03-01T00:00:00",
	        "Actual": 12258232.37,
	        "Plan": 9905516.252
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2013-04-01T00:00:00",
	        "Actual": 20140530.26,
	        "Plan": 92605246.26
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2013-04-01T00:00:00",
	        "Actual": 14592714.99,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2013-04-01T00:00:00",
	        "Actual": 173104.26,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2013-04-01T00:00:00",
	        "Actual": 4183898.37,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2013-04-01T00:00:00",
	        "Actual": 11138323.94,
	        "Plan": 10289471.81
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2013-05-01T00:00:00",
	        "Actual": 7332312.88,
	        "Plan": 95481600
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2013-05-01T00:00:00",
	        "Actual": 4716894.31,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2013-05-01T00:00:00",
	        "Actual": 16992.79,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2013-05-01T00:00:00",
	        "Actual": 1333952.63,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2013-05-01T00:00:00",
	        "Actual": 2673501.48,
	        "Plan": 10609066.67
	    },
	    {
	        "ContractorCode": "DCS",
	        "ContractorName": "Performant",
	        "Date": "2013-06-01T00:00:00",
	        "Actual": 0,
	        "Plan": 97828000
	    },
	    {
	        "ContractorCode": "FRS",
	        "ContractorName": "VERITAS Recovery",
	        "Date": "2013-06-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "ICR",
	        "ContractorName": "iCore Healthcare",
	        "Date": "2013-06-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "IHT",
	        "ContractorName": "Ihealth Technologies",
	        "Date": "2013-06-01T00:00:00",
	        "Actual": 0,
	        "Plan": 0
	    },
	    {
	        "ContractorCode": "PRG",
	        "ContractorName": "PRGX  Global",
	        "Date": "2013-06-01T00:00:00",
	        "Actual": 0,
	        "Plan": 10869777.78
	    }
	];



	/***************
	series data prototype
	{
		actual: {
			subs: [ { 
				code:'DCS - Actual','FRS - Actual','ICR - Actual','IHT - Actual','PRG - Actual'],
			series: [
				{
					date: "2013-01-01T00:00:00",
					DCS: 0,
					FRS:0,
					ICR: 0,
					IHT: 0,
					PRG:0
				},
				{
					date: "2013-02-01T00:00:00",
					DCS: 0,
					FRS:0,
					ICR: 0,
					IHT: 0,
					PRG:0
				},
				{
					date: "2013-03-01T00:00:00",
					DCS: 0,
					FRS:0,
					ICR: 0,
					IHT: 0,
					PRG:0
				},
				{
					date: "2013-04-01T00:00:00",
					DCS: 0,
					FRS:0,
					ICR: 0,
					IHT: 0,
					PRG:0
				},
			]
		},
		plan: {
			subs: ['DCS - Plan','PRG - Plan'],
			series: [
			series: [
				{
					date: "2013-01-01T00:00:00",
					DCS: 0,
					PRG:0
				},
				{
					date: "2013-02-01T00:00:00",
					DCS: 0,
					PRG:0
				},
				{
					date: "2013-03-01T00:00:00",
					DCS: 0,
					PRG:0
				},
				{
					date: "2013-04-01T00:00:00",
					DCS: 0,
					PRG:0
				},
			]
		}
	*************************/
	var seriesData = {};
	seriesData.actual = {};
	seriesData.actual.subs = [];
	seriesData.actual.series = [];

	seriesData.plan = {};
	seriesData.plan.subs = [];
	seriesData.plan.series = [];

	var dateList = [];
	var subList=[];
	var actualSubList = [];
	var planSubList = [];

	var actualList = [];
	var actualFinal = [];
	var planList = [];

	data.forEach(function(el,index,array) {
		var date = el.Date;
		var sub = el.ContractorCode;
		var actual = el.Actual;
		var plan = el.Plan;
		if (dateList.indexOf(date) == -1) {
			dateList.push(date);
		}
		if (subList.indexOf(sub) == -1) {
			subList.push(sub)
		}
		if(actualSubList.indexOf(sub ) == -1) 
			actualSubList.push(sub)
		if(plan !=0 && planSubList.indexOf(sub) == -1) {
			planSubList.push(sub);
		}
	});

	dateList.forEach(function(date) {
		var actualObj = {date: date, dateObj: new Date(date)};
		var planObj = { date: date, dateObj: new Date(date) };
		subList.forEach(function(sub) {			
			data.forEach(function(data) {
				if(data.Date == date && data.ContractorCode == sub) {
					actualObj[sub] = data.Actual;
					
					if (planSubList.indexOf(sub) != -1) {
						planObj[sub] = data.Plan;
					}
				}
			});
		});

		seriesData.actual.series.push(actualObj);
		seriesData.plan.series.push(planObj);
	});
	seriesData.actual.subs = actualSubList;
	seriesData.plan.subs = planSubList;
	return seriesData;
});