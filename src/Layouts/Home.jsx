import { Outlet, Link } from "react-router-dom";

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function () {
    return (
        <>
            <div className="wrapper">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}