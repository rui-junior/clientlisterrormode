import React from "react";

import Card from "./UI/Card";
import style from './adduser.module.css'

const AddList = (props) => {

    const data = props.users.length

    return (

        <div>
            
            {data > 0 &&
                
                <Card>
                
                    <ul className={style.lista}>
                
                        {props.users.map((user) => (
                            <li>
                                {user.username} - {user.age}
                            </li>
                        ))}
                
                    </ul>
                
                </Card>

            }
        </div>







    )

}

export default AddList
