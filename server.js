const express = require('express')
const user = require('./config')


const app = express()

app.use(express.json())
app.set('view engine','ejs')

app.use(express.static('public'))


const CardsRouter = require('./routes/cards')

app.use('/cards',CardsRouter)

app.listen(3000)