import Layout from './Layout';
import { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { getCart } from './cartHelpers';

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const showItems = (items) => (
    <div>
      <h2>Your cart has {`${items.length}`} items </h2>
      <hr />
      {items.map((product, i) => (
        <Card key={i} product={product} />
      ))}
    </div>
  );

  const noItemsMessage = () => {
    <h2>
      Your cart is empty. <br />
      <Link to="/shop">Continue Shopping</Link>
    </h2>;
  };

  return (
    <Layout
      title="Shopping Cart"
      description="Manage your cart items. Add, remove, or continue shopping"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-6">
          {items.length > 0 ? showItems(items) : noItemsMessage()}
        </div>
        <div className="col-6">
          <p>
            show checkout options/shipping address/total/update quantity
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;