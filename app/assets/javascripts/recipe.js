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

//作り方プレビュー1
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box1').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('#previews1').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box1").change(function(){
    $('.present_img1').remove();
    readURL(this);
  })
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
    } else {  // 新規画像追加の処理
      $('#previews2').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box2").change(function(){
    $('.present_img2').remove();
    readURL(this);
  })
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
    } else {  // 新規画像追加の処理
      $('#previews3').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box3").change(function(){
    $('.present_img3').remove();
    readURL(this);
  })
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
    } else {  // 新規画像追加の処理
      $('#previews4').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box4").change(function(){
    $('.present_img4').remove();
    readURL(this);
  })
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
    } else {  // 新規画像追加の処理
      $('#previews5').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box5").change(function(){
    $('.present_img5').remove();
    readURL(this);
  })
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
    } else {  // 新規画像追加の処理
      $('#previews6').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box6").change(function(){
    $('.present_img6').remove();
    readURL(this);
  })
});
//7
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box7').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('#previews7').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box7").change(function(){
    $('.present_img7').remove();
    readURL(this);
  })
});
//8
$(document).on('turbolinks:load', ()=> {
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<img data-index="${index}" src="${url}" width="140px">`;
    return html;
  }
  $('#image-box8').on('change', '.js-file', function(e) {
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    // 該当indexを持つimgがあれば取得して変数imgに入れる(画像変更の処理)
    if (img = $(`img[data-index="${targetIndex}"]`)[0]) {
      img.setAttribute('src', blobUrl);
    } else {  // 新規画像追加の処理
      $('#previews8').append(buildImg(targetIndex, blobUrl));
    }
  });

  $("#image-box8").change(function(){
    $('.present_img8').remove();
    readURL(this);
  })
});