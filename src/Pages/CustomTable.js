import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import styles from "../Styles/Home.module.css"


function CustomTable(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
        console.log('useEffetc in CustomTable');
    }, [props.onUpdate]);


    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/users");
            setUsers(result.data);
            console.log(result.data);
        }
        catch (error) {
            console.log("No Connection");
        }
    };

    const test = (id) => {
        console.log(id);
    }




    return (
        <div className={styles.home}>
            <Table className="shadow" striped hover variant="dark"  >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th scope="col">Action</th>
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
                            <td>
                                <Button variant="primary" className="mx-2" onClick={() => test(user.id)}>
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))
                    }

                </tbody>
            </Table>

            <Button variant="outline-light" onClick={loadUsers}>Update</Button>
        </div>
    )
}

export default CustomTable
