import React from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className='Header'>
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                    </Link>
                </h1>
                <nav>
                    <NavMenu />
                </nav>
                <ul className="lang">
                    <li><a href="/">EN</a></li>
                    <li><a href="/">FR</a></li>
                    <li><a href="/">KR</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
