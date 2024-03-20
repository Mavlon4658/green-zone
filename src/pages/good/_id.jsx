import { useState } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../../assets/images"
import GoodCard from "../../components/GoodCard";

export default function () {
    const [imgs, setImgs] = useState([IMAGES.popular_good_1, IMAGES.popular_good_1, IMAGES.popular_good_1])
    const [currentImg, setcurrentImg] = useState(0)
    const [popularGood, setPopularGood] = useState([
        {title: 'Корзина для белья “Детсво”', to: '#', price: '4500 p.', img: IMAGES.popular_good_1},
        {title: 'Полотенце “Родное”', to: '#', price: '4500 p.', img: IMAGES.popular_good_2, new: true},
        {title: 'Кресло “Солнце”', to: '#', price: '4500 p.', img: IMAGES.popular_good_3},
    ])

    window.scrollTo(0, 0);

    return (
        <>
            {/* Good one */}
            <section className="good_one">
                <div className="main_container">
                    <div className="good_one_left">
                        <h2 className="sec_title good_one__title">КОРЗИНА</h2>
                        <p>Материал: Дерево и металл</p>
                        <p>Размеры: 40 см x 40 см x 40 см</p>
                        <p>Цвета: Натуральное дерево, черный металл</p>
                        <br />
                        <p>Особенности:</p>
                        <p>- Уникальный дизайн в стиле абстракции</p>
                        <p>- Прочная конструкция из натурального дерева и металла</p>
                        <p>- Современное сочетание материалов</p>
                        <p>- Компактные размеры, идеально подходит для небольших пространств</p>
                        <div className="btn_wrap">
                            <button className="btn_green">ДОБАВИТЬ В КОРЗИНУ</button>
                        </div>
                    </div>
                    <div className="good_one_right">
                        <img src={imgs[currentImg]} alt="" />
                        <span className="price">49000</span>
                    </div>
                    <div className="good_one_bottom">
                        {imgs.map((item, idx) => (
                            <img key={idx} src={item} alt="" onClick={() => setcurrentImg(idx)} className={`${currentImg == idx ? 'active' : ''}`}/>
                        ))}
                    </div>
                </div>
            </section>
            {/* Good one end */}

            {/* Popular goods */}
            <section className="popular_good">
                <div className="main_container">
                    <h2 className="sec_title popular_good__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
                    <ul className="popular_good__card">
                        {popularGood.map((item, idx) => (
                            <GoodCard key={idx} good={item}/>
                        ))}
                    </ul>
                </div>
            </section>
            {/* Popular goods end */}
        </>
    )
}