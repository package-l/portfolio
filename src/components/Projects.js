import { Link } from 'react-router-dom'
import icon from '../icons8-ghost-80.png';
import acEmoji from '../img/animalcrossing_emoji-min.png';
import podArch from '../img/podarchive-min.png';
import spaceDraw from '../img/spacedrawing-min.png';

const Projects = () => {
    /*const windowSize = Window();
    var [shadows, setShadows] = useState("")
    var [mousePosition, setMousePosition] = useState({
      left: 0,
      top: 0
    })
  
    function handleMouseMove(eve) {
      setMousePosition({
        left: eve.pageY,
        top: eve.pageX
      });
      calculateShadows(mousePosition.left/windowSize.width, mousePosition.top/windowSize.height, shadows);
    }

    function calculateShadows(calcX, calcY) {

        if(calcX > 0.5) {
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
        }
        
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

         shadows = calcX*5 + "px " + (calcY*5+5) + "px 5px 10px rgba(0,0,0,0.25), ";
         shadows += calcX*10 + "px " + (calcY*10+5) + "px 10px 10px rgba(0,0,0,0.25), ";
         shadows += calcX*20 + "px " + (calcY*20+5) + "px 20px 10px rgba(0,0,0,0.20), ";
         shadows += calcX*35 + "px " + (calcY*35+5) + "px 35px 10px rgba(0,0,0,0.20), ";
         shadows += calcX*50 + "px " + (calcY*50+5) + "px 50px 10px rgba(0,0,0,0.15), ";
         shadows += calcX*65 + "px " + (calcY*65+5) + "px 65px 10px rgba(0,0,0,0.15), ";
         shadows += calcX*80 + "px " + (calcY*80+5) + "px 80px 10px rgba(0,0,0,0.10), ";
         shadows += calcX*100 + "px " + (calcY*100+5) + "px 100px 10px rgba(0,0,0,0.10)";
        
        return setShadows(shadows);
    }*/

    return (
        <div className="Projects">
            <div className="container">
                <div className="row row-cols-auto align-items-start">
                    <div className="col-9"></div>
                    <div className="col-3 ghost_container">
                        <p>look around!</p>
                        <img className="Ghost" src={icon} alt="Ghost Icon" />
                    </div>
                </div>
                <div className="container all_projects">
                    <div className="row row-cols-auto justify-content-center project_row">
                        <div className="col project_column">
                            <div className="container each_project">
                                <Link to='/animalcrossing'>
                                    <img className="projects" src={acEmoji} alt="Animal Crossing" width="300" height="300"/>
                                    <div className="overlay">
                                        <div className="text">A Data Visualization: Animal Crossing New Horizons 2.0</div>
                                        <p>JavaScript, D3.js, Bootstrap, fullPage.js</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col project_column">
                            <div className="container each_project">
                                <Link to='/podarchive'>
                                    <img className="projects" src={podArch} alt="Pod Archive" width="300" height="300"/>
                                    <div className="overlay">
                                        <div className="text">Pod Archive: An episode-centric network space</div>
                                        <p>JavaScript, Python, Django, Bootstrap</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col project_column">
                            <div className="container each_project">
                                <Link to='/spacedrawing'>
                                    <img className="projects" src={spaceDraw} alt="Draw in Space" width="300" height="300"/>
                                    <div className="overlay">
                                        <div className="text">Draw in space.</div>
                                        <p>HTML, CSS, JavaScript</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row pageNav">
                        <Link to='/'>Go Back</Link>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Projects
