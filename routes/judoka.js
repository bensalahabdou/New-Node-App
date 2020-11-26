const express = require('express');
const router = express.Router();
const Judoka = require('../models/judoka');

router.get('/', (req, res)=>{
    res.render( 'pages/about',{ title: "About"})
})

router.get('/judokas', (req, res)=>{ 
    Judoka.find().sort({ createdAt: -1 })
    .then(result => {
        console.log(result)
        res.render( 'pages/judokas',{ judokas: result , title: "Judokas"})
    })
    .catch(err => {
        console.log(err)
    })
    
})
router.get('/create', (req, res)=>{ 

    res.render('pages/create', {title: 'create new judoka'})

})



router.post('/judokas', (req, res)=>{
    console.log(req.body)
const judoka = new Judoka( req.body )
judoka.save()
.then(result => {

    res.redirect('/judokas')
})
.catch(err => {
    console.log(err)
})
})

router.get('/judokas/:id', (req, res)=>{ 
    const id = req.params.id
    Judoka.findById(id)
    .then(result => {
        res.render('pages/judoka', { judoka: result, title: 'Judoka details'})
    })
    .catch(err => {
        console.log(err)
    })
    
})

router.delete('/judokas/:id', (req, res)=>{ 
    const id = req.params.id
    Judoka.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/judokas'})
    })
    .catch(err => {
        console.log(err)
    })
    
})


module.exports = router;