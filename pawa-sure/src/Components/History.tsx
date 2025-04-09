import React from 'react'
import img from '../assets/images/avatar.svg'

const transactions = [
  { name: 'Shang-Li', time: '3:31pm', amount: '₦5000', type: 'send' },
  { name: 'Marcus', time: '4:10pm', amount: '₦2000', type: 'receive' },
  { name: 'Tina', time: '1:45pm', amount: '₦3500', type: 'send' },
  { name: 'James', time: '5:20pm', amount: '₦1200', type: 'receive' },
  { name: 'Jade', time: '6:00pm', amount: '₦8000', type: 'send' },
];

const TransactionHistory: React.FC = () => {
  return (
    <div className='transaction-history'>
      <div className="header">
        <h2>Transaction History</h2>
        <p>View more</p>
      </div>

      {transactions.map((txn, index) => (
        <div className="display-card" key={index}>
          <div className="details">
            <img src={img} alt="" />
            <div className="text">
              <h2>{txn.name}</h2>
              <p>{txn.time}</p>
            </div>
          </div>
          <div className="amount">
            <h2>{txn.amount}</h2>
            <p>{txn.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
