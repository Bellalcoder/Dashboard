

import Sidebar from "../../components/sidebar/sidebar.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Datatable from "../../components/datatable/datatable.jsx";


import "./list.scss";
const list = () => {
  return (
    <>

    <div className="main-list">
      <div className="list">
        <Sidebar/>

        <div className="list-container">
           <Navbar/>
           <div className="datatable">
             <Datatable/>
           </div>
        </div>
      </div>
    </div>
   
    
    
    </>
  )
}

export default list