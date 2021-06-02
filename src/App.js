import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import data from './data.json'

const MuiGrid = lazy(() => import('./MuiGrid'))
const AgGrid = lazy(() => import('./AgGrid'))

const App = () => (
    <Suspense fallback="Loading...">
        <BrowserRouter>
            <Routes>
                <Route element={<Nav />} path="/" />
                <Route element={<MuiGrid data={data} />} path="/muigrid" />
                <Route element={<AgGrid data={data} />} path="/aggrid" />
            </Routes>
        </BrowserRouter>
    </Suspense>
)

export default App
