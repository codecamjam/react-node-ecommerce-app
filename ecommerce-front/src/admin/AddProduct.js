import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { createProduct } from './apiAdmin';

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: '',
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    /*eslint-disable */
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
  };

  const newPostForm = () => (
    <form onSubmit={clickSubmit} className="mb-3">
      <h4>Post Photo</h4>
      <div className="form-group">
        <label htmlFor="" className="btn btn-secondary">
          <input
            type="file"
            onChange={handleChange('photo')}
            name="photo"
            accept="image/*"
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange('name')}
          value={name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Description
        </label>
        <textarea
          className="form-control"
          onChange={handleChange('description')}
          value={description}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Price
        </label>
        <input
          className="form-control"
          type="number"
          onChange={handleChange('price')}
          value={price}
        />
      </div>
      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Category
        </label>
        <select
          className="form-control"
          onChange={handleChange('category')}
        >
          <option value="60f38fd858421dcbe70e8f4e">Python</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Shipping
        </label>
        <select
          className="form-control"
          onChange={handleChange('shipping')}
        >
          <option value="0">No</option>
          <option value="1">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="" className="text-muted">
          Quantity
        </label>
        <input
          className="form-control"
          type="number"
          onChange={handleChange('quantity')}
          value={quantity}
        />
      </div>

      <button className="btn btn-outline-primary">Create Product</button>
    </form>
  );

  return (
    <Layout
      title="Add a new product"
      description={`G'day ${user.name}, ready to add a new category?`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
      </div>
    </Layout>
  );
};

export default AddProduct;
