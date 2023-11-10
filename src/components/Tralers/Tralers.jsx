import "./Tralers.css";
import * as React from 'react';

export const Tralers = () => {
    return (
        <div className="tralers">
            <div className="container">
                <div className="inner" style={{
                    margin: "40px 0px",
                    alignItems: "center"
                }}>
                    <h1 className="tralers__logo">Новые трейлеры</h1>
                    <p className="tralers__full">Все трейлеры трейлеры →</p>
                </div>
                <img width={1400} src="http://localhost:5173/tralers.png" alt="" />
                <img style={{
                    margin: "60px 0px"
                }} src="http://localhost:5173/slider.png" width={1400} alt="" />

                <img style={{
                    margin: "60px 0px"
                }} width={1400}src="http://localhost:5173/popular.png" alt="" />
                <img style={{
                    margin: "60px 0px"
                }} width={1400} src="http://localhost:5173/popular_person.png" alt="" />
                <img style={{
                    margin: "60px 0px"
                }} width={1400} src="http://localhost:5173/news.png" alt="" />
                <img style={{
                    margin: "60px 0px"
                }} width={1400} src="http://localhost:5173/n_news.png" alt="" />
                <img style={{
                    margin: "60px 0px"
                }} width={1400} src="http://localhost:5173/kassa.png" alt="" />
                <img style={{
                    margin: "60px 0px"
                }} width={1400} src="http://localhost:5173/email.png" alt="" />
            </div>
        </div>
    );
};