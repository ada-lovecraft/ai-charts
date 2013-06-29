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
        "chosen.jquery.min":['jquery'],
        'jquery.blockUI':['jquery']
    }
});

/**************************
Require Libs
***************************/
requirejs(['jquery','knockout','mustache','globalize','app/trends','app/range','app/config','jquery-ui','jquery.blockUI','bootstrap.min'],
function ($,ko,Mustache,globalize,trends,range,dataUtils,config) {   

    $.blockUI.defaults.css = {};
    $.blockUI.defaults.overlayCSS = {};

    /**************************************
    Register Global Event Listeners
    ***************************************/
	var endPoint = $('#charts').data('endpoint') + 'Trend';
    $('#charts').block({message: 'Loading Chart Data', });

    /**************************************
    Register Global Event Listeners
    ***************************************/

    $('body').on('loadingTrendData:'+endPoint, function(e) {        
    });

    $('body').on('loadedTrendData:'+endPoint, function(e) {
        $('#rangeSelectorContainer').show();
        $('#aiRangeChart').show();
        $('#charts').unblock();
    });

    $('body').on('selectedSub', function(e) {
        trends.show($('#aiRangeChart'), endPoint); 
    });


    trends.populateSubSelector($('#subSelector'));
    trends.show($('#aiRangeChart'),endPoint);
    range.show($('#aiRangeChart'));
   
});



