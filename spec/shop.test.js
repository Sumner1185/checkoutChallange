const Shop = require('../src/shop.js')

describe('shop', () => {

  beforeEach (() => {
    shop = new Shop()
  })

  test('Should return 50 when passed A', () => {
    expect(shop.checkout('A')).toEqual(50)
  })

  test('Should return 30 when passed B', () => {
    expect(shop.checkout('B')).toEqual(30)
  })

  test('Should return 20 when passed C', () => {
    expect(shop.checkout('C')).toEqual(20)
  })

  test('Should return 15 when passed D', () => {
    expect(shop.checkout('D')).toEqual(15)
  })

  test('Should return 100 when passed AA', () => {
    expect(shop.checkout('AA')).toEqual(100)
  })

  test('Should return 80 when passed AB', () => {
    expect(shop.checkout('AB')).toEqual(80)
  })

  test('Should return 100 when passed ABC', () => {
    expect(shop.checkout('ABC')).toEqual(100)
  })

  test('Should return 115 when passed ABCD', () => {
    expect(shop.checkout('ABCD')).toEqual(115)
  })

  describe('Special offers', () => {

    test('Should return 45 when pass BB', () => {
      expect(shop.checkout('BB')).toEqual(45)
    })

    test('Should return 130 when pass AAA', () => {
      expect(shop.checkout('AAA')).toEqual(130)
    })

    test('Should return 260 when pass AAAAAA', () => {
      expect(shop.checkout('AAAAAA')).toEqual(260)
    })

    test('Should return 175 when pass AAABB', () => {
      expect(shop.checkout('AAABB')).toEqual(175)
    })
  })

  describe('Illegal inputs', () => {

    test('Should return -1 when given anything other than item letters', () => {
      expect(shop.checkout('18')).toEqual(-1)
    })

    test('Should return -1 when given anything other than item letters', () => {
      expect(shop.checkout('-B8x')).toEqual(-1)
    })

    test('Should return -1 when given anything other than item letters', () => {
      expect(shop.checkout('aBc')).toEqual(-1)
    })
  })
})