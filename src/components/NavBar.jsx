import React, { useEffect, useRef, useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { VscHome } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { PiHandshakeLight } from "react-icons/pi";
import { LuContact2 } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { BsChatSquareDots } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
const NavBar = () => {
  const menuName = useLocation().pathname;
   const [nav, setNav] = useState('/')
  let headerStyle ='text-sm flex justify-center items-center gap-1 transition-all duration-500  bg-white text-[var(--bg-orange)] rounded-3xl px-3 py-1 group';
  let socials = "transition-all duration-500 px-1 py-1 rounded-3xl hover:bg-white hover:text-[var(--bg-orange)] ";
    useEffect(() => {
      setNav(menuName);
    },[menuName])
  return (
    <div className="w-full min-h-[55px] flex  justify-between transition-all duration-500 items-center  z-10 bg-[var(--bg-orange)] text-[var(--text-color)]">
      <ul className="hidden sm:flex sm:justify-center items-center px-4 py-1 drop-shadow-lg text-white text-lg  ">
        <li>
          <Link to={"/"}  className={nav==="/"?headerStyle:'text-lg'}> <VscHome  size={20} className={nav==="/"?'':'hidden'}  /> Home</Link>
        </li>
        <li>
          <Link to={"/gallery"}  className={nav==="/gallery"?headerStyle:'text-lg'}> <GrGallery  size={15}  className={nav==="/gallery"?'':'hidden'}/> Gallery</Link>
        </li>
        <li>
          <Link to={"/deals"}  className={nav==="/deals"?headerStyle:'text-lg'}> <PiHandshakeLight  size={20} className={`${nav==="/deals"?'':'hidden'}`}/> Deals</Link>
        </li>
        <li>
          <Link to={"/contact"}  className={nav==="/contact"?headerStyle:'text-lg'}><LuContact2 size={20} className={nav==="/contact"?'':'hidden'} /> Contact</Link>
        </li>
      </ul>
      <div className=" flex  justify-between items-center gap-3 px-4">
      <Link to={"www.facebook.com"} target="_blank"  className={socials}><FaFacebookF  /></Link>  
     <Link  to={"www.twitter.com"} target="_blank" className={socials}>  <FaTwitter/> </Link> 
      <Link  to={"www.google.com"} target="_blank" className={socials}>  <FaGooglePlusG /> </Link>
      <Link  to={"www.instagram.com"} target="_blank" className={socials}> <FaInstagram /> </Link> 
      </div>

      <div className="w-full sm:hidden flex justify-center fixed bottom-2 z-50">
        <ul className=" w-full mx-2 h-12 flex justify-between px-1 items-center bg-[var(--bg-orange)] rounded-3xl   text-sm text-white">
          <li>
            <Link
              to={"/"}
              className={nav==="/"?`${headerStyle} px-4 py-2`:''}
            >
              
              <VscHome size={20} />
              <span
                className={nav==="/"?'':'hidden'}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link to={"/gallery"} className={nav==="/gallery"?`${headerStyle} px-4 py-2`:''}>
          
              <GrGallery /> <span className={nav==="/gallery"?"":'hidden'}>Gallery</span>
            </Link>
          </li>
          <li>
            <Link to={"/deals"} className={nav==="/deals"?`${headerStyle} px-4 py-2`:''}>
              
              <PiHandshakeLight size={20} />
              <span className={nav==="/deals"?'':'hidden'}>Deals</span>
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className={nav==='/contact'?`${headerStyle} px-4 py-2`:''}>
              
              <LuContact2 size={20} /> <span className={nav==="/contact"?'':'hidden'} >
                Contact
              </span>
            </Link>
          </li> 
          <li>
            <Link to={"/settings"} className={nav==='/settings'?`${headerStyle} px-4 py-2`:''}>
              
              <IoSettingsOutline  size={20}/> <span className={nav==="/settings"?'':'hidden'} >
                Settings
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
