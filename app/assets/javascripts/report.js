//つくれぽの画像プレヴュー
$(document).on('turbolinks:load', function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#top_img_prev-r').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#report_report_image").change(function(){
    $('.top_present_img-r').remove();
    readURL(this);
  })
});
//モーダルの表示・非表示
$(document).on('turbolinks:load', function() {
  $('#open-report-modal').on('click', function() {
    $('#report-modal').show();
    $('#report-mask').show();
  });
});
$(document).on('turbolinks:load', function() {
  $('#close-report-modal').on('click', function() {
    $('#report-modal').hide();
    $('#report-mask').hide();
  });
});