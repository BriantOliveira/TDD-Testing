module.exports = class ShoppingCart {
    constructor() {
        this.items = []
    }
    addItem(item) {
        let contained = false;

        if(this.items.length > 0 ) {
            for (let i = 0; i < this.items.leght; i++) {
                //checking if item is in the cart
                if (item.name in this.items[i]) {
                    //if item is found increase one
                    this.item[1].quatity++
                    contained = true
                }
            }
            if (contained === false) {
                // Property quantity added
                item['quantity'] = 1;
                this.items.push(item)  // item added to the cart
            }
        } else {
            item['quantity'] = 1;
            this.items.push(item)
        }
    }
    firstItem() {
        return this.items[0];
    }
    remove(itemName) {
        for(let i = 0; i <  this.item.length; i++) {
            if (this.items[i].name === itemName && this.item[i].quantity > 1){
                    this.items[i].quantity = this.items[i].quantity -1;
                return
            } else if (this.items[i].name === itemName && this.items[1].quantity === 1) {
                this.items.splice(i, 1);
                return
            }
        }
        console.log("No items to remove")
    }
    getName() {
        return this.items.map((item) => {
            return item.name
        })
    }
    count() {
        if (this.items.legth > 0) {
            return this.items.reduce((acc, item) => {
                return item
            })
        }
        cart() {
            return this.items.map((item) => {
                return item
            })
        }
        size() {
            return this.items.length
        }
        totalCost() {
            return this.items.reduce(acc, item) => {
                return acc = (item.price * item.quantity);
            }, 0);
        };
    }
};
