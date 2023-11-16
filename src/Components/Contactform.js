import '../Maincss/Form.css';
import { useState } from 'react';
// import {  MdOutlineAccountCircle} from "react-icons/md";


function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}\nThe email you entered was: ${email}\nThe message you entered was: ${message}`);




        
    };

  

    return (
        <div className="contactform">

            <form onSubmit={handleSubmit}>
                <div className="gridform">
                    <div className='name-box mv-one'>
                        <label>
                            <input
                        
                                placeholder=' Name'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>


                    <div className='email-box mv-two'>
                        <label>
                            <input
                                placeholder=' Email'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                </div>


                <div className='message-box mv-three'>
                    <label>
                        <textarea
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <div className="formbtn">
                   <span className='btn-arrow'>
                   {/* <FaArrowRight/> */}
                    </span> <input type="submit" value="Send" />
                     </div>
            </form>
        </div>
    );
}

export default ContactForm;