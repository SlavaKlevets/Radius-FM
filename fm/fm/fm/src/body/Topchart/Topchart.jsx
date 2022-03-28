import React from 'react';
import t from './Topchart.module.css';
import {NavLink} from "react-router-dom";
import {playAudio2Creator, playAudio3Creator, playAudioCreator} from "../../Redux/State";

const Topchart = (props) => {


    let arr22 =[
        {
            src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/6012cbde35744043150889.png"
        },
        {
            src:"https://mp3ball.ru/mp3/0/MTAzNTM3MzQ0XzQ1NjI0NTc2M18yOTc4MGE2MjA2OWZlOWZmNjNfMTE0ZjBmZWQ2ODYwODk1YWI2LzwhfCE-WyJncyIsMiwiQ2hhaXIgLSBOSUdIVENPUkUiLDEsbnVsbCwwLDQ1LDBd/Chair+-+NIGHTCORE+-+Bladee+-+Romeo_(MP3Ball.ru).mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/602e5e4b2428c042072355.png"
        },
        {
            src:"https://mp3uk.net/mp3/files/intelligency-avgust-mp3.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/6049d7aff2a48784162549.jpg"
        },
        {
            src:"https://mp3uk.net/mp3/files/inna-flashbacks-mp3.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/6012cbfc56442783766447.png"
        },
        {
            src:"https://dl.muzoff.net/files/music/2020/11/Masked_Wolf_-_Astronaut_In_The_Ocean.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/604b1747b0b39191514640.jpg"
        },
        {
            src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/6009654aa1cc7967063072.jpg"
        },
        {
            src:"https://muzup.ru/uploads/music/2020/07/travis-scott-goosebumps-hvme-remix-mp3.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/603e3fae2f255326631208.jpg"
        },
        {
            src:"https://muzup.ru/uploads/music/2020/07/travis-scott-goosebumps-hvme-remix-mp3.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/60225403de18c401774777.jpg"
        },
        {
            src:"https://muzup.ru/uploads/music/2020/07/travis-scott-goosebumps-hvme-remix-mp3.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/60225403de18c401774777.jpg"
        }
        ,
        {
            src:"https://muzup.ru/uploads/music/2020/07/travis-scott-goosebumps-hvme-remix-mp3.mp3",
            src1:"https://radiusfm.by/media/cache/song_list/uploads/images/60225403de18c401774777.jpg"
        }
    ];


    let myAudio2 = React.createRef();
    let myAudio3 = React.createRef();
    let myAudio4 = React.createRef();
    let myAudio9 = React.createRef();

    let viv = props.store.state.arr.map(item => <div className={t.music1}><h1 className={t.ds}>{item.num}</h1>
        <img src={item.image} className={t.mage}  onClick={(e)=>{
            if(e.target.src==arr22[0].src1){
                myAudio9.current.src = arr22[0].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[1].src1){
                myAudio9.current.src = arr22[1].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[2].src1){
                myAudio9.current.src = arr22[2].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[3].src1){
                myAudio9.current.src = arr22[3].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[4].src1){
                myAudio9.current.src = arr22[4].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[5].src1){
                myAudio9.current.src = arr22[5].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[6].src1){
                myAudio9.current.src = arr22[6].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[7].src1){
                myAudio9.current.src = arr22[7].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[8].src1){
                myAudio9.current.src = arr22[8].src;
                myAudio9.current.play();
            }
            else if(e.target.src==arr22[9].src1){
                myAudio9.current.src = arr22[9].src;
                myAudio9.current.play();
            }}} className={t.img}/>
        <h2 className={t.sss}>{item.name}</h2></div>);




    function playAudio() {
        props.dispatch(playAudioCreator(myAudio9,myAudio2));
    };

    function playAudio2() {
        props.dispatch(playAudio2Creator(myAudio9,myAudio3));
    };

    function playAudio3() {
        props.dispatch(playAudio3Creator(myAudio9,myAudio4));
    };


    return (
        <div className={t.wrapper}>
            <div className={t.wraper2}>
                <div className={t.divchart}>
                    <img className={t.naushnic} src="https://radiusfm.by/assets/img/base/main-hits-icon.png" alt=""/>
                    <h1 className={t.CHART}>TOP CHART RADIUS FM</h1>
                    <h2 className={t.colt}>Горячая десятка стопроцентных хитов, которые выбираешь ты.
                        Голосуй за самые крутые треки и слушай топ-чарт в эфире в пятницу в
                        19:00 и в воскресенье в 16:00!
                    </h2>
                </div>
                <div className={t.wr1}>
                    <div className={t.music}>
                        {viv}
                        <audio ref={myAudio9} controls>
                            <source src="" type="audio/mpeg"/>
                        </audio>

                        <button className={t.Play} onClick={playAudio} ref={myAudio2}>Play</button>
                        <button className={t.Stop} onClick={playAudio2} ref={myAudio3}>Stop</button>
                        <button className={t.Stop} onClick={playAudio3} ref={myAudio4}>Start</button>
                    </div>
                    <NavLink to="/chto-igralo" exact><button className={t.button}>ВСЕ ХИТЫ</button></NavLink>

                </div>
            </div>

        </div>
    );
}

export default Topchart;