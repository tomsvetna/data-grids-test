import { DataGrid } from '@material-ui/data-grid'
import React, { useEffect } from 'react'
import { columns } from './columns'
import { FPS, Scroller } from './utils.js'

const MuiDataGrid = ({ data }) => {
    const start = performance.now()

    useEffect(() => {
        console.log('MuiDataGrid loaded in', performance.now() - start, 'ms')
    }, [])

    const performScrollTest = () => {
        FPS.start()
        Scroller.scroll({
            element: document.querySelector('.MuiDataGrid-window'),
            callback() {
                FPS.stop()
            },
        })
    }

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <DataGrid
                rows={data.objects}
                columns={columns}
                loading={data.objects.length === 0}
                rowHeight={38}
            />
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

export default MuiDataGrid
