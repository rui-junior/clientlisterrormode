import React, { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";

import style from './adduser.module.css'

function AddUser(props) {
    
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [erro, setErro] = useState()

    const Validation = (e) => {
        e.preventDefault()

        if(username.trim().length === 0 || age.trim().length === 0){
            setErro('Adicione um valor')
            return
        }
        
        if(+age < 1){
            setErro('Adicione um valor válido')
            return
        }

        props.onAddUser(username, age)
        setErro('')
        setUsername('')
        setAge('')

    }

    return (

            <Card className={style.input}>

                <form onSubmit={Validation}>

                    <label>Username</label>
                    <input id="username" type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    <label>Age</label>
                    <input id="age" type="number" value={age} onChange={(e) => {setAge(e.target.value)}}/>

                    {erro}

                    <Button type="submit">Add User</Button>

                </form>

            </Card>

    )

}

export default AddUser