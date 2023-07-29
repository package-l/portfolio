//import '../Home.css'
import '../shadows.css';
import icon from '../icons8-ghost-80.png';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Pdf from '../documents/Resume__LouisaGe.pdf';
import Window from './Window';

const Home = () => {
    const windowSize = Window();
    const textRef = useRef();
    const [shadows, setShadows] = useState("");
    const [mousePosition, setMousePosition] = useState({
      left: 0,
      top: 0
    });
  
    function handleMouseMove(eve) {
      /*setMousePosition({
        left: eve.pageY,
        top: eve.pageX
      });*/
      const position = textRef.current.getBoundingClientRect();
      console.log(position);
      setMousePosition({
        left: position.y - eve.pageY,
        top:  position.x - eve.pageX
      });
      console.log(mousePosition);
      calculateShadows(mousePosition.top/windowSize.height, mousePosition.left/windowSize.width);
    }

    function calculateShadows(calcX, calcY) {
      console.log(calcX);
      console.log(calcY);
      let shadows = "";

       /*if(calcX > 0.5) {
          calcX *= -1;
        }
        if(calcY > 0.5) {
          calcY *= -1;
        }
        if(calcX < 0.5) {
          calcX += 1;
        }
        if(calcY < 0.5) {
          calcY += 1;
        }*/
        
        if(calcX > 1) {
            calcX = 1;
         }
         if(calcX < -1) {
            calcX = -1;
         }
         if(calcY > 1) {
            calcY = 1;
         }
         if(calcY < -1) {
            calcY = -1;
         }

         shadows = calcX*15 + "px " + (calcY*35+5) + "px 5px rgba(0,0,0,0.25), ";
         shadows += calcX*20 + "px " + (calcY*40+5) + "px 10px rgba(0,0,0,0.25), ";
         shadows += calcX*30 + "px " + (calcY*50+5) + "px 20px rgba(0,0,0,0.20), ";
         shadows += calcX*45 + "px " + (calcY*65+5) + "px 35px rgba(0,0,0,0.20), ";
         shadows += calcX*60 + "px " + (calcY*80+5) + "px 50px rgba(0,0,0,0.15), ";
         shadows += calcX*75 + "px " + (calcY*95+5) + "px 65px rgba(0,0,0,0.15), ";
         shadows += calcX*90 + "px " + (calcY*110+5) + "px 80px rgba(0,0,0,0.10), ";
         shadows += calcX*110 + "px " + (calcY*130+5) + "px 100px rgba(0,0,0,0.10)";
        
        return setShadows(shadows);
    }

    return (
        <div className="App"
          onMouseMove={(eve) => handleMouseMove(eve)}
          style={{left: mousePosition.left, top: mousePosition.top}}
        >
          <div className="container">
              <div className="row row-cols-auto align-items-start">
                    <div className="col-9"></div>
                    <div className="col-3 ghost_container">
                        <p>welcome!</p>
                        <img className="Ghost" src={icon} alt="Ghost Icon" />
                    </div>
              </div>
              <div className="content-container">
                <div>
                  <div ref={textRef} className="row align-items-start Intro_text" style={{textShadow: shadows}}>Hi, my name is Louisa.</div>
                  <div className="row align-items-start About_text"><p className="About_text"><span className="about">I am a web developer with an art and design background.
                  I enjoy building interactive and visually exciting products.
                  Feel free to look around and take a look at my&nbsp;</span>
                    <Link to="/projects" className="link">PROJECTS</Link>
                    <span className="about">&nbsp;and </span><span className="link"><a href={Pdf} target="_blank" rel="noopener noreferrer" aria-label="resume pdf link - link opens in new tab">EXPERIENCE</a></span>.
                  </p></div>
                </div>
                <div className="row Contact_text">
                    <span><b>CONTACT:</b></span>
                    <span>louisa.shan.ge@gmail.com</span>
                    <span><a href="https://github.com/package-l" target="_blank" rel="noopener noreferrer" aria-label="github profile link - link opens in new tab">GitHub</a></span>
                    <span><a href="https://www.linkedin.com/in/louisa-ge/" target="_blank" rel="noopener noreferrer" aria-label="linkedin profile link - link opens in new tab">LinkedIn</a></span>
                </div>
              </div>
          </div>
        </div>
    )
}

export default Home
