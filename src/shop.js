class Shop {

  checkout = (str) => {
    if (str === 'A') {
      return 50
    } else {
      return 30
    }
  }
}

module.exports = Shop
