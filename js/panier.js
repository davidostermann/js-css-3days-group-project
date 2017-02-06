
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
    removeSelected(id);
    refreshCart();

  });

}
