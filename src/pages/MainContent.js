import React from 'react'

const MainContent = () => {
    return (
        <section className="MainContent">

            <ul className='con'>
                <li>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_thmb_01.png'} alt="" />
                    <h2>Welcome to<br />
                        the Louvre</h2>
                    <p>모나리자, 사모트라케의 날개 달린 승리, 밀로의 비너스, <br />
                        그리고 루브르 박물관의 다른 걸작들을 찾아보세요.</p>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_thmb_02.png'} alt="" />
                    <h2>Everything you need to know<br />
                        before visiting the museum</h2>
                    <p>이번 전시회는 루브르 박물관을 찾은 관람객들이 16세기 전반<br />
                        리스본에서 활동했던 화가들의 우아하고 성취감 있는 예술을 발견할 수 있는 첫 기회입니다.<br />
                        플랑드르와 이탈리아 르네상스의 창조성과 포르투갈 문화의 놀라운 예술을 경험하세요.</p>
                    <a href="">VIEW MORE</a>
                </li>
                <li>
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_thmb_03.png'} alt="" />
                </li>
            </ul>

            <div className="fixed">
                <div className="fix_con">
                    <img src={process.env.PUBLIC_URL + '/assets/images/main_fixed_thmb.png'} alt="" />
                    <div className="des">LOUVRE</div>
                </div>
            </div>
        </section>
    )
}

export default MainContent