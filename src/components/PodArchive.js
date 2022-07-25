import { Link } from 'react-router-dom'
import icon from '../icons8-ghost-80.png';
import podArch from '../img/podGIF.gif';

const PodArchive = () => {
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
                <div className="row justify-content-center align-items-center">
                    <div className="col-xs-12 col-s-12 col-md-6 imageContainer">
                        <img className="podImage" src={podArch} alt="Animal Crossing"/>
                    </div>
                    <div className="col-xs-12 col-s-12 col-md-6 projectInfo">
                        <h4><b>POD ARCHIVE</b></h4>
                        <h6><b>AN EPISODE-CENTRIC NETWORK SPACE</b></h6>
                        <div>JavaScript, Python, Django, Bootstrap</div>
                        <div>(<a href="https://podcastarchive.herokuapp.com/" target="_blank" rel="noopener noreferrer">live</a>/<a href="https://github.com/package-l/podcast_archive" target="_blank" rel="noopener noreferrer">code</a>)</div> 
                        <br></br>
                        <p>A simple episode-centric website for reviewing and making custom lists of podcast episodes.
                            The website uses Django and Python to build an API and authenticate users. Features of the site
                            include:
                        </p>
                        <ul>
                            <li>User log-in/registration/authentication</li>
                            <li>Social network system based on follows between users</li>
                            <li>Make custom lists</li>
                            <li>Lists can be public or private</li>
                            <li>Add podcast/episode information to the API</li>
                            <li>Add other user's lists to your watchlist</li>
                        </ul>
                        <p>To use website, please register an account or use username "podface" with password "example".<p>
                    </div>
                </div>
                <div className="row pageNav">
                    <Link to='/projects'>Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default PodArchive
