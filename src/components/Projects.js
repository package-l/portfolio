import { Link } from 'react-router-dom'
import icon from '../icons8-ghost-80.png';
import acEmoji from '../img/animalcrossing_emoji-min.png';
import podArch from '../img/podarchive-min.png';
import paindora from '../img/paindora_menu.png';

const Projects = () => {


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
                                <Link to='/paindora'>
                                    <img className="projects paindora" src={paindora} alt="Paindora's Box of Cookie Monsters" width="300" height="300"/>
                                    <div className="overlay">
                                        <div className="text">Paindora's Box of Cookie Monsters</div>
                                        <p>React.js, HTML, CSS, JavaScript</p>
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
                                <Link to='/animalcrossing'>
                                    <img className="projects" src={acEmoji} alt="Animal Crossing" width="300" height="300"/>
                                    <div className="overlay">
                                        <div className="text">A Data Visualization: Animal Crossing New Horizons 2.0</div>
                                        <p>JavaScript, D3.js, Bootstrap, fullPage.js</p>
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
