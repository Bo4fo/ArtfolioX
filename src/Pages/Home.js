import '../Maincss/Home.css';
import Contactform from '../Components/Contactform';
import { FaFolderOpen, FaForumbee, FaFigma } from "react-icons/fa";
import { PiPlugs } from "react-icons/pi";

function Home() {
    const HomeStyles = {
        fontWeight: 900,
        color: 'white',
        fontSize: 60,
    };

    const handleButtonClick = () => {
        console.log('Connect here!');
    };

    return (
        <div className="home-container">
            <div className="item-container">
                <span className='item-header' style={HomeStyles}>
                    Developing Software Products,User Interfaces and Experience
                </span>
                <div className="small-text">
                    <h4>
                        a Ui & Ux Designer % Front End Developer
                        <p>
                            I specialize in Front end Development, User Interface & Experience Design
                        </p>
                    </h4>

                </div>
                <div className="button">
                    <button className='btn-style' onClick={handleButtonClick}>

                        Connect Here
                    </button>
                </div>
                <div className="small-text-2">
                    <h2>
                        Collaborating with others to create impactful results

                    </h2>

                </div>

                <div className="box-one">
                    <div className="box-inner">
                        <span className='icon icon-large'>
                            <FaFolderOpen />
                          

                        </span>


                        <p>
                            <h3>

                                UI & UX
                            </h3>
                        </p>
                        <div className="inside-text">
                                <span>Adding some magic to your website with this funky Component for figma. Component made by Boafo Philip and friends.
                                </span>
                            </div>
                    </div>
                    <div className="box-inner">
                        <span className='icon icon-large'>
                            <PiPlugs />
                        </span>
                        <p>
                            <h3>
                                Design & Creative
                            </h3>
                        </p>
                        <div className="inside-text">
                                <span>Crafting visually stunning design that connect with your audience.</span>
                            </div>
                    </div>
                    <div className="box-inner">
                        <span className='icon icon-large'>
                            <FaForumbee />
                        </span>
                        <p>
                            <h3>
                                Development
                            </h3>
                        </p>
                          <div className="inside-text">
                                <span>Bringing your vision to life with the latest technology and trends.
                                </span>
                            </div>
                    </div>
                    <div className="box-inner">
                        <span className='icon icon-large'>
                            <FaFigma />
                        </span>
                        <p>
                            <h3>
                                Figma
                            </h3>
                        </p>
                        <div className="inside-text">
                                <span> Crafting exceptional digital experiences with figma.
                                </span>
                            </div>
                    </div>

                </div>
                <div className="header-two">
                    <h3>
                        What is your next Project?
                    </h3>
                </div>
                <div className="contact-form">
                    <Contactform />
                </div>
            </div>



        </div>
    );
}



export default Home;