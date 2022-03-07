const express = require('express')
const hello = express()

hello.get('/', (req, res) => {
  res.send('hello zyt')
})
