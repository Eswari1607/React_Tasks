import React from 'react';

const PriceCard = ({ title, price, features }) => (
  <div className="card">
    <h2>{title}</h2>
    <h3>{price}</h3>
    <ul style={{textAlign:'left'}}>
      {features.map((feature, index) => (
        <li key={index} className={feature.included ? 'included' :'not-included'}>
          {feature.included ? '✓' : '✗'} {feature.text}
        </li>
      ))}
    </ul>
    <button>BUTTON</button>
  </div>
);

export default PriceCard;
