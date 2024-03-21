import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import IMAGES from "../../assets/images"
import GoodCard from "../../components/GoodCard";
import storeProduct from '../../DB/datas.js'

export default function () {
    const [color, setColor] = useState('')
    const [sortGood, setSortGood] = useState(storeProduct)
    const [sortGood2, setSortGood2] = useState(storeProduct)
    const [typeList, setTypeList] = useState({})
    const [currentType, setCurrentType] = useState('');

    const sortByCategory = (key) => {
        setCurrentType(key);
        if (key != '') {
            setSortGood2(sortGood.filter(a => {
                if (a.type.toLowerCase() == key.toLowerCase()) {
                    return true;
                }
            }))
        } else {
            setSortGood2([...sortGood]);
        }
    }

    const filerByColor = (c) => {
        setColor(c)
        if (c != '') {
            setSortGood(storeProduct.filter(a => {
                if (a.color.toLowerCase() == c.toLowerCase()) {
                    return true
                }
            }))
        } else {
            setSortGood(storeProduct)
        }
        setCurrentType('');
    }
    
    const getTypeList = () => {
        const type = {};
        sortGood.forEach((item) => {
            let key = item.type.toLowerCase();
            if (!type[key]) {
                type[key] = 0
            }
            
            type[key] += 1;
        })
        setTypeList(type)
    }
    
    useEffect(() => {
        getTypeList()
        sortByCategory('');
    }, [sortGood])

    useEffect(() => {
        window.scrollTo(0, 0);
        filerByColor(color)
    }, [])

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
                                    {Object.entries(typeList).map(([key, value], idx) => (
                                        <button className={`${currentType == key ? 'active' : ''}`} onClick={() => sortByCategory(key)} key={idx}>
                                            <span>{key}</span>
                                            <span>{value}</span>
                                        </button>
                                    ))}
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
                                <button className={`black ${color == 'черный' ? 'active' : ''}`} onClick={() => filerByColor('черный')}></button>
                                <button className={`green ${color == 'зеленый' ? 'active' : ''}`} onClick={() => filerByColor('зеленый')}></button>
                            </div>
                        </div>
                        <div className="filter_link_wrap">
                            <button className="btn_green">Фильтры ({sortGood.length})</button>
                        </div>
                    </div>
                    <div className="good__block_right">
                        <ul className="good__cards">
                            {sortGood2.map((item, idx) => (
                                <GoodCard key={idx} good={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}