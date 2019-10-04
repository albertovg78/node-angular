let express = require('express');
let router = express.Router();
let moment = require('moment');
let  Post= require('../models/post');
let dateCurrent = moment().format();

router.get('/', (req, res) => {
   Post.find((err, posts) => {        
    posts.fecha = moment(posts.fecha).format('YYYY MMM dddd')
    res.render('posts/list',{entradas: posts} )
    if(err) return res.json({err});        
    })    
})

router.get('/new', (req, res) => {
    res.render('posts/new')   
})


router.post('/create', (req, res) => {
    Post.create(req.body, (err, post) => {        
        if(err) return console.log('upppps')
        res.redirect('/posts')   
    })
})

router.get('/edit/:postId', (req, res) => {
    Post.findById(req.params.postId, (err, post)=>{
        if(err) return res.json({error: err})
        let fechaPost = moment(post.fecha).format('YYYY-MM-DD')
        res.render('posts/edit', { entrada: post, fechaCreacion: fechaPost })
    })
})



router.post('/update', (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, req.body, (err, post) => {
        res.redirect('/posts/'+ post._id)
        
    })
})


router.get('/:postId', (req, res) => {
    
    Post.findById(req.params.postId, (err, post)=>{
        res.render('posts/postUpdated', {entrada: post})
    })
})



router.get('/delete/:postId', (req, res) => {
    
  Post.findByIdAndDelete(req.params.postId, (err, post) => {
        if(err) return res.json({err});
       res.render('posts/delete', {entrada: post})
    
    })
    
    
})



module.exports = router;


