class Shop {

  checkout = (str) => {
    if (str === 'A') {
      return 50
    } else if (str === 'B') {
      return 30
    } else {
      return 20
    }
  }
}

module.exports = Shop
