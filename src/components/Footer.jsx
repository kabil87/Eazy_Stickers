import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => { 

    return (
        <>

        <footer className=" max-w-3xl mx-auto text-center   mt-10 dark:text-lighter">
            Build with 
            <FontAwesomeIcon icon={faHeart} style={{color:"red"}} /> 
            By Eazy Stickers

        </footer>

        </>
    )
}

export default Footer;