import { useRef, useState, useEffect } from "react"
import { Link, json, useParams } from "react-router-dom";
import IMAGES from "../../assets/images"
import GoodCard from "../../components/GoodCard";
import storeProduct from '../../DB/datas.js'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { toast } from "react-toastify";

export default function () {
    const params = useParams();
    const [imgs, setImgs] = useState([])
    const [currentImg, setcurrentImg] = useState(0)
    const [popularGood, setPopularGood] = useState({})
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const saveBasket = () => {
        
        toast.success("Продукт был добавлен в корзину!", {
            autoClose: 3000,
            pauseOnHover: false,
        })
        let card = localStorage.getItem('basket');

        if (!card) {
            card = [{goodID: +params.id, count: 1}];
        } else {
            card = JSON.parse(card)
            let newCard = card.find(a => a.goodID == params.id)
            if (!newCard) {
                card.push({goodID: +params.id, count: 1});
            } else {
                
                card = card.map(item => {
                    if (item.goodID == params.id) {
                        return {...item, count: item.count+1};
                    }
                    
                    return item
                });
            }
        }
        localStorage.setItem('basket', JSON.stringify(card))
    }

    useEffect(() => {
        let newCard = storeProduct.filter(a => a.id == params.id)[0]
        setPopularGood(storeProduct.filter(a => a.id == params.id)[0])
    }, [params.id])

    useEffect(() => {
        if (popularGood.id) {
            setImgs(popularGood.photo)
        }
    }, [popularGood])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            {/* Good one */}
            <section className="good_one">
                <div className="main_container">
                    <div className="good_one_left">
                        <h2 className="sec_title good_one__title">{popularGood?.name}</h2>
                        <p>{popularGood?.additionalInfo}</p>
                        <div className="btn_wrap">
                            <button className="btn_green" onClick={() => saveBasket()}>ДОБАВИТЬ В КОРЗИНУ</button>
                        </div>
                    </div>
                    <div className="good_one_right">
                        <div className="prent_slider__wrap">
                            <Swiper
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="swiper_parent mySwiper2"
                            >
                                {imgs.map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img src={item} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <span className="price">{popularGood?.price}</span>
                        </div>
                        <Swiper
                            onSlideChange={(swiper) => {setThumbsSwiper(swiper);}}
                            onClick={(swiper) => {setThumbsSwiper(swiper);}}
                            spaceBetween={10}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={`swiper_child mySwiper ${imgs.length == 1 ? 'hidden': ''}`}
                        >
                            {imgs.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <img src={item} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* Good one end */}

            {/* Popular goods */}
            <section className="popular_good">
                <div className="main_container">
                    <h2 className="sec_title popular_good__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>
                    <ul className="popular_good__card">
                        {storeProduct.slice(0, 3).map((item, idx) => (
                            <GoodCard key={idx} good={item}/>
                        ))}
                    </ul>
                </div>
            </section>
            {/* Popular goods end */}
        </>
    )
}