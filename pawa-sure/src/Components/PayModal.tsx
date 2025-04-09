import React, { useState, useRef,useEffect } from 'react';
import Payment from './Payment';

interface Props {
  onClose: ()=> void;
}

const PayModal: React.FC<Props> = ({onClose}) => {
  const [amount, setAmount] = useState('');
  const [showPayment, setShowPayment] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const formatAmount = (value:string) => {
    const numericValue = value.replace(/,/g, '').replace(/\D/g, '')
    if(!numericValue) return ''
    return parseInt(numericValue,10).toLocaleString()
  }

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setAmount(formatAmount(input))
  }

  const toggleFullPaymentModal = (e: React.FormEvent)=>{
    e.preventDefault()
    setShowPayment(true)
  }

  const handleClickOutside = (e: MouseEvent) =>{
      if(modalRef.current && !modalRef.current.contains(e.target as Node)){
        onClose()
      }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  },[])

  return (
    <>
    {
      showPayment ? (
        <Payment onClose={()=> setShowPayment(false)} amount={amount} />
      ) : (
    
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
          <button onClick={toggleFullPaymentModal}>Continue</button>
        </form>
      </div>
    )
  }
    </>
  );
};

export default PayModal;
