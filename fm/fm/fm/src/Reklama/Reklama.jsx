import React from 'react';
import v from './Reklama.module.css';

const Reklama = () => {
    return (
        <div className={v.ddd}>
            <div className={v.wrapper1}>
                <div className={v.wrapper2}>
                    <img src="https://radiusfm.by/assets/img/base/headline-icon-about.png" className={v.muz}/>
                    <h1 className={v.h11}>РЕКЛАМА НА РАДИО</h1>
                </div>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>ПРЕИМУЩЕСТВА РАЗМЕЩЕНИЯ РЕКЛАМЫ НА РАДИУС FM:</h1>
                <ul className={v.ul1}>
                    <li>самое широкое покрытие территории Беларуси, вещание даже в приграничье.
                        30 передатчиков обеспечивают устойчивый приём на большинстве автодорог.
                    </li>
                    <li>Радиус-FM входит в десятку самых популярных радиостанций Беларуси и Минска (данные исследования
                        ГЕВС, весна 2016)
                        Доля радиостанции Радиус-FM на всей территории Беларуси – 4.7%, 8 место. В Минске – 3.5%, 9
                        место.
                        Всего в Беларуси работают 33 радиостанции, в Минске - 20 (данные исследования ГЕВС, весна 2016).
                    </li>
                    <li>Популярность радиостанции Радиус-FM подтверждает численность групп в социальных сетях. Общее
                        число подписчиков превышает 30.000
                    </li>
                    <li>Размещая рекламу на радиостанции Радиус-FM, вы доносите её до слушателей в любом уголке Беларуси
                        за ту же цену.
                    </li>
                </ul>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>ПОЧЕМУ РАЗМЕЩАТЬ РЕКЛАМУ НА РАДИО - ЭТО ЭФФЕКТИВНО?</h1>
                <ul className={v.ul1}>
                    <li>Это самый доступный способ рекламы в СМИ. Не нужно изготавливать дорогостоящие баннеры или
                        видеоролики.
                    </li>
                    <li>Радиореклама – это оперативно! Текстовое объявление или радиоролик можно разместить буквально
                        сегодня на завтра.
                    </li>
                    <li>Радио слушает массовая аудитория. Практически в каждом автомобиле, доме, мобильном телефоне есть
                        радиоприёмник.
                        К тому же, радио можно слушать через Интернет.
                    </li>
                    <li>Рекламу на радио можно слушать «фоном». В то же время информация усваивается слушателем, а при
                        многократном повторе – запоминается.
                    </li>
                    <li>Реклама на радио меньше раздражает, чем ролики на телевидении или всплывающие страницы, баннеры
                        в Интернете.
                    </li>
                    <li>Стоимость изготовления радиороликов существенно ниже, чем, например, изготовление телевизионной
                        рекламы.
                    </li>
                </ul>
                <p className={v.reklama}>Реклама на радио – один из самых эффективных способов продвижения товаров и
                    услуг. Несмотря на развитие информационных технологий, радио по-прежнему остаётся популярным
                    СМИ.<br/>
                    У молодёжи может не быть дома телевизора, но радиоприёмник есть везде. Радио слушают в автомобилях,
                    общественном транспорте, за компьютером.<br/>
                    Музыка популярной FM-волны звучит на природе, в магазинах, торговых центрах и кафе.</p>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>РАЗВИВАЙТЕ СВОЙ БИЗНЕС ВМЕСТЕ С НАМИ!</h1>
                <ul className={v.ul1}>
                    <li>Звоните нам: +375 17 389-60-78.</li>
                    <li>Пишите: sushin@all.tvr.by, i_narkevich@all.tvr.by.</li>
                </ul>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>У НАС ПРОЗРАЧНЫЕ УСЛОВИЯ И ДОСТУПНЫЕ ЦЕНЫ!</h1>
                <p className={v.reklama}>Мы размещаем наши тарифы в открытом доступе. Вы можете ознакомиться с ними
                    прямо сейчас.
                    Не забывайте, у нас предусмотрена гибкая система скидок.</p>
            </div>
            <iframe width="70%" height="650" src="https://www.youtube.com/embed/hn7JS74tfjc"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
}
export default Reklama;