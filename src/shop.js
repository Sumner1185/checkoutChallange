class Shop {
  constructor() {
    this.items = {
      'A': 50,
      'B': 30,
      'C': 20,
      'D': 15
    }
    this.AAA_SPECIAL = 130
    this.BB_SPECIAL = 45
  }

  checkout = (str) => {
    let array = str.split('')
    let total = 0
    
    if (this.hasIllegalCharacters(str)) {
      return -1
    } else if (this.containsSpecialOffer(str)) {
      return this.calculateSpecialOffers(str)
    } else {
      for (var i = 0; i < array.length; i++) {
        total += this.items[array[i]]
      }
      return total
    }
  }

  containsSpecialOffer = (str) => {
    let array = str.split('')
    let countA = array.filter(x => x === 'A').length
    let countB = array.filter(x => x === 'B').length

    if (countA >= 3 || countB >= 2) {
      return true
    }
  }

  calculateSpecialOffers = (str) => {
    let array = str.split('')
    let total = 0
    let countA = array.filter(x => x === 'A').length
    let countB = array.filter(x => x === 'B').length

    total += (countA / 3) * this.AAA_SPECIAL
    total += (countB / 2) * this.BB_SPECIAL

    return total
  }

  hasIllegalCharacters = (str) => {
    let array = str.split('')

    for (var i = 0; i < array.length; i++) {
      if (!this.items[array[i]]) {
        return true
      }
    }
  }

}

module.exports = Shop
