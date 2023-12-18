const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Produt= require('./models/productModel')


app.use(express.json)
import {connectDb} from "./helpers/db";

export const server = express()


//routes
app.get('/', (req, res) => {
  res.send('Hello NODE API, Wumpini Here hehehehehes')
})

app.get('/blog',(req, res) => {
  res.send('THIS PAGE IS THE BLOG PAGE, and my name is Abdul-Rashid Mubarak Wumpini Scratch That')
})

app.post('/product', async(req, res) => {
  try {


    
    const product = await Product.create(req.body)
    res.status(200).jsonp(product);
  } catch (error) {
    console.log('error');{
      res.status('500').json;{message:error.message}
    }
  }
})