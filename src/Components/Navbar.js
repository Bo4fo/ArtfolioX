// import './App'
import "../Maincss/Navbar.css";
import { MdExplore, MdMarkChatUnread } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { FaHive, FaPuzzlePiece, FaBlog, FaPhoneAlt, FaBuffer, FaHatCowboy, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"





const Navbar = () => {
    const styles = {
        fontWeight: 900,
        color: 'white',
        fontSize: 30,

    };


    return (

        <div className="navbar">
            <div className="navbar-header">
                <h3 style={styles}>ArtfolioX</h3>
            </div>


            <div className="nav-items">

                <ul>
                    <li>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>

                        <span className="icon-text">
                            <MdExplore />

                            <span className="text">Explore</span>
                        </span>
                        </Link>

                    </li>

                    <li>
                        <Link to="/Services" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span className="icon-text">
                                <FaHive />
                                <span className="text">Services</span>
                            </span>
                        </Link>


                    </li>


                    <li>
                    <Link to="/Components" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className="icon-text">
                            <FaPuzzlePiece />
                            <span className="text">Components</span>
                        </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className="icon-text">
                            <FaBlog />
                            <span className="text"> Blog </span>
                        </span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className="icon-text">
                            <FaPhoneAlt />
                            <span className="text">Contact</span>
                        </span>
                        </Link>
                    </li>
                </ul>
            </div>


            <div className="nav-Resources">
                <h3>Resources</h3>
                <ul>
                    <li>
                        <span className="icon-text">
                            <IoBookmarks />
                            <span className="text">Favorites </span>
                        </span>
                    </li>

                    <li>
                        <span className="icon-text">
                            <FaBuffer />
                            <span className="text">Projectx</span>
                        </span>
                    </li>
                    <li>
                        <span className="icon-text">
                            <FaHatCowboy />
                            <span className="text">Templates</span>
                        </span>
                    </li>
                </ul>
            </div>

            <div className="nav-Socials">
                <h3>Socials</h3>
                <ul>
                    <li>
                        <span className="icon-text">
                            <FaTwitter />
                            <span className="text">Twitter</span>
                        </span>
                    </li>
                    <li>
                        <span className="icon-text">
                            <MdMarkChatUnread />
                            <span className="text">Read Cvv</span>
                        </span>
                    </li>
                    <li>
                        <span className="icon-text">
                            <FaGithub />
                            <span className="text">Github</span>
                        </span>
                    </li>
                </ul>
            </div>


        </div>
    );
}

export default Navbar;