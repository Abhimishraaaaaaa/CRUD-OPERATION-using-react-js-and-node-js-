import React, { useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';


export const AddUser = () => {
    const [value, Setvalue] = useState({
        name: "",
        fathername: "",
        email: "",
        phone: ""
    })
    const handleonchange = (e) => {
        Setvalue({
            ...value, [e.target.name]: e.target.value
        })

    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const Adduser = await axios.post('http://localhost:4000/api/create', value)
            const response = Adduser.data
            if (response.
                success
            ) {
                toast.success(response.Message)
                // CloseRef.current.click()

            }
            console.log(response)

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handlesubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true" ></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name='name' value={value.name} onChange={handleonchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Father </label>
                                    <input type="text" name='fathername' value={value.fathername} onChange={handleonchange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name='email' value={value.email} onChange={handleonchange} className="form-control" required />

                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name='phone' value={value.phone} onChange={handleonchange} className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Add" data-bs-dismiss="modal" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
