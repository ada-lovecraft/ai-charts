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
    	"jquery.nouislider.min":['jquery']
    }
});

/**************************
Require Libs
***************************/
requirejs(['jquery','knockout','globalize','fixtures/chartData','app/trends','app/range','app/dataUtilities', 'jquery-ui','jquery.nouislider.min'],
function   ($,ko,globalize,chartData,trends,range,dataUtils) {    
    trends.show($('#aiRangeChart'));
    //range.show($('#aiRangeChart'));
});



