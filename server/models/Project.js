const mongoose=require('mongoose')

const ProjectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:['please add a name field']
    },
    description:{
        type:String,
        required:['please add a description field']
    },
    status:{
        type:String,
        enum:['Not Started','In Pregress','Completed'],
        required:['please add a status field']
    },
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client'
    }
})
module.exports=mongoose.model('Project',ProjectSchema)