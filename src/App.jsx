import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from './Layouts/Home.jsx'
import Home from './pages/Home.jsx'
import New from './pages/New.jsx';
import Basket from './pages/Basket.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="new" element={<New />} />
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
