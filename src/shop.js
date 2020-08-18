class Shop {

  checkout = (str) => {
    if (str === 'A' || str === 'AA') {
      return str.length * 50
    } else if (str === 'B') {
      return 30
    } else if(str === 'C') {
      return 20
    } else if (str === 'D') {
      return 15
    } else {
      return -1
    }
  }
}

module.exports = Shop
