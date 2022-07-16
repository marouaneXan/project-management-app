import {gql} from '@apollo/client'

const GET_PROJECT=gql`
query getProjects{
    projects{
        id,
        name,
        description,
        client{
            name
        }
    }
}
`
export {GET_PROJECT}