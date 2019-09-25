
function ConvertMagazine(magazine){
    var magazine;
    switch(magazine){
        case "TownWork": magazine = "タウンワーク"; break;
        case "Rookie": magazine = "ルーキー"; break;
        case "Merit": magazine = "メリット"; break;
        case "TownWorkShain": magazine = "タウンワーク社員"; break;
        case "KyuujinJournal": magazine = "求人ジャーナル"; break;
        default: break;
    }
    return magazine;
}

function ConvertToKanji(prefecture){
    var kanji;
    switch (prefecture){
        case "#OKINAWA": kanji = "沖縄"; break;
        case "#NAGASAKI": kanji = "長崎"; break;
        case "#FUKUOKA": kanji = "福岡"; break;
        case "#SAGA": kanji = "佐賀"; break;
        case "#KUMAMOTO": kanji = "熊本"; break;
        case "#KAGOSHIMA": kanji = "鹿児島"; break;
        case "#MIYAZAKI": kanji = "宮崎"; break;
        case "#OOITA": kanji = "大分"; break;
        case "#EHIME": kanji = "愛媛"; break;
        case "#KOUCHI": kanji = "高知"; break;
        case "#TOKUSHIMA": kanji = "徳島"; break;
        case "#KAGAWA": kanji = "香川"; break;
        case "#YAMAGUCHI": kanji = "山口"; break;
        case "#HIROSHIMA": kanji = "広島"; break;
        case "#OKAYAMA": kanji = "岡山"; break;
        case "#TOTTORI": kanji = "鳥取"; break;
        case "#SHIMANE": kanji = "島根"; break;
        case "#HYOGO": kanji = "兵庫"; break;
        case "#KYOTO": kanji = "京都"; break;
        case "#OSAKA": kanji = "大阪"; break;
        case "#WAKAYAMA": kanji = "和歌山"; break;
        case "#NARA": kanji = "奈良"; break;
        case "#SHIGA": kanji = "滋賀"; break;
        case "#MIE": kanji = "三重"; break;
        case "#HUKUI": kanji = "福井"; break;
        case "#ISHIKAWA": kanji = "石川"; break;
        case "#TOYAMA": kanji = "富山"; break;
        case "#GUFU": kanji = "岐阜"; break;
        case "#AICHI": kanji = "愛知"; break;
        case "#NAGANO": kanji = "長野"; break;
        case "#SIZUOKA": kanji = "静岡"; break;
        case "#NIIGATA": kanji = "新潟"; break;
        case "#YAMANASHI": kanji = "山梨"; break;
        case "#KANAGAWA": kanji = "神奈川"; break;
        case "#TOKYO": kanji = "東京"; break;
        case "#SAITAMA": kanji = "埼玉"; break;
        case "#GUNMA": kanji = "群馬"; break;
        case "#TOCHIGI": kanji = "栃木"; break;
        case "#CHIBA": kanji = "千葉"; break;
        case "#IBARAKI": kanji = "茨城"; break;
        case "#FUKUSHIMA": kanji = "福島"; break;
        case "#MIYAGI": kanji = "宮城"; break;
        case "#YAMAGATA": kanji = "山形"; break;
        case "#IWATE": kanji = "岩手"; break;
        case "#AKITA": kanji = "秋田"; break;
        case "#AOMORI": kanji = "青森"; break;
        case "#HOPPOURYOUDO": kanji = "北方領土"; break;
        case "#HOKKAIDO": kanji = "北海道"; break;
        case "#TOKYO_ISLANDS": kanji = "東京諸島"; break;
        default : 
            break;
    }
    return kanji;
}

function CreateTable(tw_json) {
    
    var table = "<table class='result_menu'>";
    table    += "<tr><th>場所</th><th>雑誌名</th></tr>";
    for ( var index=0; index<tw_json.length; index++){
        if ( tw_json[index]['isFinished'] == '0' ) continue;
        table += "<tr><td>" + ConvertToKanji(tw_json[index]['prefecture']) + "</td><td>" + ConvertMagazine(tw_json[index]['magazine']) + "</td></tr>";
    }
    table += "</table>";
    $('#res').html(table);
}

$(function() {

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
                CreateTable(data);
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
                CreateTable("");
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
                CreateTable(data);
            },

            // error
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Failed: XMLHttpRequest : " + XMLHttpRequest.status + " txtStatus : " + textStatus + " errorThrown : " + errorThrown.message); 
            },
        });
        return false;
    });
    
});
