const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({

    name:'String',
    fathername:'String',
    email:'String',
    phoneNumber:'Number',
    password:'string',
    tods:[]
})


const user= mongoose.model("user",userSchema)
module.exports= user