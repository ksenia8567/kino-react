import * as React from 'react';
import "./CardData.css"
export const CardData = (props) => {
    return (
        <div className='card__data'>
            <div className='card__crumbs'>Главная → Фильмы → <span style={{
                color: "#fff"
            }}>{props.name}</span></div>
            <h1 className='card__data__name'>{props.name}</h1>
            <h3 className='card__english'>Escape from Pretoria</h3>
            <img src="http://localhost:5173/rating.png" alt="" />
            <p className='card__text'>{props.text}</p>
            <button className='card__btn'><img src="http://localhost:5173/play.svg" alt="" />Смотреть трейлер</button>
        </div>
    );
};