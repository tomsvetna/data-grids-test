import { XGrid } from '@material-ui/x-grid'
import React, { useEffect } from 'react'
import { columns } from './columns'
import { FPS, Scroller } from './utils.js'

const MuiXGrid = ({ data, pagination }) => {
    const start = performance.now()

    useEffect(() => {
        console.log('MuiXGrid loaded in', performance.now() - start, 'ms')
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
            <XGrid
                rows={data.objects}
                columns={columns}
                loading={data.objects.length === 0}
                rowHeight={38}
                pagination={pagination}
                hideFooter={!pagination}
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

export default MuiXGrid
