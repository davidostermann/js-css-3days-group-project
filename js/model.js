
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

function addSelected(id) {
  var items = contenu.carte.filter( function(item) {
    return item.id === Number(id);
  });

  if(items.length > 0) {
    items[0].selected ++;
  }
}

function removeSelected(id) {
  var items = contenu.carte.filter( function(item) {
    return item.id === Number(id);
  });

  if(items.length > 0) {
    items[0].selected = Math.max(0, items[0].selected - 1);
  }
}
