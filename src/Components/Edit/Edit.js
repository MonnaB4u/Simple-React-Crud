import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContext';

const Edit = () => {
    const [users, setUser] = useContext(UserContext)
    const { editID } = useParams()
    const user = users.filter(user => user.id == editID)

    const [name, setName] = useState(user[0].name);
    const [position, setPosition] = useState(user[0].position);
    const [salary, setSalary] = useState(user[0].salary);


    const editName = (e) => {
        setName(e.target.value);
        const edited_name = name;
        user[0].name = edited_name;
    };

    const editPosition = (e) => {
        setPosition(e.target.value);
        const edited_position = position;
        user[0].position = edited_position;
    };

    const editSalary = (e) => {
        setSalary(e.target.value);
        const edited_salary = salary;
        user[0].salary = edited_salary;
    };

    const editUser = (e) => {
        e.preventDefault();
        setUser([...users]);
    };
const navigate= useNavigate()
    return (
        <div>
            <div className="container mt-5 border w-50">
                <div className="flex-warp align-content-center">
                    <form className="m-5" onSubmit={editUser} >
                        <h1>ID NO: {user[0].id}</h1>
                        <div class="form-group w-50 my-3">
                            <label for="formGroupExampleInput">Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Input ID" value={name} name="name" onChange={editName} />
                        </div>

                        <div class="form-group w-50 my-2">
                            <label for="formGroupExampleInput">Position</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Input position" value={position} name="position" onChange={editPosition} />
                        </div>

                        <div class="form-group w-50 my-3">
                            <label for="formGroupExampleInput">Salary</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder=" Input salary" value={salary} name="salary" onChange={editSalary} />
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <button className="btn btn-danger mx-4" onClick={() => navigate('/')}>Back to Home</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Edit;
