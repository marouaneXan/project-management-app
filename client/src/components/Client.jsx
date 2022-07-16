import { useQuery } from "@apollo/client";
import ClientRow from './ClientRow'
import {GET_CLIENTS} from '../queries/ClientQueries'
const Client = () => {
    const {loading,error,data}=useQuery(GET_CLIENTS)
    // console.log(data);
    if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
    {!loading && !error && (
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
                    data.clients.map((client)=>(
                        <ClientRow key={client.id} client={client}/>
                    ))
                }
            </tbody>
        </table>
    )}
    </>
  )
};

export default Client;
