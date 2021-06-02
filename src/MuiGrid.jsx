import { XGrid } from '@material-ui/x-grid'
import React, { useEffect } from 'react'
import data from './data.json'
import { columns } from './columns'

const MuiGrid = () => {
    const rows = data.objects
    console.log('Data loaded')

    const start = performance.now()
    console.log(start)

    useEffect(() => {
        console.log(performance.now() - start)
    }, [])

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <XGrid
                rows={rows}
                columns={columns}
                loading={rows.length === 0}
                rowHeight={38}
                checkboxSelection
            />
        </div>
    )
}

export default MuiGrid
