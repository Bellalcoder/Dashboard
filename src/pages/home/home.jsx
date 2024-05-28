

import Sidebar from "../../components/sidebar/sidebar.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Widget from "../../components/widget/widget.jsx";
import Feature from "../../components/feature/feature.jsx";
import Chart from "../../components/chart/chart.jsx";
import Table from "../../components/table/table.jsx";

import "../../style/dark.scss";
import "./home.scss";
import "../../components/responsive.scss"
const home = () => {
  return (
   <>

    <div className="home-container">
      <div className="home">
         <Sidebar/>
         <div className="homeContainer">
            <Navbar/>

            <div className="widget">
               <Widget type="user"/>
               <Widget type="order" />
               <Widget type="earning" />
               <Widget type="balance" />
            </div>

            <div className="charts">
               <Feature/>
               <Chart aspect={2/1} title={"Last 6 month user (revinue)"}/>
            </div>

            <div className="list-container">
               <Table/>
            </div>
         </div>
      </div>
    </div>

   </>
  )
}

export default home