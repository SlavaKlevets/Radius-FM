import React from 'react';
import v from './Novinki.module.css';

const Novinki = (props) => {

    let myAudio5 = React.createRef();

   let arr2 =[
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5def6495d72ed531849261.jpg",
            musik: "Kush Kush",
            num: a
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5ff43e900006e276899306.jpg",
            musik: "Riton, Nightcr",
            num: b
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5ec3b2531677e039983996.jpg",
            musik: "Intelligency",
            num: c
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5f2d320c26d50271806322.jpg",
            musik: "Inna",
            num: d
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5eaa7f6564de0524089654.jpg",
            musik: "Masked Wolf",
            num: e
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/6009654aa1cc7967063072.jpg",
            musik: "Travis Scott, HV",
            num: f
        },
       {
           arr: "https://radiusfm.by/media/cache/main_history/uploads/images/6009654aa1cc7967063072.jpg",
           musik: "Travis Scott, HV",
           num: g
       }];


    function a () {
        props.dispatch({type: 'A1', myAudio5: myAudio5})
    };
    function b () {
        props.dispatch({type: 'A2', myAudio5: myAudio5})
    };
    function c () {
        props.dispatch({type: 'A3', myAudio5: myAudio5})
    };
    function d() {
        props.dispatch({type: 'A4', myAudio5: myAudio5})
    };
    function e() {
        props.dispatch({type: 'A5', myAudio5: myAudio5})
    };
    function f() {
        props.dispatch({type: 'A6', myAudio5: myAudio5})
    };
    function g() {
        props.dispatch({type: 'A6', myAudio5: myAudio5})
    };
    let hover=React.createRef();

    let hover1=(e)=>{
        e.target.src="https://radiusfm.by/assets/img/base/headline-icon-played.png";
    }

        let image = arr2.map(item => <div className={v.cart1}   onClick={item.num}>
        <img src={item.arr} onMouseMoveCapture={hover1} onMouseOutCapture={(e)=>{
            e.target.src=item.arr;
        }} ref={hover}  className={v.imag}/><h1 className={v.musik}>{item.musik}</h1></div>);


    return (
        <div className={v.wrapper}>
            <div className={v.wrapper2}>
                <img src="https://radiusfm.by/assets/img/base/headline-icon-played.png" className={v.muz}/>
                <h1 className={v.h11}>Новинки эфира</h1>
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

export default Novinki;