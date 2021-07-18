import Layout from './Layout';
import { getProducts } from './apiCore';
import { useState, useEffect } from 'react';
import Card from './Card';
import { getCategories } from './apiCore';

import React from 'react';

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState([]);

  // load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Layout
      title="Shop Page"
      description="Search and find books of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">{JSON.stringify(categories)}</div>
        <div className="col-8">Right</div>
      </div>
    </Layout>
  );
};

export default Shop;
