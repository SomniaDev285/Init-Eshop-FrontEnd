import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from '../views/welcome/Welcome'
import Warehouse from '../views/warehouse/Warehouse'
import Dashboard from '../views/dashboard/Dashboard'
import Products from '../views/products/Products'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Welcome />} />
                <Route path='/dashboard' exact element={<Dashboard />}>
                    <Route index element={<p>Welcome to the Admin Panel Dashboard</p>} />
                    <Route path='products' element={<Products />} />
                    <Route path="warehouse" element={<Warehouse />}>
                        <Route path=':warehouseId' element={<Warehouse />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;