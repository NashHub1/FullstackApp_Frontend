import React, { Fragment } from 'react'
import classes from '../Styles/Header.module.css';
import logoAxpo from "../Logos/Axpo_logo.png"

function Header() {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Fullstack APP </h1>
   
                <img
                    alt="Axpo"
                    src={logoAxpo}
                    width="120"
                    height="60"
                    className="d-inline-block align-top"
                />

            </header>
        </Fragment>
    )
}

export default Header
