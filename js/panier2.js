function initPanier(){

  var truc = 183;
  console.log('init panier');

  var refreshPanier = function() {

    

  }

  function addToCart (e){
    addSelected(this.parentElement.parentElement.dataset.id);
    refreshPanier();
  }

  $('.add').on("click", addToCart);

}
