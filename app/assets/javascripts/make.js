//レシピ投稿・作り方
//作り方画像プレビュー1
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  lastIndex = $('.js-file_group:last').data('index');
  fileIndex.splice(0, lastIndex);

  $('#image-box1').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
      $('#remove-btn').show();
    } else {  // 新規画像追加の処理
      $('#previews1').append(buildImg(targetIndex, blobUrl));
    }
  });
  $("#image-box1").change(function(){
    $('.present_img1').hide();
    $('#remove-btn').show();
    readURL(this);
  })
  //編集時の削除
  $('#image-box1').on('click', '.edit-remove', function() {
    const targetIndex = $(this).parent().data('index')
    // 該当indexを振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) {
      $(hiddenCheck).prop('checked', true);
    }
  });
  //編集時の削除の取消
  $('#image-box1').on('click', '.edit-leave', function() {
    const targetIndex = $(this).parent().data('index')
    // 該当indexを振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) {
      $(hiddenCheck).prop('checked', false);
    }
  });
  //削除ボタン
  $('#remove-btn').on('click', function(){
    $('#previews1').remove();
    $(this).hide();
    $('.present_img1').show();
    const html = `<div id="previews1">
                      <input class='js-file hidden', type='file', name="recipe[makes_attributes][0][image]", id="recipe_makes_attributes_0_image" class='js-file hidden' >
                    </div>`
    $('#image-box1').append(html);
  });
});
//2
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box2').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
      $('#remove-btn2').show();
    } else {  // 新規画像追加の処理
      $('#previews2').append(buildImg(targetIndex, blobUrl));
    }
  });
  $("#image-box2").change(function(){
    $('.present_img2').hide();
    $('#remove-btn2').show();
    readURL(this);
  })
  //削除ボタン
  $('#remove-btn2').on('click', function(){
    $('#previews2').remove();
    $(this).hide();
    $('.present_img2').show();
    const html = `<div id="previews2">
                      <input class='js-file hidden', type='file', name="recipe[makes_attributes][1][image]", id="recipe_makes_attributes_1_image" class='js-file hidden' >
                    </div>`
    $('#image-box2').append(html);
  });
});
//3
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box3').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
      $('#remove-btn3').show();
    } else {  // 新規画像追加の処理
      $('#previews3').append(buildImg(targetIndex, blobUrl));
    }
  });
  $("#image-box3").change(function(){
    $('.present_img3').hide();
    $('#remove-btn3').show();
    readURL(this);
  })
  //削除ボタン
  $('#remove-btn3').on('click', function(){
    $('#previews3').remove();
    $(this).hide();
    $('.present_img3').show();
    const html = `<div id="previews3">
                      <input class='js-file hidden', type='file', name="recipe[makes_attributes][2][image]", id="recipe_makes_attributes_2_image" class='js-file hidden' >
                    </div>`
    $('#image-box3').append(html);
  });
});
//4
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box4').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
      $('#remove-btn4').show();
    } else {  // 新規画像追加の処理
      $('#previews4').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box4").change(function(){
    $('.present_img4').hide();
    $('#remove-btn4').show();
    readURL(this);
  })
  //削除ボタン
  $('#remove-btn4').on('click', function(){
    $('#previews4').remove();
    $(this).hide();
    $('.present_img4').show();
    const html = `<div id="previews4">
                      <input class='js-file hidden', type='file', name="recipe[makes_attributes][3][image]", id="recipe_makes_attributes_3_image" class='js-file hidden' >
                    </div>`
    $('#image-box4').append(html);
  });
});
//5
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box5').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
      $('#remove-btn5').show();
    } else {  // 新規画像追加の処理
      $('#previews5').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box5").change(function(){
    $('.present_img5').hide();
    $('#remove-btn5').show();
    readURL(this);
  })
  //削除ボタン
  $('#remove-btn5').on('click', function(){
    $('#previews5').remove();
    $(this).hide();
    $('.present_img5').show();
    const html = `<div id="previews5">
                      <input class='js-file hidden', type='file', name="recipe[makes_attributes][4][image]", id="recipe_makes_attributes_4_image" class='js-file hidden' >
                    </div>`
    $('#image-box1').append(html);
  });
});
//6
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box6').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
      $('#remove-btn6').show();
    } else {  // 新規画像追加の処理
      $('#previews6').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box6").change(function(){
    $('.present_img6').hide();
    $('#remove-btn6').show();
    readURL(this);
  })
  //削除ボタン
  $('#remove-btn6').on('click', function(){
    $('#previews6').remove();
    $(this).hide();
    $('.present_img6').show();
    const html = `<div id="previews6">
                      <input class='js-file hidden', type='file', name="recipe[makes_attributes][5][image]", id="recipe_makes_attributes_5_image" class='js-file hidden' >
                    </div>`
    $('#image-box6').append(html);
  });
});