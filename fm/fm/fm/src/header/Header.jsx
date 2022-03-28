import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={h.wrapper}>
            <ul className={h.saas}>
                <NavLink to="/body" className={h.active} exact><img className={h.hedlog}
                                                                    src="https://radiusfm.by/assets/img/base/header-logo.svg"
                                                                    alt=""/></NavLink>
                <NavLink to="/chto-igralo" className={h.active} exact>ЧТО ИГРАЛО?</NavLink>
                <NavLink to="/hit-parad" className={h.active} exact>ХИТ-ПАРАД</NavLink>
                <NavLink to="/programm" className={h.active} exact>ПРОГРАММЫ</NavLink>
                <NavLink to="/podkast" className={h.active} exact>ПОДКАСТЫ</NavLink>
                <NavLink to="/news" className={h.active}>НОВОСТИ</NavLink>
                <NavLink to="/command" className={h.active}>КОМАНДА</NavLink>
                <NavLink to="/reklama" className={h.active}>РЕКЛАМА</NavLink>
                <NavLink to="/oradio" className={h.active}>О РАДИО</NavLink>
            </ul>
        </div>
    );
}
export default Header;