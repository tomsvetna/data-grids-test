import { XGrid } from '@material-ui/x-grid'
import React, { useEffect } from 'react'
import { columns } from './columns'

const MuiGrid = ({ data }) => {
    const start = performance.now()
    console.log(start)

    useEffect(() => {
        console.log(performance.now() - start)
    }, [])

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <XGrid
                rows={data.objects}
                columns={columns}
                loading={data.objects.length === 0}
                rowHeight={38}
            />
        </div>
    )
}

export default MuiGrid
