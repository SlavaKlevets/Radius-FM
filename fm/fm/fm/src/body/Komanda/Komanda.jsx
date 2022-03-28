import React from 'react';
import v from './Komanda.module.css';

const Komanda = (props) => {



    let arr = [{
        arr: "https://radiusfm.by/media/cache/showman_list/uploads/images/6062e38ec57ff084400143.png",
        name: "Жан Сенкевич",
        musik: "Теория большого утра",
    },
        {
            arr: "https://radiusfm.by/media/cache/showman_list/uploads/images/5fb634bdac6a5223262206.png",
            name: "Оля Петровская",
            musik: "Теория большого утра"
        },
        {
            arr: "https://radiusfm.by/media/cache/showman_list/uploads/images/5fb639e76cfd5804677954.png",
            name: "Женя Басалай",
            musik: "Теория большого утра"
        },
        {
            arr: "https://radiusfm.by/media/cache/showman_list/uploads/images/5fb625efaa5b2418196218.png",
            name: "Ольга Венская",
            musik: "Теория большого утра"
        },
        {
            arr: "https://radiusfm.by/media/cache/showman_list/uploads/images/601919ff17b03649945088.png",
            name: "Артём Семён",
            musik: "Отличный день"
        },
        {
            arr: "https://radiusfm.by/media/cache/showman_list/uploads/images/5f9aa3b4ba6dc065836476.png",
            name: "Дмитрий Лешкевич",
            musik: "Автодрайв"
        }
    ];
    let ref4 = React.createRef();
    let ref5 = React.createRef();

    let zdwig = 0;
    let image = arr.map(item => <div className={v.cart1} ><img src={item.arr} className={v.imag}/>
        <h1 className={v.name}>{item.name}</h1><h1 className={v.musik}>{item.musik}</h1></div>);
    let f1 = () => {
        zdwig = zdwig - 275;
        ref5.current.style.left = zdwig + "px";
        if (zdwig < -550) {
            zdwig = 275;
        }
    };
    let zdwig2 = -275;
    let f2 = () => {
        zdwig2 = zdwig2 + 275;
        ref5.current.style.left = zdwig2 + "px";
        if (zdwig2 >= 0) {
            zdwig2 = -1100;
        }
    };

    let ds = React.createRef();


    return (
        <div className={v.ddd}>
            <div className={v.wraper2}>

                <img src="https://radiusfm.by/assets/img/base/headline-icon-main-team.png" className={v.muz}/>
                <h1 className={v.h11}>Команда</h1>

            </div>
            <div className={v.wraper3}>
                <div className={v.wraper4} ref={ref4}>
                    <div className={v.wraper5} ref={ref5}>
                        {image}

                    </div>
                </div>
                <div ref={ds}>
                    <img className={v.btn1} onClick={f1}
                         src="https://radiusfm.by/assets/img/base/programm-slider-arrow.png" alt="audi"/>
                    <img className={v.btn2} onClick={f2}
                         src="https://radiusfm.by/assets/img/base/programm-slider-arrow.png" alt="audi"/>
                </div>

            </div>


        </div>
    );
}
export default Komanda;