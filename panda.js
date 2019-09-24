$function () {
  //idにsvg-figがついているSVGファイルを取得
  var fig = document.getElementById('svg-fig').contentDocument,
  alert('fig' + fig)
  $fig = $(fig), //変数figにsvgファイルを格納
  $white = $fig.find('#white path');//パンダの白い部分を変数に格納

  //SVGにある#blackのpathオブジェクトをhoverすると、hoverしたパーツだけ赤くする
  $fig.find('#black path').hover(function () {
    $(this).css({
      'cursor': 'pointer', //マウスポインターを変更
      'fill': '#EC0D50'//hover時の図形の色
    });
  },
  function () {
    $(this).css({
      'fill': '#000'
    });
  });

  //SVGにある#wihteのpathオブジェクトをhoverすると、#whiteのグループ全て黄色にする
  $white.hover(function () {
    $white.css({
      'cursor': 'pointer',
      'fill': '#F2E675'
    });
  },
  function () {
    $white.css({
      'fill': '#F2F2F2'
    });
  });

}
