var allMenu = $('#meal-search a.menu-all');
var listMenu = $('#meal-search #more-choice');
allMenu.on('mouseover', (e) => {
  listMenu.addClass('show');
});
allMenu.on('mouseout', (e) => {
  listMenu.removeClass('show');
});
listMenu.on('mouseover', (e) => {
  listMenu.addClass('show');
});
listMenu.on('mouseout', (e) => {
  listMenu.removeClass('show');
});