import "./Mars.css";

const Mars = ()=>{

    return(

        <div className="mars-content">
           <div className="mars-main">
                 <div className="mars-head">
                    <p className="t1">4.Mars</p><br/>
                    <p className="t2">Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.</p>
                 </div>
                 <div className="mars-block">
                    <div className="mars-image">
                        <img src="../../src/assets/mars.png"/>
                        <div className="arrow2">
                            <img src="../../src/assets/arrow2.png"/>
                        </div>
                       
                    </div>
                    <div className="mars-moons">
                        <div className="mars-block2">
                            <p className="martian">Martian Moons</p>
                            <p>Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.</p>
                        </div>
                    </div>
                 </div>
           </div>
           <div className="mars-desc">
                
                <div className="mars-cards">

                <div className="card3">

                        <div className="card-logo">
                        <div className="logo-box">
                            <img src="../../src/assets/l1.png"/>
                        </div>
                        </div>
                        <div className="card-desc">
                        <div className="desc-text">
                            <p className="font1">Distance</p>
                            <p className="font2">4212,<br/>Miles</p>
                        </div>
                        </div>
                </div> 
                    
                <div className="card3">

                        <div className="card-logo">
                            <div className="logo-box">
                            <img src="../../src/assets/l2.png"/>
                            </div>
                        </div>
                        <div className="card-desc">
                            <div className="desc-text">
                                <p className="font1">Temperature</p>
                                <p className="font2">+20&deg;<br/>Celsius</p>
                            </div>
                    </div>

                </div>


                <div className="card3">

                    <div className="card-logo">
                        <div className="logo-box">
                        <img src="../../src/assets/l3.png"/>
                        </div>
                    </div>
                    <div className="card-desc">
                        <div className="desc-text">
                            <p className="font1">Night time Temperature</p>
                            <p className="font2">-73&deg;<br/>Celsius</p>
                            </div>
                    </div>

                </div>




            </div>




           </div>
        </div>


    )





}

export default Mars;