import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import React, { useEffect } from 'react'
import data from './data.json'
import { columns } from './columns'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const AgGrid = () => {
    const rows = data.objects
    console.log('Data loaded')

    const start = performance.now()
    console.log(start)

    useEffect(() => {
        console.log(performance.now() - start)
    }, [])

    return (
        <div className="ag-theme-alpine" style={{ height: '100vh', width: '100vw' }}>
            <AgGridReact rowData={rows}>
                {columns.map(({ field }) => (
                    <AgGridColumn field={field} />
                ))}
            </AgGridReact>
        </div>
    )
}

export default AgGrid
