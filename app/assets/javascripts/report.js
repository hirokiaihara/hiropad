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
    // $('#top_img_prev').removeClass('.hidden');
    $('.top_present_img-r').remove();
    readURL(this);
  })
});