import { Link } from 'react-router-dom'
import icon from '../icons8-ghost-80.png';
import emojiGIF from '../img/Hnet-image (1).gif';

const AnimalCrossing = () => {
    return (
        <div className="project">
            <div className="container projectContainer">
                <div className="row row-cols-auto align-items-start">
                <div className="col-9"></div>
                        <div className="col-3 ghost_container">
                            <p>return home?</p>
                            <Link to='/'><img className="Ghost" src={icon} alt="Ghost Icon" /></Link>
                        </div>
                </div>
                <div className="row">
                    <div className="col-6 imageContainer">
                        <img className="projectImage" src={emojiGIF} alt="Animal Crossing"/>
                    </div>
                    <div className="col-6 projectInfo">
                        <h4><b>A DATA VISUALIZATION:</b></h4>
                        <h6><b>ANIMAL CROSSING NEW HORIZONS 2.0</b></h6>
                        <div>React, D3.js, JavaScript, Bootstrap</div>
                        <div>(<a href="https://package-l.github.io/animal_crossing_edit2/" target="_blank" rel="noopener noreferrer">live</a>/<a href="https://github.com/package-l/animal_crossing_edit2" target="_blank" rel="noopener noreferrer">code</a>)</div> 
                        <br></br>
                        <p>A collaborative project tracing the activity and social media data of 
                        the Animal Crossing community on Twitter around the time of the 2.0 game update.
                        Using data scraped from the Twitter API, our team wanted to see what trends were present
                        in the community by looking at tweet density, word frequency, etc. 
                        </p>
                        <p>My contributions include the pictured emoji visualization.</p>
                        <p>Team members: <br></br>Louisa Ge, Minkuan Chen, Daniel Schwartz, and Ryan Buehler</p>
                    </div>
                </div>
                <div className="row pageNav">
                    <Link to='/projects'>Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default AnimalCrossing
