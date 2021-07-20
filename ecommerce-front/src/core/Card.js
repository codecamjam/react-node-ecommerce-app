import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';

const Card = ({ product, showViewProductButton = true }) => {
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link className="mr-2" to={`/product/${product._id}`}>
          <button className="btn btn-outline-primary my-2">
            View Product
          </button>
        </Link>
      )
    );
  };

  return (
    <div className="card">
      <div className="card-header">{product.name}</div>
      <div className="card-body">
        <ShowImage item={product} url="product" />
        <p>{product.description.substring(0, 100)}</p>
        <p>${product.price}</p>
        {showViewButton(showViewProductButton)}
        <button className="btn btn-outline-warning my-2">
          Add to card
        </button>
      </div>
    </div>
  );
};

export default Card;
