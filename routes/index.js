var express = require('express')
var router = express.Router()

const messages = [
  {
    text: 'Test message time',
    user: 'Testy McTesty',
    added: new Date()
  },
  {
    text: 'Did this work?',
    user: 'Question McGee',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Test Board', messages: messages })
})

/* GET new message form */
router.get('/new', function(req, res, next) {
  res.render('form')
})

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router
