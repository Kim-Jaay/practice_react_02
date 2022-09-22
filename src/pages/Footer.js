import React from 'react'

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="top">
                    <h1><a href=""><img src={process.env.PUBLIC_URL + '/assets/images/logo.svg'} alt="" /></a></h1>
                    <ul>
                        <li><a href="/">Legal Notice</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Cookies</a></li>
                        <li><a href="/">Credits</a></li>
                        <li><a href="/">Copyrights</a></li>
                    </ul>
                </div>
                <div className="bot">
                    <ul className='des'>
                        <li><a href="">The Louvre in France and around the world</a> </li>
                        <li><a href="">Private event and film shoots</a> </li>
                        <li><a href="">Give us your Feedback</a> </li>
                    </ul>
                    <ul className="icon">
                        <li><a href=""><i className='xi-facebook'></i></a></li>
                        <li><a href=""><i className='xi-instagram'></i></a></li>
                        <li><a href=""><i className='xi-twitter'></i></a></li>
                        <li><a href=""><i className='xi-youtube-play'></i></a></li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}

export default Footer
