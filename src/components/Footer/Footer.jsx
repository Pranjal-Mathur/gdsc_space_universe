import "./Footer.css";
import eco from "../../assets/eco.png";

const Footer = ()=>{
    return(

        <div className="footer-content">

           <div className="footer-main">
                <div className="desc">
                <p id="font">Join the Education Community</p><br/><br/>
                <p>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
                </div>
                <div className="footer-subscribe">
                    <input type="text" placeholder="Enter your email"></input>
                    <button>Subscribe</button>
                </div>
                <div className="sub-footer">
                    <div className="logo">
                        
                            <img src={eco}/>
                            <p>Galactic.io</p>
                        
                    </div>
                    <div className="items">
                        <p>Mercury</p>
                        <p>Venus</p>
                        <p>Earth</p>
                        <p>Mars</p>
                    </div>
                    <div className="copyright">
                        <p>&copy; 2023Solarsystemdesign</p>
                    </div>
                </div>
           </div>


        </div>



    )
}

export default Footer;