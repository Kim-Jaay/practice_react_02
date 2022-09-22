import React from 'react'
import { Link } from 'react-router-dom'

const Place = () => {
    return (
        <section className="SubPlace Sub">
            <div className="banner">
                <img src={process.env.PUBLIC_URL + '/assets/images/sub_banner_03.png'} alt="" />
                <div className="des">
                    <p>PLACE</p>
                    <h2>From the former palace of the French monarchs<br />
                        to the largest museum in the world</h2>
                </div>
            </div>

            <div className="inner">
                <h2>From Milo <br />
                    to the Louvre</h2>
                <p>모나리자, 사모트라케의 승리의 여신과 함께, 밀로의 비너스는 루브르 박물관에서 가장 유명한 <br />
                    세 여성상 중 하나입니다. 그녀의 이름은 1820년에 발견되어 당시 그리스 주재 프랑스 대사였던<br />
                    리비에르 후작에 의해 거의 즉시 획득된 그리스의 섬 멜로스에서 유래되었습니다. </p>
            </div>
            <div className="Place_ve">
                <img src={process.env.PUBLIC_URL + '/assets/images/sub03_thmb_01.png'} alt="" />
                <div className="sec">
                    <img src={process.env.PUBLIC_URL + '/assets/images/sub03_thmb_02.png'} alt="" />
                    <div className="sec_des">
                        <h3>Aphrodite?</h3>
                        <p>처음 루브르 박물관에 도착했을 때, <br />
                            잃어버린 팔을 회복해야 한다는 의견이 제기되었지만,<br />
                            작품의 성격이 바뀔까 봐 결국 그 생각은 버려졌습니다.</p>
                    </div>
                </div>
                <div className="thrd">
                    <img src={process.env.PUBLIC_URL + '/assets/images/sub03_thmb_03.png'} alt="" />
                    <div className="thrd_des">
                        <h3>Amphitrite?</h3>
                        <p>멜로스 섬에서 숭배되는 바다의 여신 암피트리테인가? <br />
                            아니면 관능적인 반나체 몸에서 <br />
                            짐작할 수 있는 미의 여신 아프로디테인가?</p>
                    </div>
                </div>

            </div>

            <div className="Story">
                <h3>Another possible clue was found near the statue:<br />
                    a hand holding an apple <span>– an attribute of Aphrodite –</span> <br />
                    carved from the same Parian marble.</h3>
                <Link to="/What" >READ MORE</Link>
            </div>
        </section>
    )
}

export default Place
