// import React from 'react'
import { useState } from "react";
import { assets } from "../../../assets/assets";
import "./Add.css";
import axios from "axios";

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);

  const [data, Setdata] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    Setdata((data) => ({ ...data, [name]: value }));
  };

  const omnSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new formData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price)); // to convert the string to number
    formData.append("category", data.category);
    formData.append("image", image);

    // now to call api we will use axios

    const response = await axios.post(`${url}/api/food.add`, formData); //this is the endpoint for uploading product

    if (response.data.success) {
      Setdata({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      })
      setImage(false)
      
    } else {
    }
  };

  // to check wether our data is updatedor not

  // useEffect(() => {
  //     console.log(data);
  // },[data])

  return (
    <div className="add">
      <form className="flex-col" onSubmit={omnSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="type here"
          />
        </div>
        <div className="add-product-dicription flex-col">
          <p>Prduct Discription</p>
          <textarea
            onChange={onChangeHandler}
            name="discription"
            rows="6"
            placeholder="Write your description here"
            required
          >
            {" "}
          </textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
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
              onChange={onChangeHandler}
              value={data.price}
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
