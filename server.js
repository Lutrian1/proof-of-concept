import express from 'express'

import { Liquid } from 'liquidjs';

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')

// ----------------------------------------------- LOGIN -----------------------------------------------//

app.get('/login', async function (request, response) {
  response.render('login.liquid');
})

// ----------------------------------------------- Localhost -----------------------------------------------//
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  console.log(`http://localhost:${app.get('port')}/\n\n`)
})