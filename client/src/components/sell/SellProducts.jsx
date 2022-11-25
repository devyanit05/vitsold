import React, { useState } from "react";
import "./sell.css";

const SellProducts = () => {
  const [productVal, setProductVal] = useState({
    product_name: "",
    product_category: "",
    product_mrp: "",
    product_price: "",
    product_discount: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    console.log(name);
    const value = e.target.value;
    console.log(value);

    setProductVal({ ...productVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("done!");
    console.log(productVal);
  };

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    console.log(selectedFile);
  };

  return (
    <div className="sell_form">
      <div className="title_form">
        <h1>Sell Your Products</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            value={productVal.product_name}
            onChange={handleInput}
            name="product_name"
            required
          />
        </div>

        <div>
          <label htmlFor="product_category">Category:</label>
          <select
            id="product_category"
            style={{ marginLeft: "10px", height: "2rem" }}
            value={productVal.product_category}
            onChange={handleInput}
            name="product_category"
            required
          >
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
            value={productVal.product_mrp}
            onChange={handleInput}
            name="product_mrp"
            required
          />
        </div>

        <div>
          <label htmlFor="product_price">Actual Price:</label>
          <input
            type="text"
            value={productVal.product_price}
            onChange={handleInput}
            name="product_price"
            required
          />
        </div>

        <div>
          <label htmlFor="product_discount">Discount(in %):</label>
          <input
            type="text"
            value={productVal.product_discount}
            onChange={handleInput}
            name="product_discount"
            required
          />
        </div>

        <div>
          <label htmlFor="product_img">Product Image:</label>
          <input
            type="file"
            accept="image/*"
            value={productVal.product_img}
            onChange={changeHandler}
            name="product_img"
            required
          />
        </div>
        <button type="submit" onClick={handleSubmission}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default SellProducts;
