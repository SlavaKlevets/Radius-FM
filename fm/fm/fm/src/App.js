import React from 'react';
import a from './App.module.css';
import Header from './header/Header.jsx';
import Body from './body/Body.jsx';
import Chto from './Chto/Chto.jsx';
import Hit from './Hit/Hit.jsx';
import {Route} from "react-router-dom";
import Footer from "./body/Footer/Footer";
import Programm from "./Programm/Programm";
import Podkasty from "./Podkasty/Podkasty";
import Novosty from "./Novosty/Novosty";
import Reklama from "./Reklama/Reklama";
import ORadio from "./ORadio/ORadio";
import ZonaVeschanija from "./ZonaVeschanija/ZonaVeschanija";
import Command from "./Сommand/Сommand";
import {Redirect} from "react-router";


function App(props) {

    let myAudio5 = React.createRef();
    let play= React.createRef();

    let num =0;
    function b() {
        num++;
        myAudio5.current.src = "https://stream2.datacenter.by/radiusfm_main";
        myAudio5.current.play();
        play.current.src="https://radiusfm.by/assets/img/base/stop_button.png";
        if(num%2==0){
            myAudio5.current.pause();
            play.current.src="https://radiusfm.by/assets/img/base/play_button.png";
        }
    };
    let f6 = React.createRef();

    function f5() {
        let s=f6.current.value;
        myAudio5.current.volume=s;
    }
    let f8=React.createRef();

    function f7(){
        f6.current.classList.toggle(a.value3);
    }

    return (

        <div className={a.App}>
            <Header/>
            <div className={a.body}>
                <div className={a.online}>
                    <div className={a.online1}><img src="https://radiusfm.by/assets/img/base/play_button.png" alt="" onClick={b} ref={play}/><h1>
                        Raye, RudimentalRegardless</h1></div>

                    <audio ref={myAudio5} >
                        <source src="" type="audio/mpeg"/>
                    </audio>
                    <div className={a.online2}>
                        <img src="https://radiusfm.by/uploads/images/5e7b4d0a6f2d4942642442.jpg" alt=""/><h1>
                        Автодрайв</h1>
                        <div className={a.online21}></div>
                        <div>
                            <div className={a.valueimg} onMouseUpCapture={f7}><img className={a.value1} src="https://radiusfm.by/assets/img/base/mute-button.png" ref={f8} /></div>
                            <input className={a.value} type="range" min={0} max={1} defaultValue={1} step="0.1" onChange={f5} ref={f6}/>
                        </div>
                    </div>
                </div>
                <Redirect to="/body"/>
                <Route path='/body' render={() => <Body store={props.store} dispatch={props.dispatch}/>}/>
                <Route path='/chto-igralo' render={() => <Chto/>}/>
                <Route path='/hit-parad' render={() => <Hit/>}/>
                <Route path='/programm' render={() => <Programm/>}/>
                <Route path='/podkast' render={() => <Podkasty/>}/>
                <Route path='/news' render={() => <Novosty/>}/>
                <Route path='/command' render={() => <Command/>}/>
                <Route path='/reklama' render={() => <Reklama/>}/>
                <Route path='/oradio' render={() => <ORadio/>}/>
                <Route path='/zona' render={() => <ZonaVeschanija/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
