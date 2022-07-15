const mongoose=require('mongoose')

const ClientSchema=new mongoose.Schema({
    name:{
        type:string,
        required:['please add a name field'],
    },
    email:{
        type:string,
        required:['please add a email field'],
    },
    phone:{
        type:string,
        required:['please add a phone field'],
    },
})
module.exports=mongoose.model('Client',ClientSchema)