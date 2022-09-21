import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: 'EXPLORE', link: '/sub01' },
    { content: 'WHAT’S ON', link: '/sub02' },
    { content: 'THE PLACE', link: '/sub03' },
]

const NavMenu = () => {
    return (
        <>

            <ul>{
                NAVLINK.map((it, idx) => {
                    return (
                        <li>
                            <NavLink to={it.link}>{it.content}</NavLink>
                        </li>
                    )
                })
            }</ul>


        </>
    )
}

export default NavMenu
