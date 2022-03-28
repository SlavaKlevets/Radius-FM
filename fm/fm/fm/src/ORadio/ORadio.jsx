import React from 'react';
import v from './ORadio.module.css';
import {NavLink} from "react-router-dom";


const ORadio = () => {
    return (
        <div className={v.ddd}>
            <div className={v.wrapper1}>
                <div className={v.wrapper2}>
                    <img src="https://radiusfm.by/assets/img/base/headline-icon-about.png" className={v.muz}/>
                    <h1 className={v.h11}>О РАДИО</h1>
                </div>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>РАДИОСТАНЦИЯ С БОЛЬШИМ ПОТЕНЦИАЛОМ:</h1>
                <ul className={v.ul1}>
                    <li>первая FM-радиостанция с вещанием на всей территории Беларуси</li>
                    <li>обширная сеть вещания (30 передатчиков, более 98% покрытия территории страны)</li>
                    <li>современное звучание - формат CHR (перезагрузка формата с 1 сентября 2016 года)</li>
                    <li>узнаваемый бренд (17 лет в эфире)</li>
                </ul>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>“РАДИУС FM”. 100% ХИТОВ.</h1>
                <p className={v.reklama}>Реклама на радио – один из самых эффективных способов продвижения товаров и
                    услуг.
                    Несмотря на развитие информационных технологий, радио по-прежнему остаётся популярным СМИ.<br/>
                    У молодёжи может не быть дома телевизора, но радиоприёмник есть везде.
                    Радио слушают в автомобилях, общественном транспорте, за компьютером.<br/>
                    Музыка популярной FM-волны звучит на природе, в магазинах, торговых центрах и кафе.</p>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>МУЗЫКАЛЬНЫЙ ФОРМАТ ДЛЯ МОЛОДЫХ И АКТИВНЫХ ЛЮДЕЙ:</h1>
                <ul className={v.ul1}>
                    <li>современные мировые хиты</li>
                    <li>актуальные новинки</li>
                    <li>самая лучшая музыка</li>
                </ul>
                <p className={v.reklama}>CHR (Contemporary Hit Radio), то есть наиболее популярные сегодня хиты.
                    Основная целевая аудитория - 18-35 лет.</p>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>У “РАДИУС FM” БОЛЕЕ 100 ГОРОДОВ ВЕЩАНИЯ - СЛУШАЕТ ВСЯ СТРАНА!</h1>
                <p className={v.reklama}>Радиостанция входит в "Топ-3" самых популярных* радиостанций страны.
                    “Радиус FM” - единственная радиостанция формата CHR в Беларуси, имеющая 98.19% охвата** населения
                    страны.</p>
                <p className={v.reklama}>* Данные исследования Института социологии НАН Беларуси, апрель-май 2020 года.
                    Опросы проводились в Минске и городах Беларуси с населением свыше 100 тыс. человек.</p>
                <p className={v.reklama}>** Данные РУП "Белтелеком" на 10.02.2020.</p>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>БОЛЕЕ 35 000 ПОДПИСЧИКОВ В СОЦСЕТЯХ!</h1>
                <p className={v.reklama}>Радиостанция широко представлена в социальных сетях ВКонтакте, Facebook,
                    Одноклассники, Twitter.
                    Есть аккаунт в Instagram и канал на YouTube. Недавно был запущен аккаунт в TikTok.</p>

            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>В ЭФИРЕ “РАДИУС FM” - ВСЕ САМОЕ ЛУЧШЕЕ И ИНТЕРЕСНОЕ!</h1>
                <ul className={v.ul1}>
                    <li>молодые и талантливые ведущие</li>
                    <li>программы о музыке, путешествиях, здоровом образе жизни</li>
                    <li>каждый час - новости и прогноз погоды</li>
                </ul>
            </div>
            <div className={v.bylo}>
                <h1 className={v.byloh1}>НАС МОЖНО СЛУШАТЬ НЕ ТОЛЬКО В ЭФИРЕ!</h1>
                <ul className={v.ul1}>
                    <li>Радиостанция вещает в Сети в HD-качестве, реализовано отображение названия композиций, которые
                        сейчас звучат в эфире.
                    </li>
                </ul>
                <div className={v.ssilki}>
                    <p><a href="">Правила отправки и стоимость SMS-сообщений на Радиус FM</a></p>
                    <p><a href="">Вакансии радиостанции Радиус FM</a></p>
                    <p><a href="">Информация для авторов, исполнителей и их представителей</a></p>
                    <p><a href="">Я выиграл приз. Как и где мне его можно забрать?</a></p>
                </div>

            </div>
            <iframe className={v.frame}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.0591555518236!2d27.510050815858524!3d53.8773762800937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd0730ed06439%3A0xc94428fae1cd043d!2z0JbQtdC70LXQt9C90L7QtNC-0YDQvtC20L3QsNGPINGD0LvQuNGG0LAsINCc0LjQvdGB0LogMjIwMDg5!5e0!3m2!1sru!2sby!4v1620157455742!5m2!1sru!2sby"
                    width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
        </div>
    );
}
export default ORadio;