import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { content: 'EXPLORE', link: '/Explore' },
    { content: 'WHAT’S ON', link: '/What' },
    { content: 'THE PLACE', link: '/Place' },
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
