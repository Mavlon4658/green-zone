import { useState } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../assets/images"

export default function () {
    window.scrollTo(0, 0);
    return (
        <div className="new-page">
            {/* New page home */}
            <section className="new_home">
                <div className="main_container">
                    <h2 className="sec_title pink new_home__title">НОВИНКА</h2>
                    <h3 className="new_home__subtitle">Такого ты еще не видел!</h3>
                    <div className="new_home__card first">
                        <div className="descriptions">
                            <p>Мы с гордостью сообщаем вам о нашем уникальном проекте по изготовлению стульев из переработанного пластика.</p>
                            <p>Наша компания всегда стремилась к инновациям и экологической ответственности, и этот проект отражает нашу приверженность созданию продуктов, которые не только функциональны и стильные, но и способствовали устойчивому использованию ресурсов.</p>
                        </div>
                        <img src={IMAGES.new_home_card_1} alt="" className="card_right" />
                    </div>
                    <div className="new_home__card">
                        <img src={IMAGES.new_home_card_2} alt="" className="card_right" />
                        <div className="descriptions">
                            <p>Наши стулья из переработанного пластика сочетали в себе функциональность, стильный дизайн и экологическую ценность.</p>
                            <p>Мы гордились тем, что наша компания являлась лидером в индустрии по производству мебели из устойчивых материалов, и мы надеялись, что наши продукты вдохновляли другие компании на экологически ответственное производство</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* New page home end */}

            {/* Multi color */}
            <div className="section multi_color">
                <div className="main_container">
                    <h2 className="sec_title pink multi_color__title">ДОСТУПНО В ТРЕХ ЦВЕТАХ</h2>
                    <div className="multi_color__card">
                        <img src={IMAGES.multi_color_1} alt="" />
                        <img src={IMAGES.multi_color_2} alt="" />
                        <img src={IMAGES.multi_color_3} alt="" />
                        <img src={IMAGES.multi_color_4} alt="" />
                    </div>
                </div>
            </div>
            {/* Multi color end */}

            {/* Pre order */}
            <section className="pre_order">
                <div className="main_container">
                    <h2 className="sec_title pink pre_order__title">ОФОРМИТЬ ПРЕДЗАКАЗА</h2>
                    <form className="pre_order__form">
                        <div className="inputs">
                            <input type="text" placeholder="Полное ФИО"/>
                            <input type="email" placeholder="Почта"/>
                            <input type="tel" placeholder="Номер телефона"/>
                        </div>
                        <button type="submit" className="btn_pink">ДО СКОРОЙ ВСТРЕЧИ</button>
                    </form>
                </div>
            </section>
            {/* Pre order end */}
        </div>
    )
}