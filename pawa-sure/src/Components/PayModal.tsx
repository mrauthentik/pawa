import React, { useState } from 'react';

const PayModal: React.FC = () => {
  const [amount, setAmount] = useState('');

  return (
    <div className='payModal-container'>
      <h1>Top Up Wallet</h1>

      <form>
        <label>How Much?</label>
        <div className="amount-input">
          <span className="currency">₦</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PayModal;
