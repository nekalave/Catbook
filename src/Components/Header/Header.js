import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/379/302/png-transparent-cat-kitten-chibi-line-art-drawing-cat-white-mammal-face.png'/>
            <a className={s.name}>CatBook</a>
        </header>
    );
}

export default Header;
