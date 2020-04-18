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

  $('#food-field').on('click', '.js-remove', function() {
    $(this).parent().remove();
    //1個にならないように
    //if ($('.js-file').length == 0) $('#food-field').append(buildTextField(textIndex[0]));
    var count = $('.field--flex').length;
    if ( count < 15) {
      $('#add-btn').show();
      $('#hidden-message').hide();
    }
  });
  
  
  
});