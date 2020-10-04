class Cart {
  /**
   * @type {{ quantity: number, value: number }[]}
   */
  items = [];

  /**
   * Add item in the items array
   * @param {{ quantity: number, value: number }} item
   */
  addItem(item) {
    if (!item || !item.quantity || !item.value) {
      throw Error('Invalid item');
    }

    return this.items.push(item);
  }
}

module.exports = Cart
