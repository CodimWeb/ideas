$(document).ready(function(){

  var calcRow = $('.calc-row');
  var textarea = $('.new-message__text');
  var messageList = $('.message__list');

  textarea.on('input', function(){
    var message = $(this).val();
    calcRow.html(message);
    if(calcRow.outerHeight() > 78 && $(this).attr('rows') == 4) {
      $(this).attr('rows', '7');
    }
  });

  $('.new-message__btn-send').on('click', function(){
    var html = "<div class='message__item append-message'>"+
                  "<div class='modal__user-photo modal__user-photo--sm'>"+
                    "<img src='img/user-1.jpg' alt='' class='full-width'>"+
                  "</div>"+
                  "<div class='message__item__text'>"+
                     textarea.val();+
                  "</div>"+
                  "<div class='message__item__date'>сегодня в 17.45</div>"+
                "</div>"

    messageList.append(html);
    textarea.val('');
  });

  $('.show-modal, .modal-close').on('click', function(){
    $('.modal').toggleClass('active');
  });
});
