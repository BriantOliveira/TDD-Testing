CarSummary.prototype.getSubtotal = function () {
  return 0;
};

function CartSummary(items) {
    this._item = items;
}

CartSummary.prototype.getItem = function(){
  if (this._item.length){
      return this._item.reduce(function (total, Item) {
          return item += (Item);
      });
  }
};

module.exports = CartSummary;