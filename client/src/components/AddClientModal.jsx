import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/ClientQueries";

const AddClientModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const { name, email, phone} = formData;
  const onChange=(e)=>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    if(name==='' || email==='' || phone===''){
        alert('Please add all fields')
    }
    addClient(formData)
    setFormData({
        name:'',
        email:'',
        phone:''
    })
  }
    const [addClient] = useMutation(ADD_CLIENT,{
        variables:{name,email,phone},
        update(cache,{data:{addClient}}){
            const {clients}=cache.readQuery({
                query:GET_CLIENTS
            })
            cache.writeQuery({
                query:GET_CLIENTS,
                data:{clients:[...clients,addClient]}
            })
        }
    });
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Client</div>
        </div>
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Client
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
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </div>
                <button type="submit" data-bs-dismiss='modal' className="btn btn-secondary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;
