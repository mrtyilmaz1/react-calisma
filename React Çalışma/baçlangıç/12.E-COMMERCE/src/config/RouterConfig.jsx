import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-deatails/:id' element={<ProductDetails />} />

        </Routes>
    )
}

export default RouterConfig