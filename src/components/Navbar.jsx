import logo from "../assets/MH.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-25" src={logo} alt="" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.instagram.com/mihaelahoaghea_mh/"><FaInstagram/></a>
        <a href="https://www.facebook.com/mihaela.hoaghea.3"><FaFacebook/></a>
        <a href="https://github.com/Miutza94"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mihaela-hoaghea-68b765258/"><FaLinkedin/></a>
    </div>
  </nav>
  
};

export default Navbar;
