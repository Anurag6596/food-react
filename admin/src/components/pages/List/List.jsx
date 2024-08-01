// import React from 'react'
import { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const List = () => {

  const url = "http://localhost:4000"
  const [list,setList] = useState([]);
  
  const fetchList = async () => {
    const response = await axios(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)
    }
    else
    {
      toast.error("ERROR");
    }
  }
  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list col flex-col'>
      <p>All food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div> 
        {list.map((item,index) => {
          return(
            <div key={index} className="list-table-format"> 
              <img src={`${url}/images`+item.image} alt="" /> 
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className='cursor'>X</p>
            </div>  
          )
        })} 
      </div>
    </div>
  )
}

export default List