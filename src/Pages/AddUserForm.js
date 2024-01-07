import React from 'react'

function AddUserForm(props) {

    const submitHandler = (event) => {
        event.preventDefault();

        // Die Fehler Meldung muss noch schön eingefügt werden/ und nicht nur in der Console
        if (event.target.firstname.value.trim().length === 0 || 
        event.target.lastname.value.trim().length === 0 || 
        event.target.email.value.trim().length === 0) {
            	console.log("Bitte bei allen Feldern etwas eingeben")
                return;
        }

        const formData = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
          };
          
          props.onSaveUserData(formData);
    }
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 offset-md-3  rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    <form onSubmit={submitHandler}>
                    <div className="mb-2">
                        <label htmlFor="firstName" className="form-label">
                            Firstname
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Firstname"
                            name="firstname"

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">
                            Lastname
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your Lastname"
                            name="lastname"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            E-mail
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your e-mail"
                            name="email"
                        />
                    </div>
                    <div >
                        <button type='submit'>Add User</button>
                        <button type="button" onClick={props.onCancel}>Cancel</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUserForm