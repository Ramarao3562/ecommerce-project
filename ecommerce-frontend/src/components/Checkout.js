import React from 'react';

const Checkout = () => {
  const handleCheckout = () => {
    alert('Thank you for your purchase!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCheckout();
      }}>
        <label>
          Full Name:
          <input type="text" required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" required />
        </label>
        <br />
        <label>
          Credit Card:
          <input type="text" required />
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
