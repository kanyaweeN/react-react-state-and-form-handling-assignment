import { useState } from 'react'

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: 0,
    description: "",
    email: "",
  })
  const [error, setError] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    email: "",
  })

  // console.log(JSON.stringify(product));

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let err = {}
    if (!product.name.trim()) {
      err.name = "Name is required.";
    }
    if (!product.image.trim()) {
      err.image = "Image is required.";
    }
    if (!product.price) {
      err.price = "Price is required.";
    }
    if (!product.description.trim()) {
      err.description = "Description is required.";
    }
    if (!product.email.trim()) {
      err.email = "Email is required";
    }
    setError(err);

    if (Object.keys(err).length == 0) {
      alert(JSON.stringify(product))
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        {error.name && <p className="error-message">{error.name}</p>}
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={product.image}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        {error.image && <p className="error-message">{error.image}</p>}
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            // value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        {error.price && <p className="error-message">{error.price}</p>}
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={product.description}
            onChange={(e) => handleInputChange(e)}
            rows={4}
            cols={30}
          />
        </label>
        {error.description && <p className="error-message">{error.description}</p>}
      </div>
      <div className="input-container">
        <label>
          User's email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here"
            value={product.email}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        {error.email && <p className="error-message">{error.email}</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
