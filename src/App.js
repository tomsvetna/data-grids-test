import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import data from './data.json'
import Results from './Results'

const MuiDataGrid = lazy(() => import('./MuiDataGrid'))
const MuiXGrid = lazy(() => import('./MuiXGrid'))
const AgGrid = lazy(() => import('./AgGrid'))

const App = () => (
    <Suspense fallback="Loading...">
        <BrowserRouter>
            <Routes>
                <Route element={<Nav />} path="/" />
                <Route element={<MuiDataGrid data={data} />} path="/muidatagrid" />
                <Route element={<MuiXGrid data={data} />} path="/muixgrid" />
                <Route element={<MuiXGrid data={data} pagination />} path="/muixgrid-paged" />
                <Route element={<AgGrid data={data} />} path="/aggrid" />
                <Route element={<AgGrid data={data} pagination />} path="/aggrid-paged" />
                <Route element={<Results />} path="/results" />
            </Routes>
        </BrowserRouter>
    </Suspense>
)

export default App
