import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '42px',
            height: '360px',
            justifyContent: 'space-between',
        }}
    >
        <Link to="/muidatagrid">MuiDataGrid paged</Link>
        <Link to="/muixgrid">MuiXGrid</Link>
        <Link to="/muixgrid-paged">MuiXGrid paged</Link>
        <Link to="/aggrid">AgGrid</Link>
        <Link to="/aggrid-paged">AgGrid paged</Link>
        <Link to="/devextremegrid">DevExtremeGrid</Link>
        <Link to="/devextremegrid-paged">DevExtremeGrid-paged</Link>
        <Link to="/reactdatagrid">ReactDataGrid</Link>
        <Link to="/reactdatagrid-paged">ReactDataGrid-paged</Link>
        <Link to="/results">Results</Link>
    </div>
)

export default Nav
