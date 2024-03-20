import { useState } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../../assets/images"
import GoodCard from "../../components/GoodCard";

export default function () {
    const [popularGood, setPopularGood] = useState([
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', discount: '3500 р.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Название или типо того ', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
    ])
    
    window.scrollTo(0, 0);

    return (
        <section className="good">
            <div className="main_container">
                <h2 className="sec_title good__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
                <div className="good__block">
                    <div className="good__block_left">
                        <div className="filter_title">Фильтры</div>
                        <div className="good__category">
                            <div className="title">
                                <span>Категория</span>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.53845L3 1.53845L5 3.53845" stroke="black" strokeWidth="1.6" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <span>Мягкая мебель </span>
                                        <span>15</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>Аксессуары для дома</span>
                                        <span>15</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>Светильники</span>
                                        <span>15</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="good__category good__color">
                            <div className="title">
                                <span>Цвета</span>
                                <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.53845L3 1.53845L5 3.53845" stroke="black" strokeWidth="1.6" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className="good__color_list">
                                <button className="black"></button>
                                <button className="green active"></button>
                            </div>
                        </div>
                        <div className="filter_link_wrap">
                            <button className="btn_green">Фильтры (8)</button>
                        </div>
                    </div>
                    <div className="good__block_right">
                        <div className="good__block_right__top">
                            <div>
                                <button>
                                    Мягкая мебель
                                    <img src={IMAGES.close} alt="" />
                                </button>
                                <button>Очистить</button>
                            </div>
                            <div>
                                <button className="sort_btn">
                                    <img src={IMAGES.sort_icon_1} alt="" />
                                </button>
                                <button className="sort_btn">
                                    <img src={IMAGES.sort_icon_2} alt="" />
                                </button>
                            </div>
                        </div>
                        <ul className="good__cards">
                            {popularGood.map((item, idx) => (
                                <GoodCard key={idx} good={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}