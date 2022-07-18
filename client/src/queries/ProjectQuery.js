import {gql} from '@apollo/client'

const GET_PROJECT=gql`
query getProjects{
    projects{
        id,
        name,
        status,
        client{
            name
        }
    }
}
`
const GET_PROJECTS=gql`
query getProject($id:ID!){
    project(id:$id){
        id,
        name,
        description,
        status,
        client{
            id,
            name,
            email,
            phone
        }
    }
}
`
export {GET_PROJECT,GET_PROJECTS}