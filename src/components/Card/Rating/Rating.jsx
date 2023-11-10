import * as React from 'react';
import "./Rating.css"
export const Rating = (props) => {
    return (
        <div className='rating'>
            {props.rating}
        </div>
    );
};