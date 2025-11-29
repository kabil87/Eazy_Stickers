import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => { 9442417800

    return (
        <>

        <footer className="mx-auto w-64 mt-10">
            Build with 
            <FontAwesomeIcon icon={faHeart} style={{color:"red"}} /> 
            By Eazy Stickers

        </footer>

        </>
    )
}

export default Footer;