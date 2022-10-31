const express = require('express')
const app = express()

app.set('view engine','ejs')

app.use(express.static('public'))


const CardsRouter = require('./routes/cards')

app.use('/cards',CardsRouter)

app.listen(3000)