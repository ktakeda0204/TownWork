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
        var list = ["#HOKKAIDO", "#IWATE", "#MIYAGI"];
        for ( var index = 0; index < list.length; index++ ){
            var $prefecture = $japan_map.find(list[index]);
            $prefecture.css("fill", "#0000ff");
        }
    });

    $('#btn-test3').on("click", function() {
        $('#path3').css({ fill: "#0000ff" });
    });

    $('#btn-search').on("click", function() {

        // receive data from HTML
        var data = { request : $('#request').val()};
        alert($('#request').val())

        // Ajax 
        $.ajax({
            type: "POST", // POST
            url: "./mysql_map.php", // Define the destination URL
            data: data,
            dataType : "json",

            // if the process succeed
            success : function(data, dataType) {
                // add the response data to HTML file 
                //                $('#res').html(data);
                var japan_map = document.getElementById("japan_map").contentDocument;
                var $japan_map = $(japan_map);
                if ( !japan_map ) {
                    alert("SVG file ID was not found.");
                }
                alert(data);
                for ( var index = 0; index < data.length; index++ ){
                    var $prefecture = $japan_map.find(data[index]);
                    $prefecture.css("fill", "#0000ff");
                }
            },

            // error
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Failed: XMLHttpRequest : " + XMLHttpRequest.status + " txtStatus : " + textStatus + " errorThrown : " + errorThrown.message); 
            },
        });
    return false;
    });
    
    $('#btn-all').on("click", function() {
        // Ajax 
        $.ajax({
            type: "POST", // POST
            url: "./mysql_map.php", // Define the destination URL
            data: {request : "dummy"},
            dataType : "json",

            // if the process succeed
            success : function(data, dataType) {
                // add the response data to HTML file 
                //                $('#res').html(data);
                var japan_map = document.getElementById("japan_map").contentDocument;
                var $japan_map = $(japan_map);
                if ( !japan_map ) {
                    alert("SVG file ID was not found.");
                }
                for ( var index = 0; index < data.length; index++ ){
                    if ( data[index]['isFinished'] == '1') {
                        var $prefecture = $japan_map.find(data[index]['prefecture']);
                        $prefecture.css("fill", "#4169e1");
                    }
                }
            },

            // error
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Failed: XMLHttpRequest : " + XMLHttpRequest.status + " txtStatus : " + textStatus + " errorThrown : " + errorThrown.message); 
            },
        });
        return false;
    });
    
    $('#btn-reset').on("click", function() {
        // Ajax 
        $.ajax({
            type: "POST", // POST
            url: "./mysql_map.php", // Define the destination URL
            data: {request : "dummy"},
            dataType : "json",

            // if the process succeed
            success : function(data, dataType) {
                // add the response data to HTML file 
                //                $('#res').html(data);
                var japan_map = document.getElementById("japan_map").contentDocument;
                var $japan_map = $(japan_map);
                if ( !japan_map ) {
                    alert("SVG file ID was not found.");
                }
                for ( var index = 0; index < data.length; index++ ){
                    if ( data[index]['isFinished'] == '1') {
                        var $prefecture = $japan_map.find(data[index]['prefecture']);
                        $prefecture.css("fill", "#ffffff");
                    }
                }
            },

            // error
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Failed: XMLHttpRequest : " + XMLHttpRequest.status + " txtStatus : " + textStatus + " errorThrown : " + errorThrown.message); 
            },
        });
        return false;
    });
    
    $('#btn-townwork').on("click", function() {
        // Ajax 
        $.ajax({
            type: "POST", // POST
            url: "./mysql_map.php", // Define the destination URL
            data: {request : "dummy"},
            dataType : "json",

            // if the process succeed
            success : function(data, dataType) {
                // add the response data to HTML file 
                //                $('#res').html(data);
                var japan_map = document.getElementById("japan_map").contentDocument;
                var $japan_map = $(japan_map);
                if ( !japan_map ) {
                    alert("SVG file ID was not found.");
                }
                for ( var index = 0; index < data.length; index++ ){
                    if ( data[index]['isFinished'] == '1' ) {
                        var $prefecture = $japan_map.find(data[index]['prefecture']);
                        if ( data[index]['magazine'] == 'TownWork') {
                            $prefecture.css("fill", "#4169e1");
                        } else {
                            $prefecture.css("fill", "#a9a9a9");
                        }
                    }
                }
            },

            // error
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Failed: XMLHttpRequest : " + XMLHttpRequest.status + " txtStatus : " + textStatus + " errorThrown : " + errorThrown.message); 
            },
        });
        return false;
    });
    
});
