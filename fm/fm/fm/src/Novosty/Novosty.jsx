import React from 'react';
import v from './Novosty.module.css';
import {NavLink} from "react-router-dom";

const Novosty = (props) => {

    let arr = [{
        arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/608a532a54628948408324.jpg",
        musik: "Манипуляции в человеческих отношениях",
        p: "Как нами манипулируют в отношениях и что с этим делать?"
    },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/6089749e69e3a878834053.JPG",
            musik: "Лана Дель Рей анонсировала третий за год альбом под названием \"Blue Banisters\"",
            p: "Релиз пластинки состоится 4 июля"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/608971b26ffea926460671.jpg",
            musik: "Конкурс программ для телевидения, радио и интернет-платформ",
            p: "Конкурс \"Тивиар\" в апреле запустил факультет журналистики БГУ совместно с главным медиахолдингом страны"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/6088105800eaf956684737.jpg",
            musik: "Билли Айлиш создала новый аккаунт в TikTok",
            p: "Аккаунт называется @happierthanever - в честь будущей композиции Happier Than Ever"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/60880ca658ef7452887331.jpg",
            musik: "Дизайн интерьеров",
            p: "Этапы создания дизайна. На чем сэкономить при ремонте? Критерии хорошего дизайна"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/6086ccc3547bc485661565.jpg",
            musik: "Вручена премия \"Оскар-2021\"",
            p: "Лучшим актером стал Энтони Хопкинс"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/6086c7ba73634457619454.jpg",
            musik: "Наркомания и педофилия: болезнь или преступление",
            p: "Существуют ли \"легкие\" наркотики? Какой средний возраст жертв педофилов?"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/6082a8b293edc731993900.jpg",
            musik: "Ариана Гранде добавила свежий куплет к песне The Weeknd \"Save Your Tears\"",
            p: "Расширенная версия написана под новый ремикс"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/6082a55ce5fa1188810464.jpg",
            musik: "Скорочтение. Как увеличить скорость чтения и на чём базируется методика?",
            p: "Выясним, насколько можно увеличить скорость чтения? На чём базируется эта методика? Как проходит обучение?"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/6081918503121508174166.jpg",
            musik: "Хит Клавы Коки в исполнении тульских бабушек \"порвал\" Сеть",
            p: "Хор \"Вдохновение\" приятно удивил молодёжь"
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/60818dacc8839522541649.jpg",
            musik: "В 2022 году шведская группа ABBA намерена отправить в турне свои голограммы",
            p: "Исполнители нашли оригинальный способ выступить с концертами, \"не нарушая привычный уклад жизни\""
        },
        {
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/608162e8a99ad398658366.jpg",
            musik: "Новые правила Централизованного тестирования в Беларуси",
            p: "В каких предметах изменилось количество заданий? Станут ли тесты сложнее? Как коронавирус скажется на проведении ЦТ?"
        }
        ,{
            arr: "https://radiusfm.by/media/cache/feed_list/uploads/images/608162e8a99ad398658366.jpg",
            musik: "Новые правила Централизованного тестирования в Беларуси",
            p: "В каких предметах изменилось количество заданий? Станут ли тесты сложнее? Как коронавирус скажется на проведении ЦТ?"
        }
    ];

    let image = arr.map(item => <div className={v.cart1}>
        <img src={item.arr} className={v.imag}/><h1 className={v.musik}>{item.musik}</h1><p>{item.p}</p></div>);

    return (
        <div className={v.wrapper}>
            <div className={v.wrapper2}>
                <img src="https://radiusfm.by/assets/img/base/headline-icon-news.png" className={v.muz}/>
                <h1 className={v.h11}>НОВОСТИ</h1>
                <NavLink to="/dd" className={v.i}>Новое</NavLink>
                <NavLink to="/dd" className={v.i}>Музыка</NavLink>
                <NavLink to="/dd" className={v.i}>Кино</NavLink>
                <NavLink to="/dd" className={v.i}>Акции</NavLink>
                <NavLink to="/dd" className={v.i}>В теме</NavLink>

            </div>
            <div className={v.wrapper3}>
                <div className={v.wrapper4}>
                    <div className={v.wrapper5}>
                        {image}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Novosty;