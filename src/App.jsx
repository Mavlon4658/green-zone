import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from './Layouts/Home.jsx'
import Home from './pages/Home.jsx'
import New from './pages/New.jsx';
import Good from './pages/good/Good.jsx'
import GoodId from './pages/good/_id.jsx'
import Basket from './pages/Basket.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="new" name="New" element={<New />} />
            <Route path='good' element={<Good />}/>
            <Route path='good/:id' element={<GoodId />}/>
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
