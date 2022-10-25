import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/css';


const PLACE = [
    { id: '1', title: 'Sun, Gold and Diamonds', con: '루이 14세는 태양신 아폴로와 자신을 동일시한 것으로 유명하며, \n 이 화려한 갤러리는 그 이미지를 처음으로 시각적으로 표현되어있습니다.', link: '/explore' },
    { id: '2', title: 'Welcome to the Louvre', con: '모나리자의 수수께끼 같은 미소는 오랜세월 동안 관객들을 매료시켰으며,\n 프랑스 혁명 이후 루브르 박물관에 전시된 작품 중 가장 유명한 작품입니다.', link: '/what' },
    { id: '3', title: 'A Stairway to Victory', con: '루브르 박물관에서 가장 유명한 조각상 중 하나인 \n 사모트라케의날개 달린 승리는 기념비적인 계단의 꼭대기를 장식한다. ', link: '/place' },
]

const MainContent = () => {
    return (
        <section className="MainContent">

            <ul className='con'>
                <li>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_thmb_01.jpg'} alt="" />
                    <h2>Welcome to<br />
                        the Louvre</h2>
                    <p>모나리자, 사모트라케의 날개 달린 승리, 밀로의 비너스, <br />
                        그리고 루브르 박물관의 다른 걸작들을 찾아보세요.</p>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_thmb_02.jpg'} alt="" />
                    <h2>Everything you need to know<br />
                        before visiting the museum</h2>
                    <p>이번 전시회는 루브르 박물관을 찾은 관람객들이 16세기 전반<br />
                        리스본에서 활동했던 화가들의 우아하고 성취감 있는 예술을 발견할 수 있는 첫 기회입니다.<br />
                        플랑드르와 이탈리아 르네상스의 창조성과 포르투갈 문화의 놀라운 예술을 경험하세요.</p>
                    <Link to="/Explore" >VIEW MORE</Link>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_thmb_03.jpg'} alt="" />
                </li>
            </ul>

            <div className="fixed">
                <div className="fix_con">
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_fixed_thmb.png'} alt="" />
                    <div className="des">LOUVRE</div>
                </div>
            </div>

            <div className="Place">
                <h2>The Place</h2>
                <p>모나리자, 사모트라케의 날개 달린 승리, 밀로의 비너스,<br />
                    그리고 루브르 박물관의 다른 걸작들을 찾아보세요.</p>
                <Swiper
                    loop={true}
                    slidesPerView={2.5}
                    spaceBetween={20}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}>
                    {
                        PLACE.map((place, idx) => {
                            return (
                                <SwiperSlide>
                                    <Link to={place.link}>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + `/assets/images/main_place_0${idx + 1}.jpg`} alt="" />

                                            <div className="des">
                                                <h2>{place.title}</h2>
                                                <p>{place.con}</p>
                                            </div>

                                        </figure>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>


            </div>
        </section >
    )
}

export default MainContent