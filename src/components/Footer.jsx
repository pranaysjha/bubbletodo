import PolicyPopup from './PolicyPopup';
import { useState } from 'react';
import '../input.css'

const Footer = () => {

    // function to toggle the visibility of the popup
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <footer id="footer" className="absolute bottom-0 left-0 footer footer-center p-2 text-base-content">
            <div>
                <p className="text-xs text-[#3ABFF8]/25">Copyright © 2022 Ben Garofalo and Pranay Jha</p>
                <a href="#" onClick={() => setShowPopup(true)}>Privacy Policy</a>
            </div>
        </footer>
        { showPopup && <PolicyPopup onClose={() => setShowPopup(false)}></PolicyPopup> }
        </div>
    );
}

export default Footer;