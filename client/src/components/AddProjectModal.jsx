import { useState } from "react";
import { ADD_PROJECT } from "../mutations/projectMutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/ProjectQuery";
import { GET_CLIENTS } from "../queries/ClientQueries";
const AddProjectModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "new",
    clientId: "",
  });
  const { name, description, status, clientId } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "" || clientId === "") {
      alert("Please add all fields");
    }
    addProject(formData);
    setFormData({
      name: "",
      description: "",
      status: "new",
      clientId: "",
    });
  };
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECT });
      cache.writeQuery({
        query: GET_PROJECT,
        data: { projects: [...projects, addProject] },
      });
    },
  });
  if (loading) return null;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addProject"
      >
        <div className="d-flex align-items-center">
          {/* <FaUser className="icon" /> */}
          <div>Add New Project</div>
        </div>
      </button>
      <div
        className="modal fade"
        id="addProject"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Project
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    type="text"
                    className="form-control"
                    id="status"
                    name="status"
                    value={status}
                    onChange={onChange}
                  >
                    <option value="new">Not Started</option>
                    <option value="progress">In progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Clients</label>
                  <select
                    type="text"
                    className="form-control"
                    id="clientId"
                    name="clientId"
                    value={clientId}
                    onChange={onChange}
                  >
                    <option disabled value="">
                      Select client
                    </option>
                    {data.clients.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
