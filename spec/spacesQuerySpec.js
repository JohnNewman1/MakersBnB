describe('spaceQuery', function () {
  var spacesQuery = require('../src/spacesQuery')
  var Spaces
  var space

  beforeEach(function () {
    Spaces = {
      create: function (spaceName) {},
      findAll: function () {}
    }

    space = {
      get: function () {}
    }
  })

  describe('createRow', function () {
    it('calls create', function() {
      spyOn(Spaces, 'create')
      spacesQuery.createRow('Homeless Jims Cabin of Love', Spaces)
      expect(Spaces.create).toHaveBeenCalledWith({
        name: 'Homeless Jims Cabin of Love'
      });
    })
  })

  describe('allRows', function () {
    it('calls findAll', async function () {
      spyOn(space, 'get').and.returnValue('string')
      spyOn(Spaces, 'findAll').and.returnValue(new Promise(function (resolve, reject) {
        resolve([space])
      }))
      expect(await spacesQuery.allRows(Spaces)).toEqual(['string'])
    })
  })
})
