


export const userColumns = [
     { 
      
      field: 'id',
      headerName: 'ID', 
      width: 20 ,
      renderCell: (params) => {
         return(
            <div className="cellWidthimg">
               {params.row.id}
            </div>
         )
       },

   
     },

     {

       field:"user", 
       headerName:"User",
       width:160, 
       renderCell: (params) => {
         return(
            <div className="cellWidthimg">
               <img className="cell-img" src={params.row.img} />
               {params.row.username}
            </div>
         )
       },
       
     },
     
     {

      field: "email", 
      headerName: "Email", 
      width: 200,
      renderCell: (params) => {
      return(
         <div className="cellWidthimg">
            {params.row.email}
         </div>
      )
      },
      
     },

     {
       field: "age", 
       headerName: "Age", 
       width: 60,
       renderCell: (params) => {
         return(
            <div className="cellWidthimg">
              {params.row.age}
            </div>
         )
       },
     },
     {
       field: "status", 
       headerName: "status", 
       width: 80,
       renderCell: (params) => {
         return(
            <div className={`cellwidth ${params.row.status}`}>{params.row.status}</div>
         )
       },
     },
]

// temporary data 
export const userRows = [

    {
       id:1,
       username:"shono roy", 
       img:"https://media.istockphoto.com/id/1405243325/photo/happy-and-smiling-man-typing-e-mail-to-his-customer-he-has-online-virtual-meeting-on-laptop.webp?b=1&s=170667a&w=0&k=20&c=f0KBZC2ju5Eo8iaX4MGv98c88jffuAqWwythYak1DUs=",
       status:"pending",
       email:"codermdbellal@gmail.com",
       age:31,
    },

    {
       id:2,
       username:"hemo Jhon",
       img:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww",
       status:"active",
       email:"hemo20@gmail.com",
       age:25,
    },

    {
       id:3,
       username:"menra somith",
       img:"https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
       status:"pending",
       email:"menra22@gmail.com",
       age:19,
    },

    {
       id:4,
       username:"Sonth aria",
       img:"https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
       status:"active",
       email:"sonth200@gmail.com",
       age:22,
    },
    {
       id:5,
       username:"Jhon Smith",
       img:"https://images.unsplash.com/photo-1713549519427-b49b7aadd814?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
       status:"pending",
       email:"jhon990@gmail.com",
       age:26,
    },
    {
       id:6,
       username:"doper hoy",
       img:"https://images.unsplash.com/photo-1714573807782-d1ecd741a9fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
       status:"active",
       email:"doper333@gmail.com",
       age:20,
    },
    {
       id:7,
       username:"doper hoy",
       img:"https://images.unsplash.com/photo-1714573807782-d1ecd741a9fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
       status:"active",
       email:"doper333@gmail.com",
       age:20,
    },
    {
       id:8,
       username:"doper hoy",
       img:"https://images.unsplash.com/photo-1714573807782-d1ecd741a9fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
       status:"active",
       email:"doper333@gmail.com",
       age:20,
    },
    {
       id:9,
       username:"doper hoy",
       img:"https://images.unsplash.com/photo-1714573807782-d1ecd741a9fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
       status:"active",
       email:"doper333@gmail.com",
       age:20,
    },
    {
       id:10,
       username:"doper hoy",
       img:"https://images.unsplash.com/photo-1714573807782-d1ecd741a9fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
       status:"active",
       email:"doper333@gmail.com",
       age:20,
    },
]