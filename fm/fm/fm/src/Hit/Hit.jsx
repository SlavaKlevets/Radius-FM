import React from 'react';
import v from './Hit.module.css';
import {NavLink} from "react-router-dom";


let array = [{
    image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebe7eb939e54546218739.jpg",
    name: "Pink  Just Like Fire",
    serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
    time: "18:08"
},
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebd1710cbb1e913981892.jpg",
        name: "Saint JHN  Roses (Imanbek Remix)",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "18:05"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ff43e5cd7404052568929.png",
        name: "Chael feat. Kaii  Don't Speak",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "18:02"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5fc8a1679b288845598435.jpg",
        name: "Raye, Rudimental  Regardless",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:56"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebd1a2bd4993137042485.jpg",
        name: "Maruv  Siren Song",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:50"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/60740c5dc4384977688891.jpg",
        name: "Rauf & Faik feat. Niletto  Если тебе будет грустно",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:47"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebe7f0bcba7a027720291.jpg",
        name: "DNCE feat. Nicki Minaj  Kissing Strangers",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:43"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/6012cbde35744043150889.png",
        name: "Masked Wolf Astronaut In The Ocean",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:41"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebe7eb939e54546218739.jpg",
        name: "Pink  Just Like Fire",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "18:08"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebd1710cbb1e913981892.jpg",
        name: "Saint JHN  Roses (Imanbek Remix)",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "18:05"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ff43e5cd7404052568929.png",
        name: "Chael feat. Kaii  Don't Speak",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "18:02"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5fc8a1679b288845598435.jpg",
        name: "Raye, Rudimental  Regardless",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:56"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebd1a2bd4993137042485.jpg",
        name: "Maruv  Siren Song",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:50"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/60740c5dc4384977688891.jpg",
        name: "Rauf & Faik feat. Niletto  Если тебе будет грустно",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:47"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/5ebe7f0bcba7a027720291.jpg",
        name: "DNCE feat. Nicki Minaj  Kissing Strangers",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:43"
    },
    {
        image: "https://radiusfm.by/media/cache/song_list/uploads/images/6012cbde35744043150889.png",
        name: "Masked Wolf Astronaut In The Ocean",
        serdce: "https://radiusfm.by/assets/img/base/like-icon.png",
        time: "17:41"
    }
];

let block = array.map(item => <div className={v.musika}>
    <div className={v.mus}><img src={item.image} alt=""/><h1>{item.name}</h1></div>
    <div className={v.mus1}>
        <div className={v.serdce}/>
        <h1 className={v.time}>{item.time}</h1></div>
</div>)

const Hit = () => {
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
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hit;