import React from 'react';
import { Nav } from '../Navigation/Nav';
import { BtnSearch } from '../UI/Button/Search/BtnSearch';
import { BtnSignIn } from '../UI/Button/Signin/BtnSignIn';
import logo from "../../assets/logo.svg"
import "./Header.css"
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Nav 
                        nav={["Афиша", "Медиa", "Фильмы", "Актеры", "Новости", "Подборки", "Категории"]} 
                        style={"nav__link__header"}
                    />
                    <div className="header__btn">
                        <BtnSearch />
                        <BtnSignIn />
                    </div>
                </div>
            </div>
        </header>
    );
};