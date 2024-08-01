import "./Mercury.css";
import mercury from "../../assets/mercury.png";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.png";

const Mercury = ()=>{
    return(
        <div className="Mercury-content">
            <div className="mercury-main">
                <img src={mercury}/>
            </div>
            <div className="mercury-desc">
                <div className="mercury-head">
                    <br/>
                <p className="t1">1.Mercury</p>
                <p className="t2">Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.</p>
                </div>
                <br/>
                <div className="card-section1">

                <div className="card2">

                <div className="card-logo">
                    <div className="logo-box">
                    <img src={l1}/>
                    </div>
                </div>
                <div className="card-desc">
                    <div className="desc-text">
                        <p className="font1">Diameter</p>
                        <p className="font2">3,032<br/>Miles</p>
                        </div>
                </div>



            </div>
                    
                    <div className="card2">

                        <div className="card-logo">
                            <div className="logo-box">
                            <img src={l2}/>
                            </div>
                        </div>
                        <div className="card-desc">
                            <div className="desc-text">
                                <p className="font1"> Temperature</p>
                                <p className="font2">+430&deg;<br/>Celsius</p>
                                </div>
                        </div>



                    </div>
                </div>
                <br/>
                <br/>

                <div className="card-section11">

                <div className="card2">

                        <div className="card-logo">
                            <div className="logo-box">
                            <img src={l3}/>
                            </div>
                        </div>
                        <div className="card-desc">
                            <div className="desc-text">
                                <p className="font11"> Night time Temperature</p>
                                <p className="font2">-180&deg; <br/>Celsius</p>
                                </div>
                        </div>



                    </div>

                </div>


            </div>
        </div>




    )
}

export default Mercury;