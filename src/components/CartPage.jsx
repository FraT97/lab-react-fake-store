import  { useEffect, useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/5')
      .then((response) => response.json())
      .then((data) => setCart(data))
      .catch((error) => console.error('Error fetching cart:', error));
  }, []);

  if (!cart) return <p>Loading...</p>;

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.products.map((item) => (
        <p key={item.productId}>Product ID: {item.productId}, Quantity: {item.quantity}</p>
      ))}
    </div>
  );
};

export default CartPage;
