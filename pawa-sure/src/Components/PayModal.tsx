import React from 'react'

 const PayModal: React.FC = () => {
    return (
        <div className='payModal-container'>
            <h1>Top Up Wallet</h1>

            <form >
                <label>How Much?</label>
                <input type="number" value='₦'/>
                <button>Continue</button>
            </form>
        </div>
    ) 
        
}

export default PayModal