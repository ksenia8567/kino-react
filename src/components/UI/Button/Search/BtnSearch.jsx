import * as React from 'react';
import "./BtnSearch.css"
import search from "../../../../assets/search.svg"
export const BtnSearch = () => {
    return (
        <button className='btn_search'>
            <img src={search} alt="" />
        </button>
    );
};