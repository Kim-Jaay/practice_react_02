import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: 'EXPLORE', link: '/explore' },
    { content: 'WHAT’S ON', link: '/what' },
    { content: 'THE PLACE', link: '/place' },
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
