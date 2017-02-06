var model = {};

model.getTotalSelected = function () {
  return contenu.carte.reduce(function(acc, item) {
    return acc + item.selected;
  }, 0);
};

model.getTotalPrice = function() {
  return contenu.carte.reduce(function(acc, item) {
    if(item.selected > 0) {
      acc += (item.selected * parseFloat(item.price) );
    }
    return acc;
  }, 0);
};

model.addSelected = function(id) {
  var items = contenu.carte.filter( function(item) {
    return item.id === Number(id);
  });

  if(items.length > 0) {
    items[0].selected ++;
  }
};

model.removeSelected = function(id) {
  var items = contenu.carte.filter( function(item) {
    return item.id === Number(id);
  });

  if(items.length > 0) {
    items[0].selected = Math.max(0, items[0].selected - 1);
  }
};
