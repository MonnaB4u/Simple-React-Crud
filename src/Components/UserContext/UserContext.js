import React, { createContext, useState } from 'react';
import './UserContext.css'
export const UserContext = createContext()

export const UserProvider = (props) => {
    const data = [
        { id: 1, name: "Monna", position: "Front-End-Developer", salary: 30000 },
        { id: 2, name: "Asif", position: "Front-End-Developer", salary: 30000 },
        { id: 3, name: "Anik", position: "Front-End-Developer", salary: 30000 },
    ]
    const [users, setUser] = useState(data)
    return (
        <UserContext.Provider value={[users,setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

