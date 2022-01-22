import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const contacts = useSelector(state => state);
    
    const dispatch = useDispatch();

    const navigation = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        
        const checkEmail = contacts.find(contact => contact.email === email && email);
        const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number);
        console.log(checkNumber);

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
            id : contacts[contacts.length - 1].id + 1,
            name,
            email,
            number
        };

        dispatch({type : "ADD_CONTACT", payload : data});
        toast.success("A contact addedd successfully");
        navigation('/');


    }
    
    return (
        <div className="container">
            <div className="row">
                <h3 className="display-5 text-center mt-3">Add Contact</h3>
                <div className="col-md-6 shadow mx-auto p-5 mt-3">
                    <form>
                        <div className="form-group mb-3">
                            <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} className='form-control'/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='form-control'/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="number" placeholder='Phone Number' value={number} onChange={e => setNumber(e.target.value)} className='form-control'/>
                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={handleSubmit} value="Add Contact" className='btn btn-group btn-dark'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;