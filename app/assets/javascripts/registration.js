$(document).on('turbolinks:load', function () {
  // 誕生日の配列を宣言
  var birth_year = [];
  var birth_month = [];
  var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 現在の年を取得する
  var date = new Date();
  var this_year = date.getFullYear();
  var oldest_year = 1900;
  //誕生年月自動生成
  for (var i = this_year; i >= oldest_year; i--) {
    var year = {var: i, txt: String(i)};
    birth_year.push(year);
  }
  for (var i = 1; i <= 12; i++) {
    var month = {var: i, txt: String(i)};
    birth_month.push(month);
  }
  //セレクトボックスに配列内容を反映
  for (var i = 0; i < birth_year.length; i++) {
    $("<option>", {
      value: birth_year[i].var,
      text: birth_year[i].txt
    }).appendTo('#select_birth_year');
  }
  for (var i = 0; i < birth_month.length; i++) {
    $("<option>", {
      value: birth_month[i].var,
      text: birth_month[i].txt
    }).appendTo('#select_birth_month');
  }
  //年、月に変更が会ったら日の内容を変更する
  $('#select_birth_year, #select_birth_month').change(function() {
    //日をリセット
    $('#select_birth_day').empty();
    //'--'を入れる
    $("<option>", {
      text: '--'
    }).appendTo('#select_birth_day');
    //2月を28にセットし直す
    months[1] = 28;
    //年、月の入力値を取得
    var year = $('#select_birth_year').val();
    var month = $('#select_birth_month').val();
    //year, momth共に入力されている時に実行
    if (year != '--' && month != '--') {
      //monthが2の時に実行
      if (month == 2) {
        //yearが閏年
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
          months[1] = 29;
        }
      }
      //日を入れる配列
      var birth_day = []
      //セレクトボックスに反映
      for (var i = 1; i <= months[month - 1]; i++) {
        var day = {var: i, txt: String(i)};
        birth_day.push(day);
      }
      for (var i = 0; i < birth_day.length; i++) {
        $("<option>", {
          value: birth_day[i].var,
          text: birth_day[i].txt
        }).appendTo('#select_birth_day');
      };
    };
  });
});