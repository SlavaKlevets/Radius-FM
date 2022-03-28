import React from 'react';
import v from './Podkasty.module.css';
import {NavLink} from "react-router-dom";


let array = [{
    image: "https://radiusfm.by/media/cache/song_list/uploads/images/608a7a5678c9f070267593.jpg",
    name: "Pink  Just Like Fire",
    time: "https://radiusfm.by/assets/img/base/download-icon.png",
    src:"https://vmuzone.com/dl/NGJmYThlZWRmODczNGRmYTdlOGU3YWJmYWVmZjhjZTN8bG9hZA.mp3",
    id:0,
    pl:0
},
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/608a7a5678c9f070267593.jpg",
        name: "Saint JHN  Roses (Imanbek Remix)",
        time: "https://radiusfm.by/assets/img/base/download-icon.png",
        src:"http://mp3-zaycev.com/uploads/posts/2020-12/1607595663.mp3",
        id:1,
        pl:1
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/608a7a5678c9f070267593.jpg",
        name: "Chael feat. Kaii  Don't Speak",
        time: "https://radiusfm.by/assets/img/base/download-icon.png",
        src:"https://nmuz.net/uploads/music/2021/01/Chael_Don_t_Speak_feat_Kaii.mp3",
        id:2,
        pl:2
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/608a7a5678c9f070267593.jpg",
        name: "Raye, Rudimental  Regardless",
        time: "https://radiusfm.by/assets/img/base/download-icon.png",
        src:"https://zamp3.net/uploads/music/2021/02/raye-rudimental-regardless-mp3.mp3",
        id:3,
        pl:3
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/608a7a5678c9f070267593.jpg",
        name: "Maruv  Siren Song",
        time: "https://radiusfm.by/assets/img/base/download-icon.png",
        src:"https://dl.mp3mob.net/uploads/files/2019-07/1563989878_maruv-siren-song.mp3",
        id:4,
        pl:4
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/6082af816130c639033351.jpg",
        name: "Rauf & Faik feat. Niletto  Если тебе будет грустно",
        time: "https://radiusfm.by/assets/img/base/download-icon.png",
        src:"https://mp3uk.net/mp3/files/rauf-faik-niletto-esli-tebe-budet-grustno-mp3.mp3",
        id:5,
        pl:5
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/6082afa4c1611938443261.jpg",
        name: "DNCE feat. Nicki Minaj  Kissing Strangers",
        time: "https://radiusfm.by/assets/img/base/download-icon.png",
        src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510755032_dnce-ft-nicki-minaj-kissing-strangers-www_muzonov_net.mp3",
        id:6,
        pl:6
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/6082af816130c639033351.jpg",
        name: "Masked Wolf Astronaut In The Ocean",
        time: "https://radiusfm.by/assets/img/base/download-icon.png",
        src:"https://mp3day.net/uploads/files/2021-01/1610304132_masked-wolf-astronaut-in-the-ocean.mp3",
        id:7,
        pl:7
    }
];

let myAudio8=React.createRef();


let block = array.map(item => <div className={v.musika}>
    <div className={v.mus} > <img src={item.image} onClick={(e)=>{
        if(item.id==0){
                myAudio8.current.src = array[0].src;
                myAudio8.current.play();
        }
        else if(item.id==1){
            myAudio8.current.src = array[1].src;
            myAudio8.current.play();
        }
        else if(item.id==2){
            myAudio8.current.src = array[2].src;
            myAudio8.current.play();
        }
        else if(item.id==3){
            myAudio8.current.src = array[3].src;
            myAudio8.current.play();
        }
        else if(item.id==4){
            myAudio8.current.src = array[4].src;
            myAudio8.current.play();
        }
        else if(item.id==5){
            myAudio8.current.src = array[5].src;
            myAudio8.current.play();
        }
        else if(item.id==6){
            myAudio8.current.src = array[6].src;
            myAudio8.current.play();
        }
        else if(item.id==7){
            myAudio8.current.src = array[7].src;
            myAudio8.current.play();
        }
    }} alt=""/><h1>{item.name}</h1></div>


    <div className={v.mus1}>
        <div className={v.serdce}><img className={v.time} src={item.time}/></div>
    </div>
</div>)

const Podkasty = () => {
    return (
        <div className={v.ddd}>
            <div className={v.wrapper1}>
                <div className={v.wrapper2}>
                    <img src="https://radiusfm.by/assets/img/base/headline-icon-programm.png" className={v.muz}/>
                    <h1 className={v.h11}>ПОДКАСТЫ</h1>
                    <div className={v.nav}>
                        <NavLink to="/ff" className={v.navl}>Последние</NavLink>
                        <NavLink to="/ff" className={v.navl}>В теме!</NavLink>
                        <NavLink to="/ff" className={v.navl}>Маленькие герои Большой Победы</NavLink>
                        <NavLink to="/ff" className={v.navl}>Теория большого утра</NavLink>
                        <NavLink to="/Podkast" className={v.navl}>Кинолюкс</NavLink>
                        <NavLink to="/ff" className={v.navl}>Бренд-BOX</NavLink>
                        <NavLink to="/ff" className={v.navl}>Следуй за мной</NavLink>
                        <NavLink to="/ff" className={v.navl}>Ментальная прокачка</NavLink>
                    </div>

                </div>

            </div>
            <div className={v.wraper3}>
                <div className={v.wraper4}>
                    <div className={v.wraper5}>
                        {block}
                        <audio ref={myAudio8}>
                            <source src="" type="audio/mpeg"/>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Podkasty;