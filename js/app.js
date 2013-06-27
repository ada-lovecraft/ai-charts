/**************************
Require Config
***************************/
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        fixtures: '../fixtures'
    },
    shim: {
    	"jquery-ui": ['jquery'],
    	"jquery.nouislider.min":['jquery'],
        "chosen.jquery.min":['jquery']
    }
});

/**************************
Require Libs
***************************/
requirejs(['jquery','knockout','mustache','globalize','app/trends','app/range','app/config','chosen.jquery.min','bootstrap.min'],
function   ($,ko,Mustache,globalize,trends,range,dataUtils,config) {    
	var endPoint = $('#charts').data('endpoint') + 'Trend';
    trends.populateSubSelector($('#subSelector'));
    trends.show($('#aiRangeChart'),endPoint);
    range.show($('#aiRangeChart'));
    $('body').on('selectedSub', function(e) {
        trends.show($('#aiRangeChart'), endPoint); 
    })
});



