import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import '../css/Main.scss'
import { Link } from 'react-router-dom';


const MainIMG = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
]
const MainVisual = () => {
    return (
        <section className="MainVisual">
            <Swiper className='MainSlider'
                loop={true}
                autoplay={{
                    delay: 2500,

                    disableOnInteraction: false,
                }}
                effect={"fade"}
                modules={[Autoplay, EffectFade]}>
                {
                    MainIMG.map((m_i, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <figure>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/slide_0${idx + 1}.png`} alt="" />
                                </figure>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Link to="/explore" >BUY YOUR TICKET</Link>
            <div className="slogan">
                <h2>
                    STEP<br />
                    <span>into</span> THE<br />
                    MUSÉE DE<br />
                    LOUVRE
                </h2>
                <img src={process.env.PUBLIC_URL + '/assets/images/Ellipse.png'} alt="" />

            </div>


        </section>
    )
}

export default MainVisual