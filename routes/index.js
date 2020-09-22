var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Alex",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Vivian",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', {});
});

/* POST new message. */
router.post('/new', function(req, res, next) {
  messages.push({user: req.body.name, text: req.body.message, added: new Date()});
  res.redirect('/')
})

module.exports = router;
