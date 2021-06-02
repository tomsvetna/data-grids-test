import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '42px',
            height: '60px',
            justifyContent: 'space-between',
        }}
    >
        <Link to="/muigrid">MuiGrid</Link>
        <Link to="/aggrid">AgGrid</Link>
    </div>
)

export default Nav
