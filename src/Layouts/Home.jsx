import { Outlet, Link } from "react-router-dom";

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

import { ToastContainer } from 'react-toastify';

export default function () {
    return (
        <div className="wrapper">
            <ToastContainer />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}