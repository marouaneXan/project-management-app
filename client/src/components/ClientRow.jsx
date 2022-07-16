import {FaTrash} from 'react-icons/fa'
const ClientRow = ({client}) => {
  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-danger btn-sm">
              <FaTrash/>
            </button>
        </td>
    </tr>
  )
}

export default ClientRow