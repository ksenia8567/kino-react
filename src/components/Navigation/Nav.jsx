import * as React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

export const Nav = (props) => {
    return (
        <nav className='nav'>
            {props.nav?.map((callback) => {
                return (
                    <Link className={props.style} to="/">{callback}</Link>
                )
            })}
        </nav>
    );
};