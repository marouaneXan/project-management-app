import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom'
import { FaTrash } from "react-icons/fa";
import {GET_PROJECT} from '../queries/ProjectQuery'
import { DELETE_PROJECT } from "../mutations/projectMutations";
const DeleteProjectButton = ({ projectId }) => {
  const navigate=useNavigate()
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted:()=>navigate('/'),
    refetchQueries: [{ query: GET_PROJECT }],
  });
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
