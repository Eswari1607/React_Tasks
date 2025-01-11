import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, setQuantity, removeItem } from './CartSlice';
import '../App.css'; 

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const shippingCost = 0; 
  const subtotal = totalAmount;

  useEffect(() => {
    const data = [
      { id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple', price: 549, quantity: 1, thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1j6HM9YtkjB76kZyQc7IBN_X76tZrVVbga2rr0tLCTW6BJiZKxJao5128wF97qgtE_HI&usqp=CAU', stock: 94 },
      { id: 2, title: 'iPhone X', description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...', price: 899, quantity: 1, thumbnail: 'https://www.triveniworld.com/cdn/shop/files/apple-iphone-x-256gb-refurbished-triveni-world-1.webp?v=1713391883', stock: 34 },
      { id: 3, title: 'Samsung Universe 9', description: "Samsung's new variant which goes beyond Galaxy to the Universe", price: 1249, quantity: 1, thumbnail: 'https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800', stock: 36 },
      { id: 4, title: 'OPPOF19', description: 'OPPO F19 is officially announced on April 2021.', price: 280, quantity: 1, thumbnail: 'https://oldsold.in/pub/media/catalog/product/cache/105eab600b3fed1b00388dd9e1fb5893/o/p/op116301_74.jpg', stock: 123 },
      { id: 5, title: 'Huawei P30', description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.', price: 499, quantity: 1, thumbnail: 'https://www.gizmochina.com/wp-content/uploads/2019/03/Huawei-P30-600x600.jpg', stock: 32 }
    ];
    dispatch(setCartItems(data));
  }, [dispatch]);

  const handleQuantityChange = (id, quantity) => {
    dispatch(setQuantity({ id, quantity: parseInt(quantity) }));
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="item-thumbnail" />
            <div className="item-details">
              <h2 className="item-title">{item.title}</h2>
              <p className="item-description">{item.description}</p>
            </div>
            <div className="item-actions">
              <div className="item-quantity-price">
                <select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                >
                  {[...Array(item.stock)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <span className="item-amount">₹{item.price * item.quantity}</span>
              </div>
              <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>
                REMOVE
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="summary-item">
          <span>Shipping:</span>
          <span>FREE</span>
        </div>
        <hr className="summary-divider" />
        <div className="summary-item">
          <span>Total:</span>
          <span>₹{subtotal + shippingCost}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
