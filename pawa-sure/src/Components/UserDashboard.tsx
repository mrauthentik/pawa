import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from '../assets/images/avatar.svg'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import img1 from '../assets/images/plug.svg'
import img2 from '../assets/images/thunder.svg'
import img3 from '../assets/images/meter-usage-icon.svg'

const UserDashboard:React.FC = () => {
const [showBalance, setShowBalance] = React.useState(false)

const toggleBalance = () => {
  setShowBalance(prev => !prev)
}

  return (
    <div className='dashboard-container'>
      <div className="header">
        <div className="profile">
          <div className="profile-img">
            <img src={img} alt="" />
          </div>
          <div className="header-text">
            <h2>🌻 Good Morning,</h2>
            <p>Charles</p>
          </div>
        </div>
         <div className="notification">
            <NotificationsIcon className='notification-icon' />
         </div>
      </div>

      <div className="money-field">
        <p>Wallet Balance</p>
        
        {showBalance ? (
          <Visibility className='show-money-icon' onClick={toggleBalance} style={{cursor:"pointer"}} />
        ):(
          <VisibilityOff className='show-money-icon' onClick={toggleBalance} style={{cursor:'pointer'}} />
        )}

        <h1>{showBalance ? '₦45,000' : '******'}</h1>

      </div>

      <div className="dashboard-cards">
        <div className='card-1'>
          <img src={img2} alt="" />
          <p>Pay for Light</p>
        </div>
        <div className='card-2'>
          <img src={img1} alt="" />
          <p>Add new Meter</p>
        </div>
      </div>
      <div className="meter-usage">
        
        <div className="block">
          <img src={img3} alt="" />
          <div className="text">
            <p>Meter Usage</p>
            <h2>Osaporo Estate and Housing</h2>
          </div>
        </div>
       
       <div className="leveler">
        <div className="range"> <p>50%</p></div>
       </div>
        <div className="watt-text">
          <p>0kWh</p>
          <p>300kWh</p>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
