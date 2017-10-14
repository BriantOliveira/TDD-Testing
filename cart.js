var chai = require('chai');
const expect = ('chai').expect;
const ShoppingCart = require('./shoppingcart');

    it('Should create a new item with name and price', function () {
      const shirt = {
          price: 9.99,
          name: "shirt"
      };
        var cart = new ShoppingCart();
      cart.addItem(shirt);
        // expect(cart.finish()).to.have.keys('name', 'price', 'quantity')

    });

it('Should add a new item to the shopping cart', function () {
            const shoes = {
                price: 99.99,
                name: "shoes"
            };

            var cart = new ShoppingCart();
            const before = cart.items.lenght;
            cart.addItem(shoes);
            const after = cart.items.leght;
            expect(after).to.equal(before + 1)
        });
            // it('Should add a new item to the shopping cart', function () {
            //     const wrapper = BeerListContainer;
            //     wrapper.addItem('Sam Adams');
            //     expect(wrapper.state('beers')).to.eql(['Sam Adams']);
            // });


        it('Should return the number of items in the cart', () => {

            const hat = {price: 10.99, name: "hat"};
            const jacket = {price: 999.99, name: "jacket"};

            var cart = new ShoppingCart();

            cart.addItem(hat);
            cart.addItem(jacket);
            cart.addItem(jacket);
            cart.addItem(jacket);

            // Test
            expect(cart.count()).to.equal(4)

        });
        it('Should return an array containing all items in cart', function () {
          const shirt = {
                id: 1,
                name: "shirt",
                price: 9.99
            };
            const shoes = {
                id: 2,
                name: "shoes",
                price: 99.99
            };
            const hat = {
                id: 3,
                name: "hat",
                price: 10.99
            };
            const jacket = {
                id: 4,
                name: "jacket",
                price: 999.99
            };

            var cart = new ShoppingCart();

            cart.addItem(shirt);
            cart.addItem(shoes);
            cart.addItem(hat);
            cart.addItem(jacket);

        });
           expect(cart.cart()).to.be.an('array');

            it('Should remove items from cart', function () {

                const shirt = {
                    price: 9.99,
                    name: "shirt"
                };
                const shoes = {
                    price: 99.99,
                    name: "shoes"
                };
                const hat = {
                    price: 10.99,
                    name: "hat"
                };
                const jacket = {
                    price: 999.99,
                    name: "jacket"
                };

                var cart = new ShoppingCart();

                cart.addItem(shirt);
                cart.addItem(shoes);
                cart.addItem(hat);
                cart.addItem(jacket);

                expect(cart.cart(getNames)).to.include.members(['hat']);

                cart.remove('hat');


                // describe('ShoppingCart', function () {
                //     it('Should remove items from cart', function (done) {
                //         var ShoppingCart = sinon.mock(ShoppingCart);
                //         var expectResult = {status: true};
                //         ShoppingCart.expects('remove').withArgs({_id: 1}).yields(null, expectResult);
                //         Name.remove({_id:1}), function (err, result) {
                //             ShoppingCartMock.verify;
                //             ShoppingCartMock.restore();
                //             expect(err.status).to.not.be.true;
                //             done();
                //
                //         };
                //     });
                // });


// Stretch challenges
        describe('ShoppingCart', function () {
            it('Should update the count of items in the cart', () => {

                const Colten = {price: 859.00, name: "Haynes"};
                const Haynes = {price: 1000.59, name: "Colten"};

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

            const Colten = {price: 859.00, name: "Colten"};

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
