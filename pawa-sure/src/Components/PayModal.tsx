import React, { useState } from 'react';
import Payment from './Payment';

interface Props {
  onClose: ()=>
}

const PayModal: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [showPayment, setShowPayment] = useState(false)

  const formatAmount = (value:string) => {
    const numericValue = value.replace(/,/g, '').replace(/\D/g, '')
    if(!numericValue) return ''
    return parseInt(numericValue,10).toLocaleString()
  }

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setAmount(formatAmount(input))
  }

  const toggleFullPaymentModal = ()=>{
    setShowPayment(prev => !prev)
  }

  return (
    <div className='payModal-container'>
     {showPayment && <Payment />}
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
        <button onClick={toggleFullPaymentModal}>Continue</button>
      </form>
    </div>
  );
};

export default PayModal;
