import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { createProduct } from './apiAdmin';

// import { useState } from 'react';

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  return (
    <Layout
      title="Add a new product"
      description={`G'day ${user.name}, ready to add a new category?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">...</div>
      </div>
    </Layout>
  );
};

export default AddProduct;
