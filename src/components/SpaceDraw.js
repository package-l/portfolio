import { Link } from 'react-router-dom'
import icon from '../icons8-ghost-80.png';
/*import spaceDraw from '../img/spacedrawing.png';*/
import spaceDraw from '../img/spaceGIF.gif';

const SpaceDrawing = () => {
    return (
        <div className="project">
            <div className="container projectContainer">
                <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3 ghost_container">
                            <p>return home?</p>
                            <Link to='/'><img className="Ghost" src={icon} alt="Ghost Icon" /></Link>
                        </div>
                </div>
                <div className="row justify-content-center align-items-center mx-auto">
                    <div className="col-6 imageContainer">
                        <img className="projectImage" src={spaceDraw} alt="Draw in Space"/>
                    </div>
                    <div className="col-6 projectInfo">
                        <h4><b>DRAW IN SPACE</b></h4>
                        <div>HTML, CSS, JavaScript</div>
                        <div>(<a href="https://package-l.github.io/spacedrawing/" target="_blank" rel="noopener noreferrer">live</a>/<a href="https://github.com/package-l/spacedrawing" target="_blank" rel="noopener noreferrer">code</a>)</div> 
                        <br></br>
                        <p>A simple website using canvas where users can draw something and save their white-line 
                            drawing as a png file. 
                        </p>
                    </div>
                </div>
                <div className="row pageNav">
                    <Link to='/projects'>Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default SpaceDrawing
