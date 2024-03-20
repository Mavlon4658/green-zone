import { useState } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../assets/images"
import { useLocation } from "react-router-dom";

export default function () {
    let location = useLocation();

    return (
        <footer className={`footer ${location.pathname == '/new' ? 'bg_pink' : ''}`}>
            <ul className="main_container">
                <li className="footer__link">
                    <span>Местоположение</span>
                    <a href="#">просп. Мира, 8Б, <br /> Набережные Челны</a>
                </li>
                <li className="footer__link">
                    <span>E-mail</span>
                    <a href="#">greenzone@gmail.com</a>
                </li>
                <li className="footer__logo">
                    <Link to='/' className="">
                        <img src={IMAGES.footer_logo} alt="" />
                    </Link>
                </li>
                <li className="footer__link">
                    <span>Телефон</span>
                    <a href="#">+7 (989) 312 56 78</a>
                    <a href="#">+7 (976) 324 67 87</a>
                </li>
            </ul>
        </footer>
    )
}