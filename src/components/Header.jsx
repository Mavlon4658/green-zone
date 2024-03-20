import { Link } from "react-router-dom";
import { useState, useRef } from 'react'
import IMAGES from "../assets/images";


export default function () {
    const [navs, setNavs] = useState([
        {name: 'Доставка', to: '/'},
        {name: 'Гарантия', to: '/'},
        {name: 'Магазин', to: '/'},
    ])

    const mobile_menu = useRef();

    const menuToggle = () => {
        if (mobile_menu.current.classList.contains('active')) {
            mobile_menu.current.classList.remove('active');
            mobile_menu.current.classList.add('end-active');

            setTimeout(() => {
                mobile_menu.current.classList.remove('end-active');
            }, 130);
        } else {
            mobile_menu.current.classList.remove('end-active');
            mobile_menu.current.classList.add('active');
        }
    }

    return (
        <>
            <header className="header">
                <div className="main_container">
                    <Link to="/" className="header__logo">
                        <img src={IMAGES.header_logo} alt="" />
                        <span>GREEN ZONE</span>
                    </Link>
                    <ul className="header__navs">
                        {navs.map((item, idx) => (
                            <li key={idx.toString()}>
                                <Link to={item.to} className="header__navs_item">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Link to='/basket' className="header__basket">
                            <img src={IMAGES.header_basket} alt="" />
                    </Link>
                    <button className="header__bars" onClick={() => menuToggle()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>
                </div>
            </header>

            <div className="mobile_menu" ref={mobile_menu}>
                <div className="mobile_menu__bg"></div>
                <div className="mobile_menu__content">
                    <div className="content__head">
                        <Link to="/" className="content__head_logo">
                            <img src={IMAGES.header_logo} alt="" />
                            <span>GREEN ZONE</span>
                        </Link>
                        <button className="close_btn" onClick={() => menuToggle()}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                        </button>
                    </div>

                    <ul className="content__body">
                        {navs.map((item, idx) => (
                            <li key={idx.toString()}>
                                <Link to={item.to} className="content_link">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}