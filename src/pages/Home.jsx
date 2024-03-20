import { useState } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../assets/images"
import GoodCard from "../components/GoodCard";

export default function () {
    const [categoryCard, setCategoryCard] = useState([
        {img: IMAGES.category_card_1, name: 'Столовая', to: '/'},
        {img: IMAGES.category_card_2, name: 'Свет', to: '/'},
        {img: IMAGES.category_card_3, name: 'Мягкая мебель', to: '/'},
    ]);

    const [popularGood, setPopularGood] = useState([
        {title: 'Корзина для белья “Детсво”', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Полотенце “Родное”', to: '#', price: '4500 p.', img: IMAGES.popular_good_2, new: true},
        {title: 'Кресло “Солнце”', to: '#', price: '4500 p.', img: IMAGES.popular_good_3},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_2},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_3},
    ])

    window.scrollTo(0, 0);

    return (
        <>
        {/* Home */}
        <section className="home">
            <div className="main_container">
                <img src={IMAGES.home_bg} alt="" className="home__bg"/>
                <img src={IMAGES.home_logo} alt="" className="home__logo"/>
                <Link to='/' className="btn_green home__link">ВЕПЕРЕД ЗА ПОКУПКАМИ!</Link>
            </div>
        </section>
        {/* Home end */}

        {/* Categories */}
        <section className="categories">
            <div className="main_container">
                <h2 className="sec_title categories__title">КАТЕГОРИИ</h2>
                <ul className="categories__card">
                    {categoryCard.map((item, idx) => (
                        <li key={idx} className="categories__card_item">
                            <Link to={item.to}>
                                <img src={item.img} alt="" />
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        {/* Categories end */}

        {/* Popular goods */}
        <section className="popular_good">
            <div className="main_container">
                <h2 className="sec_title popular_good__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
                <ul className="popular_good__card">
                    {popularGood.map((item, idx) => (
                        <GoodCard key={idx} good={item}/>
                    ))}
                </ul>
                <Link to="/good" className="btn_green show_more">ПОДРОБНЕЕ</Link>
            </div>
        </section>
        {/* Popular goods end */}

        {/* New block */}
        <section className="new_block">
            <div className="main_container">
                <h2 className="sec_title pink new_bloc__title">НОВИНКА</h2>
                <h3 className="new_block__subtitle">Такого ты еще не видел!</h3>
                <div className="new_block__content">
                    <div className="new_block__content_left">
                        <div className="descriptions">
                            <p>Стул из бывшей зубной щетки? Или может из конфети? </p>
                            <h4>Все вместе! </h4>
                            <p>Смотри это же мебель из переработанного пластика</p>
                        </div>
                        <div className="link_wrap">
                            <Link to='/new' className="btn_pink">УЗНАТЬ БОЛЬШЕ</Link>
                        </div>
                    </div>
                    <img src={IMAGES.new_card_1} alt="" className="new_block__content_right" />
                </div>
            </div>
        </section>
        {/* New block end */}

        {/* Contact */}
        <section className="contact">
            <div className="main_container">
                <h2 className="sec_title contact__title">КОНТАКТЫ</h2>
                <h3 className="contact__subtitle">Задайте вопрос нашему в наш телеграм!</h3>
                <div className="contact__content">
                    <div className="contact__content_item">
                        <p>Присоединяйтесь к нашему телеграм-чату, где вы сможете общаться с нашей командой, делиться идеями, получать эксклюзивные предложения и быть в курсе всех новостей. Вместе мы создаем уникальную мебель и делаем мир чуточку лучше. Присоединяйтесь прямо сейчас и станьте частью нашего сообщества!</p>
                        <a href="#">
                            <img src={IMAGES.telegram} alt="" />
                        </a>
                    </div>
                    <img src={IMAGES.contact_card_1} alt="" className="contact__content_item" />
                    <img src={IMAGES.contact_card_2} alt="" className="contact__content_item" />
                </div>
            </div>
        </section>
        {/* Contact end */}
        </>
    )
}