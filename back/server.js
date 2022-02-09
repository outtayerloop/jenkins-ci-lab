'use strict';

const express = require('express')
const session = require('express-session')
const cors = require('cors')


const app = express()

const PORT = 5000
const HOST = `0.0.0.0`

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(
    session({
        secret: 'secret string',
        resave: true,
        saveUninitialized: true,
        cookie: {},
        pageCountByCurrentUserOrAnyNameYouWant: 0
    })
)

app.get('/', function(req, res){
    if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant = 0
    req.session.pageCountByCurrentUserOrAnyNameYouWant++
    res.set('Access-Control-Allow-Credentials', true)
    res.send({
        pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})