import {
    FilteringState,
    IntegratedFiltering,
    IntegratedPaging,
    IntegratedSorting,
    PagingState,
    SortingState,
} from '@devexpress/dx-react-grid'
import {
    Grid,
    TableFilterRow,
    TableHeaderRow,
    VirtualTable,
    PagingPanel,
} from '@devexpress/dx-react-grid-material-ui'
import React, { useEffect } from 'react'
import { columns } from './devExtremeColumns'
import { FPS, Scroller } from './utils.js'

const DevExtremeGrid = ({ data, pagination }) => {
    const start = performance.now()

    useEffect(() => {
        console.log('DevExtremeGrid loaded in', performance.now() - start, 'ms')
    }, [])

    const performScrollTest = () => {
        FPS.start()
        Scroller.scroll({
            element: document.querySelector('.TableContainer-root-2'),
            callback() {
                FPS.stop()
            },
        })
    }

    const getRowId = row => row.id
    const Root = props => <Grid.Root {...props} style={{ height: '100%' }} />

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            <Grid rows={data.objects} columns={columns} getRowId={getRowId} rootComponent={Root}>
                <FilteringState defaultFilters={[]} />
                <IntegratedFiltering />
                <SortingState />
                <IntegratedSorting />
                <VirtualTable height="auto" />
                <TableHeaderRow showSortingControls />
                <TableFilterRow />
                {pagination && <PagingState defaultCurrentPage={0} pageSize={100} />}
                {pagination && <IntegratedPaging />}
                {pagination && <PagingPanel />}
            </Grid>
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

export default DevExtremeGrid
