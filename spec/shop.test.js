const Shop = require('../src/shop.js')

describe('shop', () => {

  test('Should return 50 when passed A', () => {
    let shop = new Shop()
    expect(shop.checkout('A')).toEqual(50)
  })
})