import React, { useEffect, useRef } from "react"
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";
const Navbar=()=>{ 

  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY >=80 ){
        navRef.current.classList.add('nav-dark');
      }
      else{
        navRef.current.classList.remove('nav-dark');
      }
    })
  },[])

  return (
    <div ref={navRef}  className="Navbar">
      <div className="left-nav">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV-Shows</li>
          <li>New & Popular</li>
          <li>Home</li>
          <li>Web-Series</li>
        </ul>
      </div>
      <div className="right-nav">
        <img src={search} alt="" className="icon" />
        <p className="icon">Children</p>
        <img src={bell} alt="" className="icon" />
        <div className="nav-profile">
          <img src={profile} alt="" className="profile" />
          <img src={caret} alt="" />
          <div className="dropdown">
            <p onClick={logout}>log out from netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
