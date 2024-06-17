import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  // const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fatchList = async () => {
    const respone = await axios.get(`${url}/api/food/list`);
    if (respone.data.success) {
      setList(respone.data.data);
    } else {
      toast.error("ERROR");
    }
  };

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fatchList();
    if (response.data.success) {
      toast.success(response.data.message)
    }else{
      toast.error("ERROR")
    }
  }

  useEffect(() => {
    fatchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="cursor"><b>X</b></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
