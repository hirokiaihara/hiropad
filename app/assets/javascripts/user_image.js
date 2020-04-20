$( document ).on('turbolinks:load', function() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
 
      reader.onload = function (e) {
        $('#user_img_prev').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
 
  $("#user_user_image").change(function(){
    $('#user_img_prev').removeClass('hidden');
    $('.user_present_img').remove();
    readURL(this);
  });
});