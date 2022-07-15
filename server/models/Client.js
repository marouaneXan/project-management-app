const mongoose=require('mongoose')

const ClientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:['please add a name field'],
    },
    email:{
        type:String,
        required:['please add a email field'],
    },
    phone:{
        type:String,
        required:['please add a phone field'],
    },
})
module.exports=mongoose.model('Client',ClientSchema)