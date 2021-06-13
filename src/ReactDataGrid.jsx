import { default as Grid } from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import React, { useEffect } from 'react'
import { columns } from './devExtremeColumns'
import { FPS, Scroller } from './utils.js'

const ReactDataGrid = ({ data, pagination }) => {
    const start = performance.now()

    useEffect(() => {
        console.log('ReactDataGrid loaded in', performance.now() - start, 'ms')
    }, [])

    const performScrollTest = () => {
        FPS.start()
        Scroller.scroll({
            element: document.querySelector(`[data-name*="scroller"]`),
            callback() {
                FPS.stop()
            },
        })
    }

    const filterValue = [{ name: 'firstName', operator: 'startsWith', type: 'string', value: '' }]

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Grid
                idProperty="id"
                columns={columns}
                dataSource={data.objects}
                style={{ height: '100%' }}
                pagination={pagination}
                defaultLimit={100}
                defaultFilterValue={filterValue}
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

export default ReactDataGrid
