

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./chart.scss";
const chart = ({aspect, title}) => {

const data = [
  {
    name: 'January',
    Total: 2000
  },
  {
    name: 'February',
    Total: 1200
  },
  {
    name: 'March',
    Total: 2500
  },
  {
     name: 'April',
    Total: 1000
  },
  {
    name: 'May',
    Total: 2000
  },
  {
    name: 'June',
    Total: 1800
  },
  
];

  return (
    <>
     <div className="chart">

      <div className="title">
        <span>{title}</span>
      </div>

      <ResponsiveContainer width="105%" aspect={aspect} className="grap-chart">
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
      
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#150bd8" fillOpacity={1} fill="url(#Total)" />
        </AreaChart>
      </ResponsiveContainer>

     </div>
    </>
  )
}

export default chart