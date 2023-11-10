// @flow 
import * as React from 'react';
import { Nav } from '../Navigation/Nav';
import "./Footer.css"
export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__icon'>
                <img src="http://localhost:5173/social.png" alt="" />
            </div>
            <Nav 
                nav={["Афиша", "Медиa", "Фильмы", "Актеры", "Новости", "Подборки", "Категории"]} 
                style={"nav__link__header"}
            />
            <p>2023 © Kinoarea.  Все права защищены</p>
            <a href="#">Политика конфиденциальности</a>
        </div>
    );
};