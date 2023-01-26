import '../input.css'

const Footer = () => {

    return (
        <div>
            <footer id="footer" className="absolute bottom-0 left-0 footer footer-center p-2 text-base-content">
                <div className="inline-block">
                    <p className="text-xs text-[#3ABFF8]/25 inline-block mx-2">Copyright © 2023 Ben Garofalo and Pranay Jha</p>
                    <a className="text-xs text-[#3ABFF8]/25 underline inline-block" href="privacypolicy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;