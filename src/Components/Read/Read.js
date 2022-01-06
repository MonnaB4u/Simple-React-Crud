import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Read = () => {
    const [users, setUser] = useContext(UserContext)
    const { Readid } = useParams()
    const readfilter = users.filter(data => data.id == Readid)
    const navigate = useNavigate()
    return (
        <div>
            {

                readfilter.map(data =>
                    <>
                        <div className="container mt-5 border w-50">
                            <div className="m-5">
                                <p className="h4">Position: {data.position}</p>
                                <p className="h5">Name: {data.name}</p>
                                <p className="h6">Salary: {data.salary}</p>
                                <button className="btn btn-primary" onClick={() => navigate('/')}>Back</button>
                            </div>

                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Read;
