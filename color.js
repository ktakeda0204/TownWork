$(function() {
  $('#btn-test1').on("click", function() {
    var japan_map = document.getElementById("japan_map");
    if ( !japan_map ) {
      alert("SVG file ID was not found.");
    }
    var svgDoc = japan_map.contentDocument;
    alert(svgDoc);
    //var $svg = $(svgDoc).find('svg');
    //alert(console.dir($svg));
//    var $svg = $(svgDoc).find("svg");
////    var $svg = $(svg);
//    alert('svg ' + $svg.length );

   // if ( !map ) {
   //   alert('SVG map is null : ' + map);
   // }
   // $prefecture = map.find('#HOKKAIDO');
   // alert('line9 : '+$prefecture.length);
   // $map = $(map);
   // alert($map.length);
   // //$prefecture = $('#HOKKAIDO', $map);
   // //$prefecture = $map.find('path');
   // $prefecture = $map.find('#HOKKAIDO');
   // //    $prefecture = $('#main').find('#btn-test1'); --> lenght = 1
   // alert($prefecture.length);
   // $prefecture.css('fill', '#ff0000');
   // //    $prefecture.find('path').attr('fill', '#ff0000');

   // //var $prefecture = $map.find('#HOKKAIDO'); 
   // //$prefecture.css('fill', '#ff0000');
  });

  $('#btn-test2').on("click", function() {
    var japan_map = document.getElementById("japan_map").contentDocument;
    var $japan_map = $(japan_map);
    if ( !japan_map ) {
      alert("SVG file ID was not found.");
    }
    var list = ["#HOKKAIDO", "#IWATE"];
    for ( var index = 0; index < list.length; index++ ){
        var $prefecture = $japan_map.find(list[index]);
        $prefecture.css("fill", "#0000ff");
    }
  });

  $('#btn-test3').on("click", function() {
    $('#path3').css({ fill: "#0000ff" });
  });

  $('#btn-reset').on("click", function() {
    $('#path1, #path2, #path3').css({ fill: "#ffffff" });
  });

});
