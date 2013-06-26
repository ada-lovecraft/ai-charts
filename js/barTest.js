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
requirejs(['jquery','knockout','globalize','app/bar','app/dataUtilities', 'jquery-ui','jquery.nouislider.min','chosen.jquery.min.js'],
function   ($,ko,globalize,bar,dataUtils) {

  //main
  $('.nav a').click(function(){
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  });
  
  bar.show();


});



