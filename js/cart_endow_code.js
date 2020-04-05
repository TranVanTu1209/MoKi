var applyCodeBtn = $('.endow-code input[type="submit"]');
var message = $('.apply-code-notification');
var inputCode = $('.endow-code input[type="text"]');
applyCodeBtn.on('click', (e) => {
  e.preventDefault();
  if (inputCode.val() !== '')
  {
    message.addClass('show');
    setTimeout(() => {
      message.removeClass('show');
    }, 3000);
  }

});