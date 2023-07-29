import { Link } from 'react-router-dom'
import icon from '../icons8-ghost-80.png';
import recording from '../img/paindora_recording.gif';

const Paindora = () => {
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
            <div className="col-xs-12 col-s-12 col-md-6 imageContainer">
                <img className="projectImage" src={recording} alt="Paindora's Box of Cookie Monsters GIF"/>
            </div>
            <div className="col-xs-12 col-s-12 col-md-6 projectInfo">
                <h4><b>PAINDORA'S BOX OF COOKIE MONSTERS</b></h4>
                <div>React.js, HTML, CSS, JavaScript</div>
                <div>(<a href="https://cookiemonsters.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="paindora's box website link - link opens in new tab">live</a>/<a href="https://github.com/package-l/spacedrawing" target="_blank" rel="noopener noreferrer" aria-label="draw in space github code link - link opens in new tab">code</a>)</div> 
                <br></br>
                <p>Made in collaboration with an artist client, Andy Chan, and <i>Fine, Di(n)e w/ Me studios</i>, Paindora's Box
                    of Cookie Monsters is an interactive storytelling website that showcases a variety of
                    designed cookie characters to educate on toxic behavior. The goals of the project include
                    creation/execution of thoughtful interactive user elements, and to create a game-like, engaging website
                    experience for users.

                    Features of the website include:
                    
                </p>
                <ul>
                            <li>Using website cookies to store user's progress through the website.</li>
                            <li>Custom interactive activities on each web page with mouse events and JavaScript</li>
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

export default Paindora