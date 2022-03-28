let store = {
    state: {
        zdwig: 100,
        zdwig2: -100,
        arr :[
            {
                num: 1,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/6012cbde35744043150889.png",
                name: "Masked Wolf",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:1,
            },
            {
                num: 2,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/602e5e4b2428c042072355.png",
                name: "Travis Scott,HVME",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:2,
            },
            {
                num: 3,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/6049d7aff2a48784162549.jpg",
                name: "Nightcrawlers feat.",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:3,
            }
            ,
            {
                num: 4,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/6012cbfc56442783766447.png",
                name: "Thomas Gold",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:4,
            },
            ,
            {
                num: 5,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/604b1747b0b39191514640.jpg",
                name: "ATB,Topic,A7S",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:5,
            },
            ,
            {
                num: 6,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/6009654aa1cc7967063072.jpg",
                name: "Weeknd",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:6,
            },
            ,
            {
                num: 7,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/603e3fae2f255326631208.jpg",
                name: "Willow Sage Hart",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:7,
            },
            {
                num: 8,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/60225403de18c401774777.jpg",
                name: "Willow Sage Hart",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:8,
            },
            {
                num: 9,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/60225403de18c401774777.jpg",
                name: "Willow Sage Hart",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:9,
            },
            {
                num: 10,
                image: "https://radiusfm.by/media/cache/song_list/uploads/images/60225403de18c401774777.jpg",
                name: "Willow Sage Hart",
                src:"https://dl.muzonovs.ru/uploads/files/2017-11/1510811551_kush-kush-fight-back-with-love-tonight-www_muzonov_net.mp3",
                id:10,
            }
        ],
    },
    /********************************************************************************************************************/
    dispatch(action) {
        if (action.type === 'MUZ1') {
            this.state.zdwig = this.state.zdwig - 100;
            if (this.state.zdwig <= -500) {
                this.state.zdwig = 0;
            }

            this.b=this.state.zdwig+"%";
            return  this.b;
            this.callSubscriber();
        }
        else if (action.type === 'MUZ2') {
            this.state.zdwig2 = this.state.zdwig2 + 100;
            if (this.state.zdwig2 >= 100) {
                this.state.zdwig2 = -400;
            }
            this.a=this.state.zdwig2+"%";
            return  this.a;
            this.callSubscriber();
        }
       /**************************************/
        else if (action.type === 'A1') {
            let myAudio5=action.myAudio5;
            myAudio5.current.src = "https://mp3uk.net/mp3/files/yaroslav-sumishevskij-aleksej-petruhin-plastinochka-mp3.mp3";
            myAudio5.current.play();
            this.callSubscriber();
        }
        else if (action.type === 'A2') {
            let myAudio5=action.myAudio5;
            myAudio5.current.src = "https://sefon.pro/api/mp3_download/direct/9323/3vUCANq16Zpc-J9QzT463yuBa0e_BIYCzw4nEf0llNFrIhkkb3LfgbucBVz-eZa1aaT2oLWAVYD10vslywRVkBek_pvMkMsN8Qv0FsSMX5QglehYoC7GkA_DCpehUHz5UQvnQ_i8J3qQxDEfM2cHiEe5Indic2PF7ZIO/";
            myAudio5.current.play();
            this.callSubscriber();
        }
        else if (action.type === 'A3') {
            let myAudio5=action.myAudio5;
            myAudio5.current.src = "https://mp3uk.net/mp3/files/intelligency-avgust-mp3.mp3";
            myAudio5.current.play();
            this.callSubscriber();
        }
        else if (action.type === 'A4') {
            let myAudio5=action.myAudio5;
            myAudio5.current.src = "https://mp3uk.net/mp3/files/inna-flashbacks-mp3.mp3";
            myAudio5.current.play();
            this.callSubscriber();
        }
        else if (action.type === 'A5') {
            let myAudio5=action.myAudio5;
            myAudio5.current.src = "https://mp3uk.net/mp3/files/klava-koka-niletto-krash-mp3.mp3";
            myAudio5.current.play();
            this.callSubscriber();
        }
        else if (action.type === 'A6') {
            let myAudio5=action.myAudio5;
            myAudio5.current.src = "https://sefon.pro/api/mp3_download/direct/405701/3vUCAPI6hw6_8Re6g_bkynSXjupYXqaq3u7ax-V3NFk1VjQgn_5i8ipBh4JYYvVIROYPJyN8ZdQNo8rZMrqOWVVwUHL_UMui1eA9BeaAd5hcHdK1YJmqcDEkI2eT1YqxSKCXQsoJjIuaeL5zcdOhdK8gH9-_qzI8EL1iXNk/";
            myAudio5.current.play();
            this.callSubscriber();
        }
        /**************************************/
        else if (action.type === 'PLAYAUDIO'){
            let Audio1=action.arg1;
            let Audio2=action.arg2;
            Audio1.current.src = "http://streaming.tdiradio.com:8000/house.mp3";
            Audio1.current.play();
            Audio2.current.style.width = 42 + "px";
            Audio2.current.style.backgroundColor = "yellow";
            this.callSubscriber();
        }
    else if (action.type === 'PLAYAUDIO3'){
            let Audio3=action.arg3;
            let Audio4=action.arg4;
            Audio3.current.src = "http://streaming.tdiradio.com:8000/house.mp3";
            Audio3.current.play();
            Audio4.current.style.width = 42 + "px";
            Audio4.current.style.backgroundColor = "yellow";
            this.callSubscriber();
        }
    else if (action.type === 'PLAYAUDIO2'){
            let Audio5=action.arg5;
            let Audio6=action.arg6;
            Audio5.current.pause();
            Audio6.current.style.backgroundColor = "yellow";
            this.callSubscriber();
        }
        /**************************************/
    },
    getStete(){
        return this.state;
    },

    callSubscriber() {

    },

    subscribe(observer) {
        this.callSubscriber = observer;        // наблюдатель
    }

}

    export const playAudioCreator=(a,b)=>({type:'PLAYAUDIO',arg1:a,arg2:b});
    export const playAudio2Creator=(a,b)=>({type:'PLAYAUDIO2',arg5:a,arg6:b});
    export const playAudio3Creator=(a,b)=>({type:'PLAYAUDIO3',arg3:a,arg4:b});



export default store;
