import React from 'react';
import v from './Novosty.module.css';
import {NavLink} from "react-router-dom";

const Novosty = (props) => {

    let myAudio5 = React.createRef();

    let arr2 = [
        {
            arr: "https://radiusfm.by/media/cache/main_feed/uploads/images/6063260ac0763784058893.png",
            musik: "Меняем скрепку на дом. Теперь у нас есть стол-книга!",
            num: a
        },
        {
            arr: "https://radiusfm.by/media/cache/main_feed/uploads/images/60a2411407b58252350369.jpg",
            musik: "Всё о вакцинации от Covid-19 в Беларуси",
            num: b
        },
        {
            arr: "https://radiusfm.by/media/cache/main_feed/uploads/images/609fc190ea12f563473955.jpg",
            musik: "Появились новые кадры из мюзикла \"Золушка\" с Камилой Кабейо в главной роли",
            num: c
        }];

    function a() {
        props.dispatch({type: 'A1', myAudio5: myAudio5})
    };

    function b() {
        props.dispatch({type: 'A2', myAudio5: myAudio5})
    };

    function c() {
        props.dispatch({type: 'A3', myAudio5: myAudio5})
    };


    let image = arr2.map(item => <div className={v.cart1} onClick={item.num}>
        <img src={item.arr} className={v.imag}/><h1 className={v.musik}>{item.musik}</h1></div>);


    return (
        <div className={v.wrapper}>
            <div className={v.wrapper2}>
                <div className={v.wrapper22}>
                    <h1 className={v.h11}>НОВОСТИ</h1>
                    <NavLink to="/news" className={v.i2}>Смотреть все новости</NavLink>
                    <NavLink to="/dd" className={v.i}>Новое</NavLink>
                    <NavLink to="/dd" className={v.i}>Музыка</NavLink>
                    <NavLink to="/dd" className={v.i}>Кино</NavLink>
                    <NavLink to="/dd" className={v.i}>Акции</NavLink>
                    <NavLink to="/dd" className={v.i}>В теме</NavLink>
                </div>
            </div>
            <div className={v.wrapper3}>
                <div className={v.wrapper4}>
                    <div className={v.wrapper5}>
                        {image}
                        <audio ref={myAudio5}>
                            <source src="" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Novosty;