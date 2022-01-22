import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EditContact = () => {
    const {id} = useParams();
    return (
        <div className="container">
            <div className="row">
                <h3 className="display-5 text-center mt-3">Edit Contact No. {id}</h3>
                <div className="col-md-6 shadow mx-auto p-5 mt-3">
                    <form>
                        <div className="form-group mb-3">
                            <input type="text" placeholder='Name' className='form-control'/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" placeholder='Email' className='form-control'/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="number" placeholder='Phone Number' className='form-control'/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update" className='btn btn-dark'/>
                            <Link to="/" className='btn btn-danger ms-4'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditContact;