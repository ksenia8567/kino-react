// @flow 
import * as React from 'react';
import { Nav } from '../Navigation/Nav';
import "./Categories.css"
export const Categories = () => {
    return (
        <div className='categories'>
            <div className="container">
                <div className="inner">
                    <h1 className='categories__name'>Сейчас в кино</h1>
                    <div className="categories__link"></div>
                    <Nav 
                        nav={["Все","Боевики","Приключения","Комедии","Фантастика","Триллеры","Драма"]}
                        style={"nav__link__categories"} 
                    />
                </div>
            </div>
        </div>
    );
};