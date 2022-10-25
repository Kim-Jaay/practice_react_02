import React from 'react'
import { Link } from 'react-router-dom'

const What = () => {
    return (
        <section className="What Sub">
            <div className="banner">
                <img src={process.env.PUBLIC_URL + '/assets/images/sub_banner_02.jpg'} alt="" />
                <div className="des">
                    <p>WHAT’S ON</p>
                    <h2>Each season, the Louvre showcases<br />
                        the latest research by experts and scholars.</h2>
                </div>
            </div>
            <div className="Exhibit">
                <div className="inner">
                    <h2>Exhibition</h2>
                    <p>공식 가이드와 함께 박물관을 둘러보세요. 여러분이 처음 방문하든 루브르 단골이든,<br />
                        다양한 주제를 다루는 다양한 투어를 가진 모든 사람들을 위해 준비되어있습니다.</p>

                    <div className="itm01">
                        <Link to="/Place">
                            <img src={process.env.PUBLIC_URL + '/assets/images/sub02_thmb_01.png'} alt="" />
                            <div className="des_">
                                <h2>16TH-CENTURY BOLOGNESE<br />
                                    DRAWINGS IN THE LOUVRE COLLECTIONS</h2>
                                <p>22 September 2022 – 16 January 2023</p>
                                <span>이 전시회는 루브르 박물관의 16세기 볼로냐 그림들에 <br />
                                    전념한 발명가 데신 이탈리엔스 12권의 출판과 함께 진행됩니다.</span>
                            </div>
                        </Link>
                    </div>

                    <div className="thmb">
                        <Link to="/Place" className='itm'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/sub02_thmb_02.png'} alt="" />
                            <div className="des">
                                <h2>A History of Still Lifes</h2>
                                <p>12 October 2022 – 23 January 2023</p>
                                <span>선사 시대로 거슬러 올라가는 사물에 대한 묘사는 역사에 대한 멋진 결과입니다.<br />
                                    예술가들은 그들의 존재를 인식하고, 그들에게 생명을 불어넣고, 그들의 형태와 의미,<br />
                                    그들의 힘과 매력을 미화함으로써 사물을 진지하게 받아들였습니다. </span>
                            </div>
                        </Link>
                        <Link to="/Place" className='itm'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/sub02_thmb_03.png'} alt="" />
                            <div className="des">
                                <h2>Delacroix and colour</h2>
                                <p>13 July - 31 December 2022</p>
                                <span>동양의 빨강과 황토에서 프로이센의 파랑과 코발트 그린에 이르기까지, <br />
                                    판화의 흑백으로, 그의 집과 창작 장소에 전시된 화가의 주제별 작품 선택에서 <br />
                                    들라크루아의 팔레트를 탐험할 수 있는 기회입니다.</span>
                            </div>
                        </Link>

                    </div>
                    <div className="buy">     <Link to="/Explore" >BUY YOUR TICKET</Link></div>

                </div>
            </div>
        </section>
    )
}

export default What
