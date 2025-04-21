const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// Obtener posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
});
// Crear post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        date: req.body.date,
        hashtags: req.body.hashtags,

    });

    await post.save().catch((err) => {
            console.log(err);
    });
    res.send(post);
});

module.exports = router;
  