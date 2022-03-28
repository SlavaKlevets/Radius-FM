import React from 'react';
import v from './Programm.module.css';
import {NavLink} from "react-router-dom";

const Programm = (props) => {

    let arr = [{
        arr: "https://radiusfm.by/media/cache/program_list/uploads/images/5f4cf2466c1ab991452165.jpg",
        musik: "Теория большого утра",
        p: "Как показывает практика, просыпаться утром сложно. Но как показывает теория, просыпаться утром весело!"
    },
        {
            arr: "https://radiusfm.by/media/cache/program_list/uploads/images/5be165a8f389b672333487.jpg",
            musik: "Отличный день",
            p: "Каждый будний день мы с вами живем по программе \"Отличного дня\": только лучшая музыка и стопроцентные хиты!"
        },
        {
            arr: "https://radiusfm.by/media/cache/program_list/uploads/images/5ebaa29aafdd5139854752.jpg",
            musik: "Автодрайв",
            p: "В эфире Радиус FM каждый вечер звучит динамичное, позитивное, интересное и полезное шоу для тех кто за рулем и не только!"
        },
        {
            arr: "https://radiusfm.by/media/cache/program_list/uploads/images/5f4cf457bf502339036448.jpg",
            musik: "Like Weekend",
            p: "Горячие новости шоу-биза, пароли-явки самых интересных мероприятий, координаты бесплатного отдыха"
        },
        {
            arr: "https://radiusfm.by/media/cache/program_list/uploads/images/5f51f8485d71d246214914.jpg",
            musik: "Top Chart Radius FM",
            p: "Это самые горячие треки этой недели. Голосуй за лучшую музыку и будь в радиусе стопроцентных хитов!"
        },
        {
            arr: "https://radiusfm.by/media/cache/program_list/uploads/images/5a0e860210f0b815715482.jpg",
            musik: "В теме!",
            p: "Специальный проект журналистов Радиус FM о людях, событиях и фактах"
        }
    ];


    let image = arr.map(item => <div className={v.cart1}>
        <NavLink to={"/chto-igralo"+item.id}><img src={item.arr} className={v.imag}/></NavLink><h1 className={v.musik}>{item.musik}</h1><p>{item.p}</p></div>);


    return (
        <div className={v.wrapper}>
            <div className={v.wrapper2}>
                <img src="https://radiusfm.by/assets/img/base/headline-icon-programm.png" className={v.muz}/>
                <h1 className={v.h11}>ПРОГРАММЫ</h1>
            </div>
            <div className={v.wrapper3}>
                <div className={v.wrapper4}>
                    <div className={v.wrapper5}>
                        {image}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programm;