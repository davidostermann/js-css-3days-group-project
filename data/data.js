var contenu;

$.getJSON({
  url: "data/data.json",
  context: document.body
}).done(function(data) {

  contenu = data;

  initTexts();
  initSlider();
  initList();
  initMap();

});
