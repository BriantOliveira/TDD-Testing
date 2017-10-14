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
        it('Should return the number of items in the cart', () => {

            const charlie = { price: 99.99, name: "puth" };
            const puth = { price: 99999999999.99, name: "charlie" };

            var cart = new ShoppingCart();

            cart.addItem(charlie);
            cart.addItem(puth);
            cart.addItem(puth);
            cart.addItem(puth);

            // Test
            expect(cart.count()).to.equal(4)

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
        describe('ShoppingCart', function () {
            it('Should update the count of items in the cart', () => {

                const Colten = { price: 99.99, name: "Haynes" };
                const Haynes = { price: 99999999999.99, name: "Colten" };

                // Tests
                var cart = new ShoppingCart();
                expect(cart.count()).to.equal(0);

                cart.addItem(Haynes);
                expect(cart.count()).to.equal(1);

                cart.addItem(Colten);
                expect(cart.count()).to.equal(2);

                cart.addItem(Colten);
                expect(cart.count()).to.equal(3);

                cart.remove('Haynes');
                expect(cart.count()).to.equal(2)

            });
        });

        it('Should remove an item when its count is 0', () => {

            const Colten= { price: 99999999999.99, name: "Colten" };

            var cart = new ShoppingCart();

            // Tests
            cart.addItem(Colten);
            expect(cart.count()).to.equal(1);

            cart.remove('Colten');
            expect(cart.size()).to.equal(0);

        describe('CartSummary', function () {
            it('Should return the total cost of all items in the cart', function () {
                var cartSummary = new CartSummary([]);
                expect(cartSummary.getSubtotal()).to.equal();
            });
        });
    });
});
