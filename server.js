const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Produt= require('./models/productModel')


app.use(express.json)
import {connectDb} from "./helpers/db";

export const server = express()


//routes
app.get('/', (req, res) => {
  res.send('View Credentials OF Patieients')
})

app.get('/patientinfo',(req, res) => {
  res.send('This Is Where you view the Patients Informmation')
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

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:mubarakck@mubarakck.l6zmcmp.mongodb.net/node-API?retryWrites=true&w=majority')
.then(() =>{
  console.log('connected to MongoDB')
  app.listen(3000, ()=> {
    console.log('Node Api app is running on port 3000')
  })
 
}).catch(() =>{
  console.log('error')
})