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
export {GET_PROJECT}