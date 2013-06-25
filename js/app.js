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
requirejs(['jquery', 'knockout','globalize','app/trends','app/pie','app/range','app/bar','jquery-ui','jquery.nouislider.min'],
function   ($,ko,globalize,trends,pie,range,bar) {
	$pieCharts = $('#pieCharts');
	$trendCharts = $('#trendCharts');
	$rangeCharts = $('#rangeCharts');
	$barCharts = $('#barCharts');

    window.rangeCharts = $rangeCharts;
    window.pieCharts = $pieCharts;
	$pieCharts.show();
	pie.show();

	
    $('#pie').click(function() {
   		console.log('pie');
		$trendCharts.hide();
		$rangeCharts.hide();
		$barCharts.hide();
		$pieCharts.show();
    	pie.show();
    });

	$('#trends').click( function() {
		console.log('lines');
		$rangeCharts.hide();
		$barCharts.hide();
		$pieCharts.hide();
		$trendCharts.show();
    	trends.show($('#aiAreaChart'));
    });

	$('#bar').click( function() {
		console.log('bar');
		$trendCharts.hide();
		$rangeCharts.hide();
		$pieCharts.hide();
		$barCharts.show();
    	bar.show();
    });

	$('#range').click( function() {
		console.log('range');
		$trendCharts.hide();
		$barCharts.hide();
		$pieCharts.hide();

		$rangeCharts.show();
		trends.show($('#aiRangeChart'));
    	range.show($('#aiRangeChart'));
    });

	$('.nav a').click(function(){
		$('.nav li').removeClass('active');
		$(this).parent().addClass('active');
	});

	function hideAll() {
		console.log('hiding');
		$pieCharts.hide();
		$trendCharts.hide();
		$rangeCharts.hide();
		$barCharts.hide();
	}
});



