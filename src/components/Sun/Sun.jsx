import "./Sun.css"



const Sun = ()=>{

    return(
        

        <div className="sun-content">
            <div className="sun-main">
                    <img src="../../src/assets/sun.png"/>
            </div>
            <div className="sun-desc">
                <div className="sun-head">
                    <p className="t1">.Sun</p>
                    <br/>
                    <p className="t2">The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.</p>    
                </div>
                <div className="card-section">
                     <div className="card1">
                        <div className="card-logo">
                            <div className="logo-box">
                                <img src="../../src/assets/l1.png"/>
                            </div>
                        </div>
                        <div className="card-desc">
                        <div className="desc-text">
                            <p className="font1"> Distance</p>
                            <p className="font2">870000,<br/>Miles</p>
                        </div>
                        </div>
                    </div> 
                    
                    <div className="card1">

                        <div className="card-logo">
                            <div className="logo-box">
                            <img src="../../src/assets/l2.png"/>
                            </div>
                        </div>
                        <div className="card-desc">
                            <div className="desc-text">
                                <p className="font1">Temperature</p>
                                <p className="font2">+5500&deg;<br/>Celsius</p>
                                </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    
    )


}

export default Sun;