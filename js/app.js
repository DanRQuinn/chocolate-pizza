$('#shopping-list').on('change','input[type=checkbox]',function(){
  var input = $(this).parent().siblings('input[type=text]');
  $('input').css('textDecoration','line-through');

});

$('input').css('textDecoration','line-through');
