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
                        <div>(<a href="https://packagel.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" aria-label="pod archive website link - link opens in new tab">live</a>/<a href="https://github.com/package-l/podcast_archive" target="_blank" rel="noopener noreferrer" aria-label="pod archive github code link - link opens in new tab">code</a>)</div> 
                        <br></br>
                        <p>A simple episode-centric website for reviewing and documenting podcast episodes in a social network.
                            The focus of this project is not in the front-end or design, but rather the creation of backend support for a website.
                            The website uses Django and Python to build an API, authenticate users, and perform CRUD operations. To use, please create an account
                            or login using "podface" (username) and "example" (password). Features of the site
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
