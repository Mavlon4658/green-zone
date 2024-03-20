import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../assets/images/index.js"

export default function () {
    const [goods, setGoods] = useState([
        {count: 1, price: 9000},
        {count: 2, price: 9000},
    ])
    const [totaPrice, setTotalPrice] = useState(0)
    
    const sumPrice = () => {
        let sum = 0;
        goods.map((item, idx) => {
            sum += item.count * item.price;
        });
        setTotalPrice(sum);
    }

    const minus = (idx) => {
        setGoods(oldGoods => {
            const newGoods = oldGoods.map((item, i) => {
                if (item.count > 0 && idx == i) {
                    return { ...item, count: item.count - 1 };
                }
                return item;
            });
            return newGoods;
        });
    }

    const plus = (idx) => {
        setGoods(oldGoods => {
            const newGoods = oldGoods.map((item, i) => {
                if (idx == i) {
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
            return newGoods;
        });
    }

    useEffect(() => {
        sumPrice();
    }, [goods])

    window.scrollTo(0, 0);

    return (
        <section className="basket">
            <div className="main_container">
                <h2 className="sec_title basket__title">
                    <span className="title">КОРЗИНА</span>
                    <span className="all_price">Итог: {totaPrice}</span>
                </h2>
                <ul className="basket__card">
                    {goods.map((item, idx) => (
                        <li key={idx} className="basket__card_item">
                            <img src={IMAGES.popular_good_1} alt="" className="main_img"/>
                            <p>Корзина для белья “Детсво” <br /><br /> Цвет: Зеленый</p>
                            <div className="calculate">
                                <button onClick={() => minus(idx)}>
                                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M-4.37114e-07 9L15 0.339744L15 17.6603L-4.37114e-07 9Z" fill="#2E5C3C"/>
                                    </svg>
                                </button>
                                <span>{item.count}</span>
                                <button onClick={() => plus(idx)}>
                                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z" fill="#2E5C3C"/>
                                    </svg>
                                </button>
                            </div>
                            <h3>{item.price * item.count}</h3>
                        </li>
                    ))}
                </ul>
                <div className="btn_wrap">
                    <button className="btn_green">ОФОРМИТЬ ЗАКАЗ</button>
                </div>
            </div>
        </section>
    )
}