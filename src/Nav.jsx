import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '42px',
            height: '140px',
            justifyContent: 'space-between',
        }}
    >
        <Link to="/muigrid">MuiGrid</Link>
        <Link to="/muigrid-paged">MuiGrid paged</Link>
        <Link to="/aggrid">AgGrid</Link>
        <Link to="/aggrid-paged">AgGrid paged</Link>
        <Link to="/results">Results</Link>
    </div>
)

export default Nav
