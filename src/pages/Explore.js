import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import { Link } from 'react-router-dom';


const CIRCLE = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
]

const Explore = () => {
    return (
        <section className="Explore Sub">
            <div className="banner">
                <img src={process.env.PUBLIC_URL + '/assets/images/sub_banner_01.jpg'} alt="" />
                <div className="des">
                    <p>EXPLORE</p>
                    <h2>The treasures of the Louvre<br />
                        palace and collections</h2>
                </div>
            </div>

            <div className="circle">
                <Swiper
                    loop={true}
                    slidesPerView={1.5}
                    spaceBetween={20}
                    dir={"rtl"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className='circle_slide'>
                    {
                        CIRCLE.map((cir, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + `/assets/images/sub01_circle_0${idx + 1}.png`} alt="" />
                                    </figure>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="des">
                    <h2>The treasures of the Louvre<br />
                        palace and collections</h2>
                    <p>프랑스 왕들의 옛 궁전을 탐험해 보세요.<br />
                        10,000년의 역사를 지닌 세계에서 가장 큰 박물관입니다.<br />
                        궁전은 리슐리외, 설리, 데논 으로 나뉩니다.</p>
                    <Link to="/What" >VIEW MORE</Link>
                </div>
            </div>

            <div className="Ex_fixed">
            </div>

            <div className="Garden">
                <div className="inner">
                    <h2>A breath of fresh air<br />
                        in the heart of Paris</h2>
                    <p>루브르 사유지에는 카루젤 정원과 튈르리 정원이 모두 포함되어 있습니다. <br />
                        이 역사적인 공원은 가족 모두가 즐길 수 있는 한가로운 산책과 계절별 활동을 위한 <br />
                        아름다운 환경을 제공합니다.</p>
                    <Link to="/What" >EXPLORE NOW</Link>
                    <div className="exe">
                        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_thmb_01.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_thmb_02.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_thmb_03.png'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/images/sub01_thmb_04.png'} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Explore



