import {gql} from '@apollo/client'
const DELETE_CLIENT=gql`
mutation deleteClient($id:ID!){
    deleteClient(id:$id){
        id,
        name,
        email,
        phone
    }
}
`

// const ADD_CLIENT=gql`
// mutation addClient(){
//     addClient(id:$id){
//         id,
//         name,
//         email,
//         phone
//     }
// }
// `


export {DELETE_CLIENT}