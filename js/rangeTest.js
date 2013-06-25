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



  function makeSlider() {
      var rangeData = dataUtils.getRangeDataByIndex();
      var startDateIndex = 0;
      var endDateIndex = rangeData.length - 1;
      trends.show(startDateIndex, endDateIndex);
      /*
      $("#lineCharts span").text(rangeData[0].month + " - " + rangeData[rangeData.length - 1].month);
      $(".dateSlider").noUiSlider({
          range: [0, rangeData.length-1]
         ,start: [0, rangeData.length-1]
         ,step: 1
         ,slide: function(){
            var values = $(this).val();
            startDateIndex = values[0];
            endDateIndex = values[1];
            $("span").text(
               rangeData[values[0]].month +
               " - " +
               rangeData[values[1]].month
            );
         }
      }).mouseup(function() {
        var selectedIndices = $('.dateSlider').val();
        console.log(selectedIndices);
          trends.show(selectedIndices[0],selectedIndices[1]);
      });
      */
  }


  function makeRangeSelector() {
      range.show();
  }


  //main
  $('.nav a').click(function(){
    $('.nav li').removeClass('active');
    $(this).parent().addClass('active');
  });
    

  makeRangeSelector(); 
  makeSlider();



});



