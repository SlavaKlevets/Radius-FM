import React from 'react';
import v from './ZonaVeschanija.module.css';


let minsk=[
    {city:"Березино 30 км",
    volna:100.7
    },
    {city:"Копыль 37 км",
        volna:103.9
    },
    {city:"Мядель 63 км",
        volna:103.9
    },
    {city:"Солигорск 54 км",
        volna:102.8
    }
];
let brest=[
    {city:"Дрогичин 41 км",volna:102.4},
    {city:"Пинск 69 км",volna:102.0},
    {city:"Синкевичи 35 км",volna:100.0},
    {city:"Брест 66 км",volna:103.7}
];
let vitebsk=[
    {city:"Орша 62 км",volna:100.2},
    {city:"Ушачи 74 км",volna:102.7},
    {city:"Браслав 46 км",volna:102.3},
    {city:"Витебск 74 км",volna:105.5}
];
let homel=[
    {city:"Брагин 54 км",volna:100.8},
    {city:"Гомель 54 км",volna:100.1},
    {city:"Жлобин 51 км",volna:100.5},
    {city:"Мозырь 23 км",volna:104.8},
    {city:"Сметаничи 74 км",volna:103.8}
];
let mohilev=[
    {city:"Бобруйск 43 км",volna:104.1},
    {city:"Костюковичи 56 км",volna:102.2},
    {city:"Могилев 91 км",volna:100.9},
    {city:"Мстиславль 45 км",volna:102.9},
    {city:"Осиповичи 54 км",volna:104.9}
];
let hrodno=[
    {city:"Геранены 58 км",volna:103.3},
    {city:"Гродно 71 км",volna:100.5},
    {city:"Луки 32 км",volna:104.3},
    {city:"Свислочь 26 км",volna:96.7},
    {city:"Слоним 74 км",volna:104.0},
    {city:"Сморгонь 43 км",volna:101.4}
];

let arr=[minsk,hrodno,mohilev,homel,vitebsk,brest];


let zonaminsk=minsk.map(i=><div className={v.wrapper8}><div className={v.wrapper4}>{i.city}</div> <div className={v.volna}>{i.volna}</div></div>);
let zonahrodno=hrodno.map(i=><div className={v.wrapper8}><div className={v.wrapper4}>{i.city}</div><div className={v.volna}>{i.volna}</div></div>);
let zonamohilev=mohilev.map(i=><div className={v.wrapper8}><div className={v.wrapper4}>{i.city}</div><div className={v.volna}>{i.volna}</div></div>);
let zonahomel=homel.map(i=><div className={v.wrapper8}><div className={v.wrapper4}>{i.city}</div><div className={v.volna}>{i.volna}</div></div>);
let zonavitebsk=vitebsk.map(i=><div className={v.wrapper8}><div className={v.wrapper4}>{i.city}</div><div className={v.volna}>{i.volna}</div></div>);
let zonabrest=brest.map(i=><div className={v.wrapper8}><div className={v.wrapper4}>{i.city}</div><div className={v.volna}>{i.volna}</div></div>)


const ZonaVeschanija = () => {
    return (
        <div className={v.wrapper1}>
                <div className={v.wrapper2}>
                   <div className={v.wrapper3}><h1>Минск</h1>{zonaminsk}</div>
                    <div className={v.wrapper3}><h1>Гродненская область</h1>{zonahrodno}</div>
                    <div className={v.wrapper3}><h1>Могилевская область</h1>{zonamohilev}</div>
                    <div className={v.wrapper3}><h1>Гомельская область</h1>{zonahomel}</div>
                    <div className={v.wrapper3}><h1>Витебская область</h1>{zonavitebsk}</div>
                    <div className={v.wrapper3}><h1>Брестская область</h1>{zonabrest}</div>
                </div>
        </div>
    );
}
export default ZonaVeschanija;