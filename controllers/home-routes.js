const router = require('express').Router();
// const { json } = require('sequelize/types');
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// show all posts
router.get('/', (req, res) => {
  // log session variables
  console.log(req.session);

    Post.findAll({
      attributes: [
        'id',
        'post_url',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
          // loop over & map sequelize objects into an array of posts
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', { posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;