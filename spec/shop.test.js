const Shop = require('../src/shop.js')

describe('shop', () => {

  test('Should return 50 when passed A', () => {
    let shop = new Shop()
    expect(shop.checkout('A')).toEqual(50)
  })

  test('Should return 30 when passed B', () => {
    let shop = new Shop()
    expect(shop.checkout('B')).toEqual(30)
  })
})