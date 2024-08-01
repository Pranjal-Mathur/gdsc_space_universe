import "./Hero.css";

const Hero = ()=>{
    return(
        <div className="hero-content">
            <div className="nav">
                <div className="nav-logo">
                    
                        <img src="../../src/assets/eco.png"/>&nbsp;
                    
                    <p id="Galactic">Galactic.io</p>
                </div>

                <div className="nav-items">
                    <p>Mercury</p>
                    <p>Venus</p>
                    <p>Earth</p>
                    <p>Mars</p>
                    <p className = "icon">...</p>
                </div>

                <div className="nav-copyright">
                    <p>&copy;2023Solarsystemdesign</p>
                </div>
            </div>



            <div className="hero-desc">
                <div className="hero-left">

                
                    <div id="h1">
                    <img className="cover"id="h1"src="../../src/assets/h1.png"/>
                    </div>
                    <div id="h2">
                    <img className="cover"id="h2"src="../../src/assets/h2.png"/>
                    </div>
                    <div id="h3">
                    <img className="cover"id="h3"src="../../src/assets/h3.png"/>
                    </div>
                </div>




                <div className="hero-center">
                   
                    <div className="head-box">
                    <p id="hero-head">Let's Get To Know<br/> Our Solar System<br/> Galaxy </p><br/><br/>
                    <p id="head-para">Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the <br/>cosmos and the planets weaving stories of their timeless existence.
                    </p>
                    </div>
                    
                    <div className="head-box2">
                        <button >Learn More &#9660;</button>
                        <div id="h4">
                            <img className="cover"id="h4"src="../../src/assets/h4.png"/>
                        </div>
                    </div>

                    <div id="h8">
                        <img src="../../src/assets/h8.png"/>
                    </div>
                    
                    
                </div>





                <div className="hero-right">
                
                <div id="h6">
                    <img className="cover"id="h6"src="../../src/assets/h6.png"/>
                </div>
                <div id="h5">
                    <img className="cover"id="h5"src="../../src/assets/h5.png"/>
                </div>



                </div>
    
        
        



            
        </div>

    </div>
    )

}

export default Hero;