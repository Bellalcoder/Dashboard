
import { BiSolidUser } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { MdCurrencyExchange } from "react-icons/md";

import "../../style/dark.scss";
import "./widget.scss";
const widget = ({type}) => {

  let data;

  switch(type){
    case "user":
      data={
        title: "USERS",
        isMoney: "100",
        link: "See all Users",
        icon :  <BiSolidUser 
        style={
          {backgroundColor: " #e40d0d50", padding: '4px', color: " #d60d39e2", width: '25px', height: '25px', borderRadius: '3px', }
        }
        />
      };

      break

      case "order":
      data={
        title: "order",
        isMoney: "100",
        link: "Viwe all users",
        icon :<BsCart2
         style={
          {backgroundColor: " #e4c40d67", padding: '4px', color: " #161403c5", width: '25px', height: '25px', borderRadius: '3px', }
        } 
        />
      };

      break
      
      case "earning":
      data={
        title: "earning",
        isMoney: "$100",
        link: "View  earnigs",
        icon :<MdCurrencyExchange 
         style={
          {backgroundColor: "#50e60a6f", padding: '4px', color: "green", width: '25px', height: '25px', borderRadius: '3px', }
        }
        />
      };

      break

      case "balance":
      data={
        title: "blance",
        isMoney: "$100",
        link: "See all details",
        icon :<MdAccountBalanceWallet 
         style={
          {backgroundColor: " #950de450", padding: '4px', color: " #ae0dd6e1", width: '25px', height: '25px', borderRadius: '3px', }
        }
        />
      };

      break
      default:
      break;
  }

  return (
    <>

    <div className="widget-container">

        <div className="set-widget">
          <div className="items">

            <div className="item">
               <span className="user">{data.title}</span>
               <span className="percentage">
                <MdKeyboardArrowUp className="arrow"/>
                +2%
               </span>
            </div>

            <div className="item">
               <span className="blance">{data.isMoney}</span>
            </div>

            <div className="item">
              <span className="link">{data.link}</span>
              <span className="user-icon">{data.icon}</span>
            </div>

          </div>
        </div>
    </div>
    
    </>
  )
}

export default widget