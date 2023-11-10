import * as React from 'react';
import "./Card.css"
import { Rating } from './Rating/Rating';
import { Link, useParams } from 'react-router-dom';

export const Card = (props) => {
    return (
        <Link to={'/card/'+props.id} className='card'>
            <div className='card__image'>
                <img src={props.image} alt="" />
                <Rating rating={props.rating}  />
            </div>
            <h3 className='card__name'>{props.name}</h3>
            <p className='card__categories'>{props.categories}</p>
        </Link>
    );
};