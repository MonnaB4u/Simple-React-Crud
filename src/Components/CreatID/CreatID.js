import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const CreatID = () => {
    const [users, setUser] = useContext(UserContext)
    const [Id, setId] = useState()
    const [name, setName] = useState([])
    const [position, setPosition] = useState([])
    const [salary, setSalary] = useState([])
    const updateId = (e) => {
        setId(e.target.value)
    }
    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePosition = (e) => {
        setPosition(e.target.value)
    }
    const updatesalary = (e) => {
        setSalary(e.target.value)
    }
    const addUser = (e) => {
        e.preventDefault();
        setUser([...users, { id: Id, name: name, position: position, salary: salary }])
    }
    console.log(users)
    const navigate = useNavigate()
    return (
        <div className="container mt-5 border w-50">
            <div className="flex-warp align-content-center">
                <form className="m-5" onSubmit={addUser}>

                    <div class="form-group w-50 my-3">
                        <label for="formGroupExampleInput">ID</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Input ID" value={Id} onChange={updateId} name="id" />
                    </div>

                    <div class="form-group w-50 my-3">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Input ID" value={name} name="name" onChange={updateName} />
                    </div>

                    <div class="form-group w-50 my-2">
                        <label for="formGroupExampleInput">Position</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Input position" value={position} name="position" onChange={updatePosition} />
                    </div>

                    <div class="form-group w-50 my-3">
                        <label for="formGroupExampleInput">Salary</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Input salary" value={salary} name="salary" onChange={updatesalary} />
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <button className="btn btn-danger mx-4" onClick={() => navigate('/')}>Back to Home</button>
                </form>

            </div>

        </div>
    );
};

export default CreatID;
