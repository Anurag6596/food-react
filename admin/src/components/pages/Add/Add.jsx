import { useState } from "react";
import { assets } from "../../../assets/assets";
import "./Add.css";
import axios from "axios";
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(null);
  const [name, setname] = useState("");
  const [des, setdes] = useState("");
  const [cat, setcat] = useState("");
  const [price, setprice] = useState("");



  // const [data, setData] = useState({
  //   name: "",
  //   description: "",
  //   price: "",
  //   category: "Salad",
  // });

  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("description", des);
    // formData.append("price", Number(price)); // Convert string to number
    // formData.append("category", cat);
    // formData.append("image", image);
console.log(name,des,price,cat)
      const response = await axios.post(`${url}/api/food/add`,{name,description:des,category:cat,price});
      console.log(response.data)
      if (response.data) {
        // setData({
        //   name,
        //   description,
        //   price,
        //   category,
        // });
        // setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error("food validation failed");
      }
     
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              // required
            />
          </label>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={(e)=>setname(e.target.value)}
            // onChange={(e)=>console.log(e.target.value)}

            value={name}
            type="text"
            // name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            // onChange={onChangeHandler}
            onChange={(e)=>setdes(e.target.value)}
            
            name="description"
            rows="6"
            placeholder="Write your description here"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              // onChange={onChangeHandler}
            onChange={(e)=>setcat(e.target.value)}

              value={cat}
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              // onChange={onChangeHandler}
            onChange={(e)=>setprice(e.target.value)}

              value={price}
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
