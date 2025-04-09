import React from 'react'
import bank from '../assets/images/bank.svg'
import card from '../assets/images/atm.svg'    
import gtb from '../assets/images/gtb.svg'

const Payment:React.FC = () =>{
    return (
        <div className='payment-page'>
            <h1>Payment</h1>
            <div className="amount">
                <h2>₦45,000.00</h2>
            </div>
            <hr />

            <p>Your saved cards</p>

            <div className="bank">

            </div>

            <p>other payment methods</p>
            
            <div className="payment-options">
                <div className="card">
                    <div className="block">    
                    <img src="" alt="" />
                    <p>Pay with card</p>
                    </div>
                    <input type="radio" name='card' />
                </div>
                <div className="bank-transfer">
                    <div className="block">
                        <img src="" alt="" />
                        <p>Bank Transfer</p> 
                    </div>
                    <input type="radio" name='card' />
                </div>
            </div>
            
            <button> Pay ₦10,000 </button>
        </div>
    )
}

export default Payment