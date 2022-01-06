import { Button, Modal } from 'bootstrap';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';


const Delete = () => {
    const [users, setUser] = useContext(UserContext)
    const { Id } = useParams();
    console.log(Id)
    const navigate = useNavigate()
    const deletehandler = () => {
        const datafilter = users.filter(user => user.id != Id);
        console.log(datafilter)
        setUser(datafilter)
    }


    return (
        <div className="my-5">
            <div className="container text-center ">
                <p className="h2">Really Want to Delete</p>
                <div className="d-flex justify-content-center mt-5">
                    <button onClick={()=>deletehandler(navigate(`/`))} className="btn text-white bg-danger w-25 ">Delete</button>
                    <button onClick={()=> navigate('/')} className="btn text-white  bg-success w-25 mx-5">Cancel</button>
                </div>
            </div>

        </div>
    );
};

export default Delete;
