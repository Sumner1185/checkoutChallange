class Shop {
  constructor() {
    this.items = {
      'A': 50,
      'B': 30,
      'C': 20,
      'D': 15
    }
    this.specialOffers = {
      'AAA': 130,
      'BB': 45
    }
  }

  checkout = (str) => {
    const array = str.split('')
    let total = 0
    
    if (this.hasIllegalCharacters(str)) {
      return -1
    } else if (this.isSpecialOffer(str)) {
      return this.specialOffers[str]
    } else {
      for (var i = 0; i < array.length; i++) {
        total += this.items[array[i]]
      }
      return total
    }
  }

  isSpecialOffer = (str) => {
    if (this.specialOffers[str]) {
      return true
    }
  }

  hasIllegalCharacters = (str) => {
    const array = str.split('')

    for (var i = 0; i < array.length; i++) {
      if (!this.items[array[i]]) {
        return true
      }
    }
  }

}

module.exports = Shop
