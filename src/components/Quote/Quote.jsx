import "./Quote.css"
import * as React from 'react';
export const Quote = (props) => {
    return (
        
        <div className="quote">
            <div className="kv">“”</div>
            <div className='quote__data'>
                <p className="quote__text" align="justify">{props.text}</p>
                <h4 className="quote__name">{props.name}</h4>
            </div>
        </div>
    );
};