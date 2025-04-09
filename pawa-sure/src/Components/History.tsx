import React from 'react'
import img from '../assets/images/avatar.svg'

const TransactionHistory:React.FC = () => {
    return(
        <div className='transaction-history'>
            <div className="header">
                <h2>Transaction History</h2>
                <p>View more </p>
            </div>
            <div className="display-card">
                <div className="details">
                    <img src={img} alt="" />
                    <div className="text">
                        <h2>Charles</h2>
                        <p>3:31pm</p>
                    </div>
                </div>
                <div className="amount">
                    <h2>-₦5000</h2>
                    <p>send</p>
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory