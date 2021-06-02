import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import React, { useEffect } from 'react'
import { columns } from './columns'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const AgGrid = ({ data }) => {
    const start = performance.now()
    console.log(start)

    useEffect(() => {
        console.log(performance.now() - start)
    }, [])

    return (
        <div className="ag-theme-alpine" style={{ height: '100vh', width: '100vw' }}>
            <AgGridReact rowData={data.objects} rowHeight={38} colWidth={100}>
                {columns.map(({ field }) => (
                    <AgGridColumn field={field} sortable filter />
                ))}
            </AgGridReact>
        </div>
    )
}

export default AgGrid
