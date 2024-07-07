import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div className="flex flex-row justify-around items-center py-20 text-xs max-[900px]:flex-col gap-5">
            <div className="footer-text-style">Web3Quant © 2024</div>
            <Link to={"/signup"} className="footer-text-style">Sign Up</Link>
            <Link to={"https://ghost.org/"} className="footer-text-style">Powered by Ghost</Link>
        </div>
        </>
    )
}

export default Footer;