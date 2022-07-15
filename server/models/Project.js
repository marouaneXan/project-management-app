const mongoose=require('mongoose')

const ProjectSchema=new mongoose.Schema({
    name:{
        type:string,
        required:['please add a name field']
    },
    description:{
        type:string,
        required:['please add a description field']
    },
    status:{
        type:string,
        enum:['Not Started','In Pregress','Completed'],
        required:['please add a status field']
    },
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client'
    }
})