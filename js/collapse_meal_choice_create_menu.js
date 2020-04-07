$('#timkiemsettp .dish .collapse .add-to-meal').on('click', (e) => {
  $('#timkiemsettp .dish .collapse').removeClass('show');
  $('#timkiemsettp .notification').css({
    'transform': 'scale(1)',
    'padding': '0.5rem'
  });
  setTimeout((e) => {
    $('#timkiemsettp .notification').css({
      'transform': 'scale(0)',
      'padding': '0'
    });
  }, 3000);
});