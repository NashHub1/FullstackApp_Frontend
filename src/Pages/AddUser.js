import React, { useState } from "react";
import styles from "../Styles/Home.module.css"
import AddUserForm from "./AddUserForm";
import useHttp from "../CustomHooks/use-http";

function AddUser(props) {
    const { postData, logoutRequest } = useHttp();

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
        props.updateUser();
    };

    const saveUserDataHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData);
        postData(enteredExpenseData);
        setIsEditing(false);
        props.updateUser();
    };

    return (
        <div className={styles.new_User}>
            {!isEditing && (
                <button onClick={startEditingHandler} className="">Add New User</button>
            )}

            {isEditing && (
                <AddUserForm
                    onSaveUserData={saveUserDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
}

export default AddUser;
