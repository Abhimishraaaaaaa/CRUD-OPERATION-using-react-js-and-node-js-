import React, { useState } from 'react';



export const UpdateUser = ({ value, handlesubmit, handleonchange }) => {



    return (
        <>
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handlesubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update Employee</h4>
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