//レシピ投稿・食材入力フィールド
$(document).on('turbolinks:load', ()=>{
  const buildTextField = (index)=> {
    const html = `<div class="field--flex">
                    <div data-index="${index}" class="js-file_group">
                      <input class="js-file" type="text" name="recipe[foods_attributes][${index}][food_name]" id="recipe_foods_attributes_${index}_food_name">
                    </div>
                    <div data-index="${index}" class="js-file_group">
                      <input class="js-file" type="text" name="recipe[foods_attributes][${index}][amount]" id="recipe_foods_attributes_${index}_amount">
                    </div> 
                    <div class="js-remove"><i class="far fa-window-close"></i></div>
                  </div>`;
    return html;
  }
  //text_fieldのnameに動的なindexをつける
  var count = $('.field--flex').length;
  //投稿編集時
  if (count >= 1) {
    let textIndex = [count, count+1];
    $('#add-btn').on('click', function(e) {
      //textIndexの先頭の数字を使ってinputを作る
      $('#food-field').append(buildTextField(textIndex[0]));
      textIndex.shift();
      //末尾の数に1足した数を追加
      textIndex.push(textIndex[textIndex.length -1] + 1)
  
      var count = $('.field--flex').length;
      if ( count >= 15) {
        $('#add-btn').hide();
        $('#hidden-message').show();
      }
    });
  //新規投稿時
  } else {
    let textIndex = [1,2,3,4,5,6,7,8,9,10];
    $('#add-btn').on('click', function(e) {
      //textIndexの先頭の数字を使ってinputを作る
      $('#food-field').append(buildTextField(textIndex[0]));
      textIndex.shift();
      //末尾の数に1足した数を追加
      textIndex.push(textIndex[textIndex.length -1] + 1)
      var count = $('.field--flex').length;
      if ( count >= 15) {
        $('#add-btn').hide();
        $('#hidden-message').show();
      }
    });
  }
  //入力欄の削除
  $('#food-field').on('click', '.js-remove', function() {
    const targetIndex = $(this).parent().data('index')
    // 該当indexを振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-food-destroy`);
    if (hiddenCheck) {
      $(hiddenCheck).prop('checked', true);
    }
    $(this).parent().remove();
    var count = $('.field--flex').length;
    if ( count < 15) {
      $('#add-btn').show();
      $('#hidden-message').hide();
    }
  });
});