import { gql, useQuery } from "@apollo/client";
// import ClientRow from './ClientRow'
const GET_CLIENTS=gql`
query getClient{
    clients{
        id,
        name,
        email,
        phone
      }
}
`
const Client = () => {
    const {Loading,error,data}=useQuery(GET_CLIENTS)
    console.log(data);
    if(Loading)return <p>Loading...</p>
    if(error)return <p>Something went wrong</p>
  return (
    <>
    {!Loading && !error && (
        <table className="table table-hover mt-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    // data.clients.map((client)=>(
                    //     <ClientRow key={client.id} client={client}/>
                    // ))
                }
            </tbody>
        </table>
    )}
    </>
  )
};

export default Client;
