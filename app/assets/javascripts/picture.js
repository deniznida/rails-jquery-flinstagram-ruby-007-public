$(function(){
  $('.bottom-content').on('click', '.like-btn', function(event){
    event.preventDefault();
    event.stopPropagation();

    // var picID = $(this).attr('picture_id'); # NOT NEEDED BECAUSE PARAMS WILL GRAB THE PICTURE ID FROM THE URL, WHICH RACK MIDDLEWARE CAN PARSE INTO PARAMS OBJECT.
    
    var url = $(this).parent().attr('href');
    // Also, the 'action'.
    var method = $(this).parent().data('method');
    $.ajax({
      method: method,
      url: url,
      // data: {id: picID}, Not needed, URL params will take precedence
      dataType: 'script'
    });


  });
});