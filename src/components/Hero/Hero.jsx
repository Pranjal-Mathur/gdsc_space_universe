import "./Hero.css";
import eco from "../../assets/eco.png";
import h1 from '../../assets/h1.png';
import h2 from "../../src/assets/h2.png";
import h3 from "../../src/assets/h3.png";
import h4 from "../../src/assets/h4.png";
import h5 from "../../src/assets/h5.png";
import h6 from "../../src/assets/h6.png";
import h7 from "../../src/assets/h7.png";
import h8 from "../../src/assets/h8.png";

const Hero = ()=>{
    return(
        <div className="hero-content">
            <div className="nav">
                <div className="nav-logo">
                    
                        <img src={eco}/>&nbsp;
                    
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
                    <img className="cover"id="h1"src={h1}/>
                    </div>
                    <div id="h2">
                    <img className="cover"id="h2"src={h2}/>
                    </div>
                    <div id="h3">
                    <img className="cover"id="h3"src={h3}/>
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
                            <img className="cover"id="h4"src={h4}/>
                        </div>
                    </div>

                    <div id="h8">
                        <img src={h8}/>
                    </div>
                    
                    
                </div>





                <div className="hero-right">
                
                <div id="h6">
                    <img className="cover"id="h6"src={h6}/>
                </div>
                <div id="h5">
                    <img className="cover"id="h5"src={h5}/>
                </div>



                </div>
    
        
        



            
        </div>

    </div>
    )

}

export default Hero;