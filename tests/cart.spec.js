const Cart = require('../src/cart');

describe('Cart', () => {
  describe('addItem', () => {
    it('should add a new item on cart', () => {
      const cart = new Cart();
      const oldCountItems = cart.items.length;

      const item = {
        quantity: 1,
        value: 30
      };
      const currentCountItems = cart.addItem(item);

      expect(oldCountItems + 1).toBe(currentCountItems);
      expect(cart.items[0]).toBe(item);
    });

    it('should throw an error', () => {
      const cart = new Cart();

      expect(cart.addItem).toThrow(Error);
    });
  });
});
