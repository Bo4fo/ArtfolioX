import './Maincss/Home.css';

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
                        <p>
                            <h3>
                                UI & UX
                            </h3>
                        </p>
                    </div>
                    <div className="box-inner">
                        <p>
                            <h3>
                                Design & Creative
                            </h3>
                        </p>
                    </div>
                    <div className="box-inner">
                        <p>
                            <h3>
                                Development
                            </h3>
                        </p>
                    </div>
                    <div className="box-inner">
                        <p>
                            <h3>
                                Figma
                            </h3>
                        </p>
                    </div>

                </div>
            </div>



        </div>
    );
}



export default Home;