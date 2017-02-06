
// title
document.querySelector('.resto-title').textContent = contenu.name;

// baseline
document.querySelector('.resto-baseline').textContent = contenu.baseline;

// description
document.querySelector('.resto-desc').textContent = contenu.description;

// address
document.querySelector('.resto-address').textContent = contenu.addresse;
document.querySelector('.resto-codepostal').textContent = contenu.codePostale;
document.querySelector('.resto-ville').textContent = contenu.ville;

// map
var urlMap = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDg2DB12Om4J0Ues3pgqrEX9SZ6P8FbwWg&q='+encodeURIComponent(contenu.addresse)+'+'+contenu.codePostale+'+'+contenu.ville;
document.querySelector('.resto-gmap>iframe').src = urlMap;

// sidebar
 $('.ui.sidebar').sidebar('attach events', '.toc.item');

// panier

$('.ui.modal.panier')
  .modal()
;

$('.panier.button').on('click', function(e) {
  $('.ui.modal.panier').modal('show')
});
