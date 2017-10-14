var chai = require('chai');
var expect = chai.expect;

describe('CartItem', function () {
    it('Should create a new item with name and price', function() {
        const wrapper = CartItem;
        wrapper.addItem('Shoes');
        wapper.addPrice('10');
        expect(wrapper.state('item')).to.equal(Price);

describe('BeerListContainer', function () {
    it('Should add a new item to the shopping cart', function() {
        const wrapper = BeerListContainer;
        wrapper.addItem('Sam Adams');
        expect(wrapper.state('beers')).to.eql(['Sam Adams']);
        });
    });
        describe('CartSummary', function () {
            it('Should return the number of items in the cart', function () {
                var cartSummary = new CartSummary([]);
                expect(cartSummary.getItem());
            });
        });

        it('Should return an array containing all items in cart', function () {
            var cartSummary = new CartSummary([{
                id: 1,
                item: shirt
            }, {
                id: 2,
                item: shoes
            }, {
                id: 3,
                item: book
            }]);
            expect(cartSummary.getItem());
        });
        
        describe('CartItem', function () {
            it('Should remove items from cart', function (done) {
                var CartItem = sinon.mock(CartItem);
                var expectResult = {status: true};
                CartItem.expects('remove').withArgs({_id: 123}).yields(null, expectResult);
                CartItem.remove({_id:123}), function (err, result) {
                    CartItemMock.verify;
                    CartItemMock.restore();
                    expect(err.status).to.not.be.true;
                    done();

                };
            });
        });
        

// Stretch challenges
        it('Should update the count of items in the cart');
        
        
        it('Should remove an item when its count is 0');

        describe('CartSummary', function () {
            it('Should return the total cost of all items in the cart', function () {
                var cartSummary = new CartSummary([]);
                expect(cartSummary.getSubtotal()).to.equal();
            });
        });
    });
});
