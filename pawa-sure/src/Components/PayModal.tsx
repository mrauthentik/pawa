import React, { useState } from 'react';

const PayModal: React.FC = () => {
  const [amount, setAmount] = useState('');

  const formatAmount = (value:string) => {
    const numericValue = value.replace(/,/g, '').replace(/\D/g, '')
    if(!numericValue) return ''
    return parseInt(numericValue,10).toLocaleString()
  }

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setAmount(formatAmount(input))
  }

  return (
    <div className='payModal-container'>
      <h1>Top Up Wallet</h1>

      <form>
        <label>How Much?</label>
        <div className="amount-input">
          <span className="currency">₦</span>
          <input
            type="text"
            inputMode='numeric'
            value={amount}
            onChange={handelChange}
            placeholder="0.00"
          />
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PayModal;
