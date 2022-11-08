import React, { useState } from "react";

import AddUser from "./components/AddUser";
import AddList from "./components/AddList"


function App(){

    const [usersList, setUsersList] = useState([])

    const AddUserHandler = (addname, addage) => {

        setUsersList((prevUsers) => {

            return [...prevUsers, {username: addname, age: addage}]

        })

    }

    return(

        <div className="container">

            <AddUser onAddUser={AddUserHandler} />
            <AddList users={usersList} />

        </div>

    )

}

export default App