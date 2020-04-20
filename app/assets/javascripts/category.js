//モーダルの表示・非表示
$(document).on('turbolinks:load', function() {
  $('#open-category-modal').on('click', function() {
    $('#category-modal').show();
    $('#category-mask').show();
  });
});
$(document).on('turbolinks:load', function() {
  $('#close-category-modal').on('click', function() {
    $('#category-modal').hide();
    $('#category-mask').hide();
  });
});