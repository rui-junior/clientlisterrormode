import React from "react";

import styles from './card.module.css'

export default (props) => {

    return(

        <div className={`${styles.card} ${props.className}`}>
            {props.children}
        </div>

    )

}