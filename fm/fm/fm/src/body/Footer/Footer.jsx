import React from 'react';
import t from './Footer.module.css';
import {NavLink} from "react-router-dom";
import h from "../../header/Header.module.css";

const Footer = (props) => {

    return (
        <div className={t.ddd}>
            <div className={t.wraper2}>
                <div className={t.divchart}>
                    <img className={t.naushnic} src="https://radiusfm.by/assets/img/base/footer-logo.png" alt=""/>
                </div>
                <div className={t.wraper21}>
                    <div className={t.wraper3}>
                        <h1>ДЛЯ БЫСТРОГО ДОСТУПА</h1>
                        <ul>
                            <NavLink to="/chto-igralo" className={h.active}>ЧТО ИГРАЛО?</NavLink>
                            <NavLink to="/hit-parad" className={h.active}>ХИТ-ПАРАД</NavLink>
                            <NavLink to="/programm" className={h.active}>ПРОГРАММЫ</NavLink>
                            <NavLink to="/podkast" className={h.active}>ПОДКАСТЫ</NavLink>
                            <NavLink to="/news" className={h.active}>НОВОСТИ</NavLink>
                            <NavLink to="/command" className={h.active}>КОМАНДА</NavLink>
                            <NavLink to="/reklama" className={h.active}>РЕКЛАМА</NavLink>
                            <NavLink to="/oradio" className={h.active}>О РАДИО</NavLink>
                        </ul>
                    </div>
                    <div className={t.wraper3}>
                        <h1>КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
                        <span>Адрес:</span>
                        <span>г. Минск, ул. Железнодорожная</span>
                        <span>д. 27, корпус B</span>
                        <span>Телефон:</span>
                        <span>+375 17 213-30-08</span>
                        <span>Email:</span>
                    </div>
                    <div className={t.wraper4}>
                        <h1>МЫ В СОЦСЕТЯХ</h1>
                        <NavLink to="/chto-igralo" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/5b912a856f101247955693.png" alt=""/></NavLink>
                        <NavLink to="/chto-igralo" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/6026407f9290f853836775.png" alt=""/></NavLink>
                        <NavLink to="/chto-igralo" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/5adedf15e98ab258654553.png" alt=""/></NavLink>
                        <NavLink to="/chto-igralo" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/5f0d8078d3c8e146436434.png" alt=""/></NavLink>
                        <NavLink to="/chto-igralo" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/5adedf1c80d56164873075.png" alt=""/></NavLink>
                        <NavLink to="/chto-igralo" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/5adedef9dc8c6312636191.png" alt=""/></NavLink>
                        <NavLink to="/reklama" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/5adedf0f5f1a8300547908.png" alt=""/></NavLink>
                        <NavLink to="/oradio" className={h.active}><img
                            src="https://radiusfm.by/uploads/images/5f0d806f2e4f9046176487.png" alt=""/></NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;