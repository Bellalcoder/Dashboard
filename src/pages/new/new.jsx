


import Sidebar from "../../components/sidebar/sidebar.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";
import "./new.scss";


const New = ({inputs, userProducts, inputs2, title}) => {

  const [file, setFile] = useState("");

  console.log(file);

  return (
    <div className="new-container">
      <div className="new">
        <Sidebar/>

        <div className="newhome">
          <Navbar/>

          <div className="top">
            <h1>{title}</h1>
          </div>

          <div className="bottom">
             <div className="from">
               <form>
                  
                  <div className="img">
                    <img src={file ? URL.createObjectURL(file) : "/public/image/camera-2935403_1280.png"} alt="" />
                  </div>
                  
                  <div className="input-from-1">
                     <div className="file-upload">
                        <label htmlFor="file"><FaCloudUploadAlt/> :image</label>
                        <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{display: 'none'}} />
                     </div>
                    
                      {
                        inputs2.map((input) => (
                          <div className="inputinfo" key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder} />
                          </div>
                        ))

                      }

                    <div className="button">
                       <button>Send</button>
                    </div>
                  </div>

                  <div className="input-from-2">
                    <div className="input-from">
                      {
                        inputs.map((input) => (
                          <div className="inputinfo" key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.placeholder} />
                          </div>
                        ))
                      }
                    </div>
                  </div>
               </form>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New