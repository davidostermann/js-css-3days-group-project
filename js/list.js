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

initPanier();

//setTimeout(initPanier, 0);

// $('.courses i').on('click', function(e) {
//   var id = $(this).closest('.item').attr('data-id');
//   addSelected(id);
//   refreshCart();
// });
