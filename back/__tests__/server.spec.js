const frisby = require('frisby')

describe('GET /', () => {
    it("should be up and running", function () {
        return frisby.get(`http://localhost:5000/`).expect(`status`, 200)
    })
})