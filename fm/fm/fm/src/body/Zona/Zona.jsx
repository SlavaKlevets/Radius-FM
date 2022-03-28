import React from 'react';
import t from './Zona.module.css';
import {NavLink} from "react-router-dom";



const Zona = (props) => {

    return (
        <div className={t.ddd}>
            <div className={t.wrapper2}>
                <div className={t.divchart}>
                    <img className={t.naushnic} src="https://radiusfm.by/assets/img/base/gradient-banner-bg-02.png"
                         alt=""/>
                </div>
                <div className={t.wrapper3}>
                    <h1 className={t.CHART}>Самая большая зона охвата в РБ</h1>
                    <NavLink to="/zona" className={t.it}><button className={t.button}>Зоны вещания</button></NavLink>

                </div>
            </div>
        </div>
    );
}
export default Zona;