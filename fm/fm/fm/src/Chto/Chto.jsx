import React from 'react';
import v from './Chto.module.css';
import {NavLink} from "react-router-dom";

const Chto = () => {

let array = [{
    image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebe7eb939e54546218739.jpg",
    name: "Pink  Just Like Fire",
    serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
    time: "18:08",
    src:"https://zamp3.net/uploads/music/2021/02/raye-rudimental-regardless-mp3.mp3",
    id:0,
},
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebd1710cbb1e913981892.jpg",
        name: "Saint JHN  Roses (Imanbek Remix)",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "18:05",
        src:"https://vmuzone.com/dl/NGJmYThlZWRmODczNGRmYTdlOGU3YWJmYWVmZjhjZTN8bG9hZA.mp3",
        id:1,
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ff43e5cd7404052568929.png",
        name: "Chael feat. Kaii  Don't Speak",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "18:02",
        src:"http://mp3-zaycev.com/uploads/posts/2020-12/1607595663.mp3",
        id:2,
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5fc8a1679b288845598435.jpg",
        name: "Raye, Rudimental  Regardless",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:56",
        src:"https://nmuz.net/uploads/music/2021/01/Chael_Don_t_Speak_feat_Kaii.mp3",
        id:3,
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebd1a2bd4993137042485.jpg",
        name: "Maruv  Siren Song",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:50",
        src:"https://dl.mp3mob.net/uploads/files/2019-07/1563989878_maruv-siren-song.mp3",
        id:4,
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/60740c5dc4384977688891.jpg",
        name: "Rauf & Faik feat. Niletto  Если тебе будет грустно",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:47",
        src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510755032_dnce-ft-nicki-minaj-kissing-strangers-www_muzonov_net.mp3",
        id:5,
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebe7f0bcba7a027720291.jpg",
        name: "DNCE feat. Nicki Minaj  Kissing Strangers",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:43",
        src:"https://zamp3.net/uploads/music/2021/02/raye-rudimental-regardless-mp3.mp3",
        id:6,
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/6012cbde35744043150889.png",
        name: "Masked Wolf Astronaut In The Ocean",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:41",
        src:"https://zamp3.net/uploads/music/2021/02/raye-rudimental-regardless-mp3.mp3",
        id:7,
    }
];


let ref1=React.createRef();
let f5=()=>{
    ref1.current.style.top-=20+"px";
    console.log("jkhjk");
}


    let myAudio9=React.createRef();

    let block = array.map(item => <div className={v.musika}>
        <div className={v.mus}><img src={item.image} onClick={(e)=>{
            if(item.id==0){
                myAudio9.current.src = array[0].src;
                myAudio9.current.play();
            }
            else if(item.id==1){
                myAudio9.current.src = array[1].src;
                myAudio9.current.play();
            }
            else if(item.id==2){
                myAudio9.current.src = array[2].src;
                myAudio9.current.play();
            }
            else if(item.id==3){
                myAudio9.current.src = array[3].src;
                myAudio9.current.play();
            }
            else if(item.id==4){
                myAudio9.current.src = array[4].src;
                myAudio9.current.play();
            }
            else if(item.id==5){
                myAudio9.current.src = array[5].src;
                myAudio9.current.play();
            }
            else if(item.id==6){
                myAudio9.current.src = array[4].src;
                myAudio9.current.play();
            }
            else if(item.id==7){
                myAudio9.current.src = array[5].src;
                myAudio9.current.play();
            }
        }} alt=""/><h1>{item.name}</h1></div>
        <div className={v.mus1}>
            <div className={v.serdceWR}><div className={v.serdce} ref={ref1} onClick={f5}/></div>
            <h1 className={v.time}>{item.time}</h1></div>
    </div>)


    return (
        <div className={v.ddd}>
            <div className={v.wrapper1}>
                <div className={v.wrapper2}>
                    <img src="https://radiusfm.by/assets/img/base/headline-icon-played.png" className={v.muz}/>
                    <h1 className={v.h11}>ЧТО ИГРАЛО?</h1>
                    <NavLink to="/glavnaja" className={v.poslushat}>Послушать полный список</NavLink>
                </div>
                <div className={v.data}>
                    <form>
                        <input type="date" name="calendar" className={v.date}
                               max="2022-01-01" min="2000-01-01"/>
                    </form>
                </div>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>БЫЛО В ЭФИРЕ</h1>
            </div>
            <div className={v.wraper3}>
                <div className={v.wraper4}>
                    <div className={v.wraper5}>
                        {block}
                        <audio ref={myAudio9}>
                            <source src="" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chto;