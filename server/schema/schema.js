const {projects,clients}=require('../SimpleData')
const {GraphQLObjectType, GraphQLID, GraphQLString}=require('graphql')

//Client Type
const ClientType=new  GraphQLObjectType({
    name:'Client',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString},
    })
})

const RootQuery=new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        client:{
            type:ClientType
        }
    }
})