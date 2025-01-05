import React from 'react';
import PriceCard from './components/PriceCard';
import './App.css';

const cardDetails = [
  {
    title: 'FREE',
    price: '$0/month',
    features: [
      { included: true, text: 'Single User' },
      { included: true, text: '50GB Storage' },
      { included: true, text: 'Unlimited Public Projects' },
      { included: true, text: 'Community Access' },
      { included: false, text: 'Unlimited Private Projects' },
      { included: false, text: 'Dedicated Phone Support' },
      { included: false, text: 'Free Subdomain' },
      { included: false, text: 'Monthly Status Reports' },
    ],
  },
  {
    title: 'PLUS',
    price: '$9/month',
    features: [
      { included: true, text: '5 Users' },
      { included: true, text: '50GB Storage' },
      { included: true, text: 'Unlimited Public Projects' },
      { included: true, text: 'Community Access' },
      { included: true, text: 'Unlimited Private Projects' },
      { included: true, text: 'Dedicated Phone Support' },
      { included: true, text: 'Free Subdomain' },
      { included: false, text: 'Monthly Status Reports' },
    ],
  },
  {
    title: 'PRO',
    price: '$49/month',
    features: [
      { included: true, text: 'Unlimited Users' },
      { included: true, text: '50GB Storage' },
      { included: true, text: 'Unlimited Public Projects' },
      { included: true, text: 'Community Access' },
      { included: true, text: 'Unlimited Private Projects' },
      { included: true, text: 'Dedicated Phone Support' },
      { included: true, text: 'Free Subdomain' },
      { included: true, text: 'Monthly Status Reports' },
    ],
  },
];

function App() {
  return (
    <>
      <h2 style={{color:'black',textAlign:'center'}}>PRICE CARD</h2>
      <div className="card-container">
        {cardDetails.map((card, index) => (
          <PriceCard key={index} {...card} />
        ))}
      </div>
    </>
  );
}

export default App;
