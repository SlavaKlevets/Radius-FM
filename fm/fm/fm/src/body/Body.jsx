import React from 'react';
import b from './Body.module.css';
import Vefire from './v-efire/Vefire.jsx';
import Topchart from './Topchart/Topchart.jsx';
import Novinki from './Novinki/Novinki.jsx';
import Komanda from './Komanda/Komanda.jsx';
import Zona from './Zona/Zona.jsx';
import Novosty from "./Novosty/Novosty";

const Body = (props) => {

    let ref5 = React.createRef();

    let f1 = () => {
        ref5.current.style.left = props.dispatch({type: 'MUZ1'});
    }

    let f2 = () => {
            ref5.current.style.left = props.dispatch({type: 'MUZ2'})
    };

    let arr=[{
        imagescrol:"https://radiusfm.by/media/cache/main_slider/uploads/images/606703d7c81e6351345405.jpg"
        },
        {
            imagescrol:"https://radiusfm.by/media/cache/main_slider/uploads/images/5f71aca7f2f15968041970.jpg"
        },
        {
            imagescrol:"https://radiusfm.by/media/cache/main_slider/uploads/images/5fbba4f56a635483217343.jpg"
        },
        {
            imagescrol:"https://radiusfm.by/media/cache/main_slider/uploads/images/609e24b0cea03341188893.jpg"
        },
        {
            imagescrol:"https://radiusfm.by/media/cache/main_slider/uploads/images/609b7d7595ea4825482164.jpg"
        }
    ];
    let image=arr.map(i=><div className={b.wrapper1}><img className={b.a1} src={i.imagescrol}/></div>)



    return (
        <div className={b.wrapper}>
            <div className={b.wrapper01}>
                <div className={b.wrapper0} ref={ref5}>
                    {image}
                </div>
            </div>
            <div className={b.btn}>
                <img className={b.btn1} onClick={f1}  src="https://radiusfm.by/assets/img/base/programm-slider-arrow.png"
                     alt="audi"/>
                <img className={b.btn2} onClick={f2} src="https://radiusfm.by/assets/img/base/programm-slider-arrow.png"
                     alt="audi"/>
            </div>
            <Vefire/>
            <Topchart store={props.store} dispatch={props.dispatch}/>
            <Novinki store={props.store} dispatch={props.dispatch}/>
            <Komanda/>
            <Novosty/>
            <Zona/>
        </div>
    );
}

export default Body;