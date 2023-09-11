import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap'
function CustomTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
        console.log(result.data);
        
    };


    return (
        <Table className="shadow" striped bordered hover variant="dark"  >
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <th scope="row" key={index}>
                            {index + 1}
                        </th>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                    </tr>
                ))
                }

            </tbody>
        </Table>
    )
}

export default CustomTable
