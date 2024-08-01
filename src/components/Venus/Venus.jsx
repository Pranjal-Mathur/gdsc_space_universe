import "./Venus.css";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import venus from "../../assets/venus.png";

const Venus = ()=>{
    return(

        <div className="venus-content">
            <div className="venus-desc">
                <div className="venus-head">
                    <p className="t1">2.Venus</p><br/>
                    <p className="t2">Venus is often referred to as Earth's "sister planet" due to its similar size and composition, but it stands out with its extremely inhospitable environment</p>

                </div>
                <br/><br/>
                <div className="venus-cards">


                <div className="card2">

                    <div className="card-logo">
                        <div className="logo-box">
                        <img src={l1}/>
                        </div>
                    </div>
                    <div className="card-desc">
                        <div className="desc-text">
                            <p className="font1"> Distance</p>
                            <p className="font2">7521,<br/>Miles</p>
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
                                <p className="font2">+475&deg;<br/>Celsius</p>
                                </div>
                        </div>



                        </div> 





            </div>
        </div>

            
        <div className="venus-main">
                <img src={venus}/>
            </div>
        </div>

    )
}

export default Venus;