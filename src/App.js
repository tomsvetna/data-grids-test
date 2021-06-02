import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MuiGrid = lazy(() => import('./MuiGrid'))
const AgGrid = lazy(() => import('./AgGrid'))

const App = () => (
    <Suspense fallback="Loading...">
        <BrowserRouter>
            <Routes>
                <Route element={<MuiGrid />} path="/muigrid" />
                <Route element={<AgGrid />} path="/aggrid" />
            </Routes>
        </BrowserRouter>
    </Suspense>
)

export default App
