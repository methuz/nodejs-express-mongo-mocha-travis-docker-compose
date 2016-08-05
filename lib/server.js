const express = require('express')

module.exports = Server

function Server() {
  const server = express()

  server.get('/', function(req, res) {
    res.status(200).json({message:'Hello, World!'})
  })

  server.get('/hello', function(req, res) {
    res.status(200).json({message:'Hello, World!'})
  })

  return {
    server: server
  }
}
