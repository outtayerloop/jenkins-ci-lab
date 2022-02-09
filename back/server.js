'use strict';

const express = require('express')
const session = require('express-session')
const cors = require('cors')


const app = express()

const PORT = 5000
const HOST = `0.0.0.0`

app.use(cors())

app.use(
    session({
        secret: 'secret string',
        resave: false,
        saveUninitialized: false,
        cookie: { /* can add cookie related info here */ },
        pageCountByCurrentUserOrAnyNameYouWant: 0
    })
)

app.get('/', function(req, res){
    if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant = 0
    req.session.pageCountByCurrentUserOrAnyNameYouWant++
    res.send({
        pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
})