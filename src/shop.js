class Shop {
  constructor() {
    this.items = {
      'A': 50,
      'B': 30,
      'C': 20,
      'D': 15
    }
  }

  checkout = (str) => {
    const array = str.split('')
    let total = 0

    for (var i = 0; i < array.length; i++) {
      total += this.items[array[i]]
    }
    return total
  }
}

module.exports = Shop
