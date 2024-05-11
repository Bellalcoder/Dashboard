
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Chart from "../../components/chart/chart.jsx";
import Table from "../../components/table/table.jsx";

import "./single.scss";
const single = () => {
  return (
    <div className="single-container">
       <div className="single">
         <Sidebar/>
         <div className="single-menu">
           <Navbar/>
           
           <div className="top-menu">
              <div className="top">
                <div className="top-text">
                  <h2>information</h2>
                  <p>Edit</p>
                </div>

                <div className="imgdice">
                    
                    <div className="image">
                      <img src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>

                    <div className="imgkey">
                      <h2>Jhon Doe</h2>
                      <span>Gmail:Jhondoe22@gmail.com</span>
                      <span>Phone:+ 134523256</span>
                      <span>Address: Tangail Shodor Dhaka </span>
                      <span>Country:Bangladesh </span>
                    </div>
                </div>
              </div>

              <div className="right">
                 <Chart aspect={3/1} title={"user spending (last 6 month )"} />
              </div>
           </div>

            <div className="bottom">
              <div className="title">
                <span>Last Transaction</span>
              </div>
              <Table/>
            </div>
         </div>
       </div>
    </div>
  )
}

export default single;