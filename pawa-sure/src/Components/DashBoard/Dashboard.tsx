import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from '../../assets/images/avatar.svg'

const Dashboard:React.FC = () => {
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
      </div>
    </div>
  )
}

export default Dashboard
