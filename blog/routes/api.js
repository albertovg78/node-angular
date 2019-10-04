var express = require('express');
var router = express.Router();

let apiPostsRouter = require('./api/posts');
router.use('/posts', apiPostsRouter);

module.exports = router;