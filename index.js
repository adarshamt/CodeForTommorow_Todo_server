const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const cors =require('cors')
require('dotenv').config();
const morgan = require('morgan')


app.use(express.json())
app.use(cors())
app.use(morgan('dev')) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const mongodb_url = process.env.mongo_url

mongoose
  .connect(mongodb_url, {  
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
  const userRouter= require('./userRoutes/userRoutes')
  app.use(userRouter)