const express = require('express')
const router = express.Router()
const user = require('./config')
router.get('/',(req,res)=>{
    res.send('Cards')
})

router.get('/new',(req,res) => {
    res.send('New card')
})

router.post('/new',async(req,res) => {
    const data = req.body;
    console.log('Data',data)
    // await user.add(data)
    res.send('Create card')
})

router
    .route('/:id')
    .get((req,res) =>{
        console.log(req.user)
        res.send(`Get card with id ${req.params.id}`)
    })
    .put((req,res) =>{
        res.send(`Update card with id ${req.params.id}`)
    })
    .delete((req,res) =>{
        res.send(`Delete card with id ${req.params.id}`)
    })


const users =[{name:'ali'},{name:'sally'}];

router.param('id',(req,res,next,id) => {
    req.user = users[id]
    next()

})


module.exports = router