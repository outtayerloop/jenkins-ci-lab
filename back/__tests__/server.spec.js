const frisby = require('frisby')
const server = require('../server')

describe('GET /', () => {
    it("should be up and running", async () => {
        return frisby.get(`http://localhost:5000/`).expect(`status`, 400)
    })
})

afterAll(async () => {
    await server.run.close()
})