import Layout from './Layout';
import { getProducts } from './apiCore';
import { useState, useEffect } from 'react';
import Card from './Card';

import React from 'react';

const Shop = () => {
  return (
    <Layout
      title="Shop Page"
      description="Search and find books of your choice"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-4">left sidebar</div>
        <div className="col-8">Right</div>
      </div>
    </Layout>
  );
};

export default Shop;
