var title = contenu.name;
var baseline = contenu.baseline;
var desc = contenu.description;

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


var urlMap = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDg2DB12Om4J0Ues3pgqrEX9SZ6P8FbwWg&q='+encodeURIComponent(contenu.addresse)+'+'+contenu.codePostale+'+'+contenu.ville;
document.querySelector('.resto-gmap>iframe').src = urlMap;

// create sidebar and attach to menu open
 $('.ui.sidebar')
   .sidebar('attach events', '.toc.item')
 ;

// slider
var sliderContainer = document.querySelector('.slider');
contenu.images.forEach(function(item, index) {
  var div = document.createElement('div');
  div.classList.add('ui', 'image', 'fluid', 'slide', 'slide'+index);
  div.style.backgroundImage = 'url("'+ item + '")';
  sliderContainer.appendChild(div);
});

// slider anim
var slideIndex = contenu.images.length - 1;
var direction = -1;
var slide = function() {

  var currentSlide = document.querySelector('.slide'+slideIndex);
  currentSlide.style.opacity = (direction > 0) ? 1 : 0;

  if(slideIndex === 1 && direction < 0) {
    direction = +1;
  } else if(slideIndex === 3  && direction > 0) {
    direction = -1;
  } else {
    slideIndex = slideIndex + direction;
  }

  setTimeout(slide, 2000);
};

setTimeout(slide, 2000);

// course list
var coursesContainer = document.querySelector('.courses');
contenu.carte.forEach(function(item) {
  var divItem = document.createElement('div');
  divItem.classList.add('item');

  var divImg = document.createElement('div');
  divImg.classList.add('ui', 'image', 'medium');
  var img = document.createElement('img');
  divImg.appendChild(img);
  img.src = item.image;
  divItem.appendChild(divImg);

  var divContent = document.createElement('div');
  divContent.classList.add('content');
  divItem.appendChild(divContent);

  var h3 = document.createElement('h3');
  h3.classList.add('header');
  h3.textContent = item.name;
  divContent.appendChild(h3);

  var desc = document.createElement('div');
  var descP = document.createElement('p');
  desc.classList.add('description');
  descP.textContent = item.description;
  desc.appendChild(descP);
  divContent.appendChild(desc);

  var price = document.createElement('div');
  price.classList.add('resto-price', 'ui', 'label', 'big', 'black');
  price.textContent = item.price;
  divImg.appendChild(price);

  var divAdd = document.createElement('div');
  divAdd.innerHTML = '<i class="add circle link icon big"></i>';
  divItem.appendChild(divAdd);

  divItem.setAttribute('data-id', item.id);
  coursesContainer.appendChild(divItem);
});

$('.courses i').on('click', function(e) {
  var id = $(this).closest('.item').attr('data-id');

  var items = contenu.carte.filter( function(item) {
    return item.id === Number(id);
  });

  if(items.length > 0) {
    items[0].selected ++;
  }

  refreshCart();

});

var panierContainer = document.querySelector('.panier-container');
var totalContainer = document.querySelector('.panier .total h3');
var panierEntete = '<tr><th></th><th>Plat</th><th>Prix unitaire</th><th>Quantité</th><th>Sous-total</th></tr>';
function refreshCart() {

  // clear
  panierContainer.innerHTML = (getTotalSelected() > 0) ? panierEntete : '';

  // populate cart
  contenu.carte.forEach(function(item) {

    if(item.selected > 0) {

      var tr = document.createElement('tr');
      tr.setAttribute('data-id', item.id);
      var removeTd = document.createElement('td');
      var nameTd = document.createElement('td');
      var priceTd = document.createElement('td');
      var quantityTd = document.createElement('td');
      var totalTd = document.createElement('td');

      tr.appendChild(removeTd);
      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(quantityTd);
      tr.appendChild(totalTd);

      removeTd.innerHTML = '<i class="remove circle link icon big"></i>';
      nameTd.textContent = item.name;
      priceTd.textContent = item.price;
      quantityTd.textContent = item.selected;
      totalTd.textContent = item.selected * parseFloat(item.price);

      panierContainer.appendChild(tr);

    }

  });



  totalContainer.textContent = 'TOTAL : ' + getTotalPrice() + ' €';

  // remove
  $('.panier-container .remove').on('click', function(e) {

    var id = $(this).closest('tr').attr('data-id');
    console.log('id : ', id);

    var items = contenu.carte.filter( function(item) {
      return item.id === Number(id);
    });

    if(items.length > 0) {
      items[0].selected = Math.max(0, items[0].selected - 1);
    }

    refreshCart();

  });

}

function getTotalSelected() {
  return contenu.carte.reduce(function(acc, item) {
    return acc + item.selected;
  }, 0);
}

function getTotalPrice() {
  return contenu.carte.reduce(function(acc, item) {
    if(item.selected > 0) {
      acc += (item.selected * parseFloat(item.price) );
    }
    return acc;
  }, 0);
}

// panier

$('.ui.modal.panier')
  .modal()
;

$('.panier.button').on('click', function(e) {
  $('.ui.modal.panier').modal('show')
});
