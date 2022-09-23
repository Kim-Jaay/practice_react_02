import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="top">
                    <h1><a href=""><img src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="" /></a></h1>
                    <ul>
                        <li><Link to='/Explore'>Legal Notice</Link ></li>
                        <li><Link to='/What'>Privacy Policy</Link ></li>
                        <li><Link to='/Place'>Cookies</Link ></li>
                        <li><Link to='/Explore'>Credits</Link ></li>
                        <li><Link to='/What'>Copyrights</Link ></li>
                    </ul>
                </div>
                <div className="bot">
                    <ul className='des'>
                        <li><Link to='/Explore'>The Louvre in France and around the world</Link ></li>
                        <li><Link to='/What'>Private event and film shoots</Link ></li>
                        <li><Link to='/Place'>Give us your Feedback</Link ></li>
                    </ul>
                    <ul className="icon">
                        <li><Link to='/Explore'><i className='xi-facebook'></i></Link ></li>
                        <li><Link to='/What'><i className='xi-instagram'></i></Link ></li>
                        <li><Link to='/Place'><i className='xi-twitter'></i></Link ></li>
                        <li><Link to='/What'><i className='xi-youtube-play'></i></Link ></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer
