const assert = chai.assert



describe('updateInventory', function () {
  it('is a function', function () {
    assert.equal(typeof updateInventory, 'function')
  })
})
  // Doesn't seem to work because this function relies on event-listeners
  // describe('#updateInventory', function () {
  //   it('should update quantities in the inventory', function () {
  //     let expected = 100
  //     updateInventory('gold-quantity', 100)
  //     let actual = inventory.gold
  //     assert.equal(expected, actual)
  //   })
  // })

  describe('monthFormatter', function () {
    it('is a function', function () {
      assert.equal(typeof monthFormatter, 'function')
    })
    it('returns month name for number', function () {
      assert.equal(monthFormatter(5), 'February')
    })
  })

  describe('randomizer', function () {
    it('is a function', function () {
      assert.equal(typeof randomizer, 'function')
    })
    it('returns a random number', function () {
      let num = randomizer()
      assert.equal(typeof num, 'number')
    })
  })
