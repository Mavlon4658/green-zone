import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../assets/images/index.js"
import storeProduct from "../DB/datas.js"

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { toast } from "react-toastify";

export default function () {
    const [goods, setGoods] = useState([])
    const [totaPrice, setTotalPrice] = useState(0)

    const getBasket = () => {
        let card = localStorage.getItem('basket');
        if (card) {
            card = JSON.parse(card)
            setGoods(card)
        }
    }

    const saveBasket = (ID, n) => {
        let card = goods.map(item => {
            if (ID == item.goodID && (n > 0 || item.count != 0)) {
                return {...item, count: item.count + n}
            }
            return item
        })

        localStorage.setItem('basket', JSON.stringify(card));
        getBasket();
    }

    const findField = (id, field) => {
        let newCard = storeProduct.filter(a => a.id == id)[0]
        return newCard[field]
    }

    const remveBasketId = (ID) => {
        confirmAlert({
            title: 'Удалить продукт',
            message: 'Вы уверены, что сделаете это?',
            buttons: [
                {
                    label: 'Да',
                    onClick: () => {
                        let card = [...goods];
                        let idx = card.findIndex(a => a.goodID == ID);
                        card.splice(idx, 1)
                        localStorage.setItem('basket', JSON.stringify(card));
                        getBasket();
                        toast.success("Товар был удален", {
                            autoClose: 3000,
                            pauseOnHover: false,
                        })
                    }
                },
                {
                    label: 'Отмена',
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: false,
            keyCodeForClose: [8, 32],
            willUnmount: () => {},
            afterClose: () => {},
            onClickOutside: () => {},
            onKeypress: () => {},
            onKeypressEscape: () => {},
            overlayClassName: "overlay-custom-class-name"
        });

    }
    
    const sumPrice = () => {
        let sum = 0;
        goods.map((item, idx) => {
            sum += item.count * findField(item.goodID, 'price');
        });
        setTotalPrice(sum);
    }

    const minus = (idx) => {
        saveBasket(idx, -1);
    }

    const plus = (idx) => {
        saveBasket(idx, 1);
    }

    useEffect(() => {
        sumPrice();
    }, [goods])

    useEffect(() => {
        getBasket();
    }, [])

    return (
        <section className="basket">
            <div className="main_container">
                <h2 className="sec_title basket__title">
                    <span className="title">КОРЗИНА</span>
                    <span className="all_price">Итог: {totaPrice}</span>
                </h2>
                <ul className="basket__card">
                    {goods.slice().reverse().map((item, idx) => (
                        <li key={idx} className="basket__card_item">
                            <button onClick={() => remveBasketId(item.goodID)} className="clear">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                            <img src={findField(item.goodID, 'photo')[0]} alt="" className="main_img"/>
                            <p>{findField(item.goodID, 'name')} <br /><br /> Цвет: {findField(item.goodID, 'color')}</p>
                            <div className="calculate">
                                <button onClick={() => minus(item.goodID)}>
                                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M-4.37114e-07 9L15 0.339744L15 17.6603L-4.37114e-07 9Z" fill="#2E5C3C"/>
                                    </svg>
                                </button>
                                <span>{item.count}</span>
                                <button onClick={() => plus(item.goodID)}>
                                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z" fill="#2E5C3C"/>
                                    </svg>
                                </button>
                            </div>
                            <h3>{findField(item.goodID, 'price') * item.count}</h3>
                        </li>
                    ))}
                </ul>
                <div className={`btn_wrap ${!goods.length ? 'hidden' : ''}`}>
                    <button className="btn_green">ОФОРМИТЬ ЗАКАЗ</button>
                </div>
            </div>
        </section>
    )
}