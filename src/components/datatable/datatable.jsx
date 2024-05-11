
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datasource.jsx";
import {Link} from "react-router-dom";
import { useState } from "react";

import "../../style/dark.scss";
const datatable = () => {

  const [data , setData] = useState(userRows); 

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const actionColumn = [
    {

      field: "action",
      headerName: "action",
      width: 130,
      renderCell: (params) => {
        return(
          <>
            <div className="cellaction">
              <Link to="/users/:userId" style={{textDecoration: "none"}}>
                <div className="viewbutton">
                  View
                </div>
              </Link>
              <div className="deletebutton" onClick={() => handleDelete(params.row.id)}>
                Delete
              </div>
            </div>
          </>
          
        )
      }

    }

  ]

  return (
      <div className="datatable">
        <div className="add-new">
          <p>Add New Users</p>
          <Link to="/users/new" style={{textDecoration: "none"}}>
            <button>
              Add
            </button>
          </Link>
        </div> 
        <DataGrid className="data-grid"
          
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 7 },
            },
          }}
          pageSizeOptions={[7, 10]}
          checkboxSelection
        />
      </div>
  )
}

export default datatable
