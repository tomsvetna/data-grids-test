import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import data from './data.json'
import Nav from './Nav'
import Results from './Results'

const MuiDataGrid = lazy(() => import('./MuiDataGrid'))
const MuiXGrid = lazy(() => import('./MuiXGrid'))
const AgGrid = lazy(() => import('./AgGrid'))
const DevExtremeGrid = lazy(() => import('./DevExtremeGrid'))
const ReactDataGrid = lazy(() => import('./ReactDataGrid'))

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
                <Route element={<DevExtremeGrid data={data} />} path="/devextremegrid" />
                <Route
                    element={<DevExtremeGrid data={data} pagination />}
                    path="/devextremegrid-paged"
                />
                <Route element={<ReactDataGrid data={data} />} path="/reactdatagrid" />
                <Route
                    element={<ReactDataGrid data={data} pagination />}
                    path="/reactdatagrid-paged"
                />
                <Route element={<Results />} path="/results" />
            </Routes>
        </BrowserRouter>
    </Suspense>
)

export default App
