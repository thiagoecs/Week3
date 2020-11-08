'use strict';
// root route (example with get, post and put)
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('root route with req:', req.query);
    res.send(`Hello World <a href="cat">click</a> <br> with test is ${req.query.test} and fun is ${req.query.more}`);
  });
  
router.post('/', (req, res) => {
    console.log('/ route with post', req.body);
    res.send('Hello root route with http post');
});
  
router.put('/', (req, res) =>{
    console.log('http put');
    res.send('htpp put on root route');
});

module.exports = router;