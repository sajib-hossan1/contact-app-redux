import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const navigation = useNavigate();

    const {id} = useParams();

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if(currentContact){
            setName(currentContact.name)
            setEmail(currentContact.email)
            setNumber(currentContact.number)
        }
    }, [currentContact])

    const handleSubmit = e => {
        e.preventDefault();
        
        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number) && number);


        if( !email || !number || !name){
            return toast.warning("Please Fill In All Fields")
        };
        if(checkEmail){
            return toast.error("This email is already esists")
        };
        if(checkNumber){
            return toast.error("This number is already esists")
        };

        const data = {
            id : parseInt(id),
            name,
            email,
            number
        };

        dispatch({type : "UPDATE_CONTACT", payload : data});
        toast.success("A contact addedd successfully");
        navigation('/');
    }

    return (
        <div className="container">
            {
                currentContact ? (
                <div className="row">
                    <h3 className="display-5 text-center mt-3">Edit Contact No. {id}</h3>
                    <div className="col-md-6 shadow mx-auto p-5 mt-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text" placeholder='Name'  value={name} onChange={e => setName(e.target.value)} className='form-control'/>
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)} className='form-control'/>
                            </div>
                            <div className="form-group mb-3">
                                <input type="number" placeholder='Phone Number' value={number} onChange={e => setNumber(e.target.value)} className='form-control'/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Update" className='btn btn-dark'/>
                                <Link to="/" className='btn btn-danger ms-4'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>) : (
                    <h1 className="text-center">No Contact Found</h1>
                )
            }
        </div>
    );
};

export default EditContact;