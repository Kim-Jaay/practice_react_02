import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";


const Btn = styled.div`
    position: fixed;
    bottom: 100px;
    right:100px;
    color: white;
    background: rgba(0,0,0,0.5);
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    visibility:hidden;
    opacity:0;
    cursor: pointer;
    transition: 0.5s;
    z-index:15;
  
    &.on {
        visibility:visible;
        opacity:1;
    }
`

const Top = () => {
    const [scrollY, setScrollY] = useState(0);
    const totopHandler = () => {
        gsap.to(window, { duration: 0.5, scrollTo: 0 });
    }

    const scrllEvent = () => {
        let scy = window.scrollY;
        setScrollY(scy)
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrllEvent);
        return () => {
            window.removeEventListener('scroll', scrllEvent);
        }
    }, [])
    return (
        <Btn onClick={totopHandler} className={scrollY > 400 && 'on'}>
            <i className='xi-arrow-top'></i>
        </Btn>
    )
}

export default Top