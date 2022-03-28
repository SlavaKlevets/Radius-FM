import React from 'react';
import v from './Vefire.module.css';
import {NavLink} from "react-router-dom";

const Vefire = (props) => {

    let arr = [{
        arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5def6495d72ed531849261.jpg",
        musik: "Kush Kush",
        src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
        id:0,
        op:0
    },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5ff43e900006e276899306.jpg",
            musik: "Riton, Nightcr",
            src:"https://mp3ball.ru/mp3/0/MTAzNTM3MzQ0XzQ1NjI0NTc2M18yOTc4MGE2MjA2OWZlOWZmNjNfMTE0ZjBmZWQ2ODYwODk1YWI2LzwhfCE-WyJncyIsMiwiQ2hhaXIgLSBOSUdIVENPUkUiLDEsbnVsbCwwLDQ1LDBd/Chair+-+NIGHTCORE+-+Bladee+-+Romeo_(MP3Ball.ru).mp3",
            id:1,
            op:1
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5ec3b2531677e039983996.jpg",
            musik: "Intelligency",
            src:"https://mp3uk.net/mp3/files/intelligency-avgust-mp3.mp3",
            id:2,
            op:2
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5f2d320c26d50271806322.jpg",
            musik: "Inna",
            src:"https://mp3uk.net/mp3/files/inna-flashbacks-mp3.mp3",
            id:3,
            op:3
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/5eaa7f6564de0524089654.jpg",
            musik: "Masked Wolf",
            src:"https://dl.muzoff.net/files/music/2020/11/Masked_Wolf_-_Astronaut_In_The_Ocean.mp3",
            id:4,
            op:4
        },
        {
            arr: "https://radiusfm.by/media/cache/main_history/uploads/images/6009654aa1cc7967063072.jpg",
            musik: "Travis Scott, HV",
            src:"https://muzup.ru/uploads/music/2020/07/travis-scott-goosebumps-hvme-remix-mp3.mp3",
            id:5,
            op:5
        }
    ];
    let hover=React.createRef();

    let hover1=(e)=>{
        e.target.src="https://radiusfm.by/assets/img/base/headline-icon-played.png";
    }


    let  myAudio8=React.createRef();
    let image = arr.map(item => <div className={v.cart1}><img src={item.arr} onMouseMoveCapture={hover1} onMouseOutCapture={(e)=>{
        e.target.src=item.arr;
    }} ref={hover} onClick={(e)=>{
        if(item.id==0){
            myAudio8.current.src = arr[0].src;
            myAudio8.current.play();
        }
        else if(item.id==1){
            myAudio8.current.src = arr[1].src;
            myAudio8.current.play();
        }
        else if(item.id==2){
            myAudio8.current.src = arr[2].src;
            myAudio8.current.play();
        }
        else if(item.id==3){
            myAudio8.current.src = arr[3].src;
            myAudio8.current.play();
        }
        else if(item.id==4){
            myAudio8.current.src = arr[4].src;
            myAudio8.current.play();
        }
        else if(item.id==5){
            myAudio8.current.src = arr[5].src;
            myAudio8.current.play();
        }
        else if(item.id==6){
            myAudio8.current.src = arr[5].src;
            myAudio8.current.play();
        }
        else if(item.id==7){
            myAudio8.current.src = arr[5].src;
            myAudio8.current.play();
        }
    }} className={v.imag}/><h1 className={v.musik}>{item.musik}</h1></div>);


        return (
        <div className={v.ddd}>
            <div className={v.wrapper1}>
                <div className={v.wrapper2}>
                    <img src="https://radiusfm.by/assets/img/base/headline-icon-played.png" className={v.muz}/>
                    <h1 className={v.h11}>Недавно в эфире</h1>
                    <NavLink to="/glavnaja" className={v.poslushat}>Послушать полный список</NavLink>
                </div>
                <div className={v.data}>
                    <form>
                        <input type="date" name="calendar" className={v.date}
                               max="2022-01-01" min="2000-01-01"/>
                    </form>
                </div>
            </div>
            <div className={v.wraper3}>
                <div className={v.wraper4}>
                    <div className={v.wraper5}>
                        {image}
                        <audio ref={myAudio8}>
                            <source src="" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Vefire;