import React, { useState } from 'react'
import styles from "../Styles/Home.module.css"
import CustomTable from './CustomTable'
import AddUser from './AddUser'

function Home() {

    const [update, setupdate] = useState(false);
    const handleUpdate = () =>{
        setupdate(prev=> !prev);
        console.log('AddUser signalierrt update');
    }

    const editUser = (id) =>{
        console.log(id);

    }

    return (
        <div>
            <AddUser updateUser={handleUpdate}></AddUser>
            <CustomTable onUpdate={update} ></CustomTable>
        </div>
    )
}
export default Home