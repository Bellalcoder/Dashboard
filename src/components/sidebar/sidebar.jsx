

/*====================== react icon =================== */
import { MdDashboard } from "react-icons/md";
import { PiUserSwitch } from "react-icons/pi";
import { AiOutlineGift } from "react-icons/ai";
import { BsCalendar3Fill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import {Link} from "react-router-dom";

/*==================== main work file import =========== */
import "../../style/dark.scss"
import "./sidebar.scss"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmode";


const sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <>

    <div className="sidebar-container">
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{textDecoration: "none"}}><h3 className="logo">bellal admin</h3></Link>
        </div>

        <div className="center">
           <ul>
            <li>
              <div className="title"><small>MAIN</small></div>
              <Link to="/" style={{textDecoration: "none"}}>
                <span>
                <MdDashboard className="sidebar-icon"/>
                Dashboard
                </span>
              </Link>
            </li>

            <li>
              <div className="title"><small>USTS</small></div>
              <Link to="/users" style={{textDecoration: "none"}}>
                <span>
                <PiUserSwitch className="sidebar-icon"/>
                Users
                </span>
              </Link>
            </li>

            <li>
              <Link to="/products" style={{textDecoration: "none"}}>
                <span>
                  <AiOutlineGift className="sidebar-icon"/>
                  Product
                </span>
              </Link>
            </li>

            <li>
              <span>
              <BsCalendar3Fill className="sidebar-icon"/>
               Oders
              </span>
            </li>
    
            <li>
              <span>
               <TbTruckDelivery className="sidebar-icon"/>
               Delivery
              </span>
            </li>

            <li>
              <div className="title"><small>USEFUL</small></div>
              <span>
               <BsBarChartLineFill className="sidebar-icon"/>
               Status
              </span>
            </li>

            <li>
              <span>
               <IoIosNotifications className="sidebar-icon"/>
               Notifacation
              </span>
            </li>

            <li>
              <div className="title"><small>SERVICE</small></div>
              <span>
               <MdOutlineSettingsSystemDaydream className="sidebar-icon"/>
               Systame Health
              </span>
            </li>

            <li>
              <span>
               <FaHeadSideVirus className="sidebar-icon"/>
               Logs
              </span>
            </li>

            <li>
              <span>
               <FiSettings className="sidebar-icon" />
               Settings
              </span>
            </li>

            <li>
              <div className="title"><small>USERS</small></div>
              <span>
               <CgProfile className="sidebar-icon"/>
               Profile
              </span>
            </li>

            <li>
              <span>
               <TbLogout className="sidebar-icon"/>
               Logout
              </span>
            </li>
            
           </ul>
        </div>

        <div className="bottom">
          <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
          <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default sidebar