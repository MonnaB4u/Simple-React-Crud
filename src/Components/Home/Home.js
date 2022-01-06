import React, { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
     const navigate = useNavigate()
    const [users, setUser] = useContext(UserContext)

    // const handleDelete=()=>{

    // }
    return (
        <div className="container">
            <button className="btn btn-primary m-4" onClick={()=>navigate('/CreateId')}>Create User</button>
              <button className="btn btn-danger m-4" onClick={() => window.location.reload(false)}>Reload Page</button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Salary</th>
                        <th scope="col" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(users =>

                            <tr>
                                <th scope="row">{users.id}</th>
                                <td>{users.name}</td>
                                <td>{users.position}</td>
                                <td>{users.salary}</td>
                                <td>
                                    <button onClick={()=> navigate(`/delete${users.id}`)} className="btn btn-danger bg-danger">Delete</button>
                                    <button onClick={()=>navigate(`/edit${users.id}`)}  className="mx-2 btn btn-success bg-primary" variant="info">Edit</button>
                                    <button onClick={()=> navigate(`/read${users.id}`)} className="btn btn-success bg-success">Read</button>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;
