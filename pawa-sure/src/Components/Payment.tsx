import React from 'react'
import bank from '../assets/images/bank.svg'
import card from '../assets/images/atm.svg'    
import gtb from '../assets/images/gtb.svg'
import { Cancel } from '@mui/icons-material'


interface Props {
    onClose: () => void;
    amount:string
}

const Payment:React.FC<Props> = ({onClose, amount}) =>{
    return (
        <div className='payment-page'>
            <Cancel className='cancel-icon' onClick={onClose} />
            <h1>Payment</h1>
            <div className="amount">
                <h2>₦{amount}</h2>
            </div>
            <hr />

            <p>Your saved cards</p>

            <div className="bank">
                <img src={gtb} alt="" />
                <div className="text">
                    <h3>Guaranty Trust Bank</h3>
                    <p>Michael Stones Junior</p>
                </div>
            </div>

            <p>other payment methods</p>
            
            <div className="payment-options">
                <div className="card">
                    <div className="block">    
                    <img src={card} alt="" />
                    <p>Pay with card</p>
                    </div>
                    <input type="radio" name='card' />
                </div>
                <div className="bank-transfer">
                    <div className="block">
                        <img src={bank} alt="" />
                        <p>Bank Transfer</p> 
                    </div>
                    <input type="radio" name='card' />
                </div>
            </div>
            
            <button> Pay ₦{amount} </button>
        </div>
    )
}

export default Payment