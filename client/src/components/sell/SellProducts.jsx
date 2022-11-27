import React, { useState } from "react";
import "./sell.css";
import axios from "axios";

const SellProducts = () => {
  const [newProduct, setnewProduct] = useState({
    owner_name: "",
    owner_email: "",
    product_name: "",
    product_category: "",
    product_mrp: "",
    product_price: "",
    product_discount: "",
    product_img: "",
    product_description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("owner_name", newProduct.owner_name);
    formData.append("owner_email", newProduct.owner_email);
    formData.append("product_name", newProduct.product_name);
    formData.append("product_category", newProduct.product_category);
    formData.append("product_mrp", newProduct.product_mrp);
    formData.append("product_price", newProduct.product_price);
    formData.append("product_discount", newProduct.product_discount);
    formData.append("product_img", newProduct.product_img);
    formData.append("product_description", newProduct.product_description);

    axios
      .post("http://localhost:5005/uploadproducts", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("done!");

    console.log(newProduct);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    // console.log(name);
    const value = e.target.value;
    // console.log(value);

    setnewProduct({ ...newProduct, [name]: value });
  };

  const handlePhoto = (e) => {
    setnewProduct({ ...newProduct, product_img: e.target.files[0] });
  };

  // const [selectedFile, setSelectedFile] = useState();
  // const [isFilePicked, setIsFilePicked] = useState(false);

  // const changeHandler = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   setIsFilePicked(true);
  // };

  // const handleSubmission = () => {
  //   console.log(selectedFile);
  // };

  return (
    <div className="sell_form">
      <div className="title_form">
        <h1>
          <strong>Sell Your Products</strong>
        </h1>
      </div>
      <form className="formm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="owner_name">Owner Name:</label>
          <input
            type="text"
            value={newProduct.owner_name}
            onChange={handleInput}
            name="owner_name"
            required
          />
        </div>
        <div>
          <label htmlFor="owner_email">Owner Email:</label>
          <input
            type="text"
            value={newProduct.owner_email}
            onChange={handleInput}
            name="owner_email"
            required
          />
        </div>
        <div>
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            value={newProduct.product_name}
            onChange={handleInput}
            name="product_name"
            required
          />
        </div>

        <div>
          <label htmlFor="product_category">Category:</label>
          <select
            id="product_category"
            value={newProduct.product_category}
            onChange={handleInput}
            name="product_category"
            required
          >
            <option value="Others">Select Category Here</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
            <option value="HouseHold">HouseHold</option>
            <option value="Flats">Flats</option>
            <option value="Projects">Projects</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label htmlFor="product_mrp">Price(MRP):</label>
          <input
            type="text"
            value={newProduct.product_mrp}
            onChange={handleInput}
            name="product_mrp"
            required
          />
        </div>

        <div>
          <label htmlFor="product_price">Actual Price:</label>
          <input
            type="text"
            value={newProduct.product_price}
            onChange={handleInput}
            name="product_price"
            required
          />
        </div>

        <div>
          <label htmlFor="product_discount">Discount(in %):</label>
          <input
            type="text"
            value={newProduct.product_discount}
            onChange={handleInput}
            name="product_discount"
            required
          />
        </div>

        <div>
          <label htmlFor="product_img">Product Image:</label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            // value={newProduct.product_img}
            onChange={handlePhoto}
            name="product_img"
            // required
          />
        </div>
        <div>
          <label htmlFor="product_description">Description:</label>
          <textarea
            type="text"
            value={newProduct.product_description}
            onChange={handleInput}
            name="product_description"
            required
          />
        </div>
        <button className="btn_sell" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default SellProducts;
