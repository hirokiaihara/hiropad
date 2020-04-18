//トップ画像のプレビュー表示
$(document).on('turbolinks:load', function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#top_img_prev').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#recipe_top_image").change(function(){
    // $('#top_img_prev').removeClass('.hidden');
    $('.top_present_img').remove();
    readURL(this);
  })
});
//投稿欄表示
$(document).on('turbolinks:load', ()=>{
  $('#btn-field-left').on('click', function() {
    $('#btn-field-left').hide();
    $('#hidden-point-text').show();
  });
  
  $('#btn-field-right').on('click', function() {
    $('#btn-field-right').hide();
    $('#hidden-background-text').show();
  });
});
//投稿欄隠す
$(document).on('turbolinks:load', ()=>{
  $('#remove-btn-left').on('click', function() {
    $('#btn-field-left').show();
    $('#hidden-point-text').hide();
  });
  
  $('#remove-btn-right').on('click', function() {
    $('#btn-field-right').show();
    $('#hidden-background-text').hide();
  });
});

