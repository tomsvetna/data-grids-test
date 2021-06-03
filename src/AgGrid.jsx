import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import React, { useEffect, useState } from 'react'
import { columns } from './columns'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { FPS, Scroller } from './utils'

const AgGrid = ({ data, pagination }) => {
    const start = performance.now()

    useEffect(() => {
        console.log('AgGrid loaded in', performance.now() - start, 'ms')
    }, [])

    const performScrollTest = () => {
        FPS.start()
        Scroller.scroll({
            element: document.querySelector('.ag-body-viewport'),
            callback() {
                FPS.stop()
            },
        })
    }

    return (
        <div className="ag-theme-alpine" style={{ height: '100vh', width: '100vw' }}>
            <AgGridReact
                rowData={data.objects}
                rowHeight={38}
                colWidth={100}
                pagination={pagination}
            >
                {columns.map(({ field }) => (
                    <AgGridColumn key={field} field={field} sortable filter />
                ))}
            </AgGridReact>
            <div
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '40px',
                    padding: '10px',
                    backgroundColor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <button type="button" onClick={performScrollTest}>
                    Scroll test
                </button>
            </div>
        </div>
    )
}

export default AgGrid
