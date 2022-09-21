import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header>
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/main_place_01.png'} alt="" />
                    </Link>
                </h1>
                <nav>
                    <NavMenu />
                </nav>
            </div>
        </header>
    )
}

export default Header
