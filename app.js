require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async (req, res) => {
    await connectToDatabase()
    const notes = await Note.find()
    res.send({ v: 1, notes })
})

http.createServer(app).listen(process.env.PORT || 8000)
