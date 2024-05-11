

/*============= progress bar ====================== */
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
/*=============== react icon ============== */
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


import "./feature.scss";
const feature = () => {

  const percentage = 66;

  return (
    <>
    <div className="feature">
      <div className="top">
          <h2>Total Revenue</h2>
          <CiMenuKebab />
      </div>
      <div className="bottom">
         <div className="feature-cart">
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} />
         </div>
         <div className="total">
            <h3>Total salse mode today </h3>
            <span>$ 420</span>
         </div>
      </div>
      <div className="preview">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque explicabo</p>
      </div>

      <div className="target">

        <div className="target-item">
           <span>Target</span>
           <div className='revinue'><IoIosArrowDown /> $12k</div>
        </div>

        <div className="target-item">
           <span>Last Week</span>
           <div className='revinue positive'><IoIosArrowUp /> $12k</div>
        </div>

        <div className="target-item">
           <span>Last Month</span>
           <div className='revinue negative'> <IoIosArrowUp /> $12k</div>
        </div>

      </div>
    </div>
    </>
  )
}

export default feature