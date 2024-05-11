

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "../../style/dark.scss"
import "./table.scss"
const table = () => {


  const rows = [

    {
      id: 13433,
      product: "T-shirt",
      img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
      customer: "Jhon smith",
      date: "4 January",
      amount: 700,
      method: "Cash on Delivery",
      status: "approved",
    },
    {
      id: 14433,
      product: "Laptop ",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      customer: "Mariya ",
      date: "5 February",
      amount: 800,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 17433,
      product: "Desktop",
      img: "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
      customer: "Beyar vop",
      date: "3 Marth",
      amount: 780,
      method: "Cash on Delivery",
      status: "approved",
    },
    {
      id: 19433,
      product: "Mobile phone",
      img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fHww",
      customer: "bellal hosen",
      date: "2 April",
      amount: 775,
      method: "Cash on Delivery",
      status: "Pending",
    },

  ]

  return (
    <TableContainer component={Paper} className='main-table'>
      <Table sx={{ minWidth: 650, }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Products</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody className='table-body'>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row"  className='table-id'>
                {row.id}
              </TableCell>
              <TableCell  className='tableCell'>
                <div className="cell-customer-image">
                  <img src={row.img} alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell  className='tableCell'>{row.customer}</TableCell>
              <TableCell  className='tableCell'>{row.date}</TableCell>
              <TableCell  className='tableCell'>{row.amount}</TableCell>
              <TableCell  className='tableCell'>{row.method}</TableCell>
              <TableCell  className='tableCell'>
                <span  className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default table