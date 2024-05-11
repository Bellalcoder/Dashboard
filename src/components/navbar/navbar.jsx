

import { FaSearch } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { BsFullscreenExit } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";



import "./navbar.scss";
const navbar = () => {
  return (
    <>
      <div className="navbar-container hello">
        <div className="navbar">
           <div className="input-aria">
              <input type="text" placeholder="Seacrch"/>
              <FaSearch className="search"/>
           </div>

           <div className="items">

             <div className="item">
               <BsGlobe/>
               <p>English</p>
             </div>

             <div className="item">
                <BsFullscreenExit />
             </div>

             <div className="item">
               <MdOutlineDarkMode/>
             </div>

             <div className="item">
                <FaRegBell />
                <div className="ntfa">1</div>
             </div>

             <div className="item">
               <MdMessage />
               <div className="ntfa">2</div>
             </div>

             <div className="item">
               <TfiMenuAlt />
             </div>

             <div className="pofile">
                <img src="/public/image/IMG_20230828_171127-removebg-preview.png" alt="ss" />
             </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default navbar