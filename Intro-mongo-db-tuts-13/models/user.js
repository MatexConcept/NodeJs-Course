const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema =  new Schema({
    username:{
        type:String,
        required:true,
    },

    roles:{
        User:{
            type:Number,
            default: 4000,
        },

        Admin : Number,
        Editor: Number,


    },


    password: {
        type:String,
        required:true,
    }, 

    reFreshToken : String
})


module.exports = mongoose.model("User", usersSchema)