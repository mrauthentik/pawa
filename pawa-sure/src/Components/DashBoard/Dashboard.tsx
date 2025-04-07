import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from '../../assets/images/avatar.svg'
import img1 from '../../assets/images/blue-bg.png'

const Dashboard:React.FC = () => {
  return (
    <div className='dashboard-container'>
      <div className="header">
        <div className="profile">
          <div className="profile-img">
            <img src={img} alt="" />
          </div>
          <div className="header-text">
            <p>🌻 Good Morning,</p>
            <h2>Charles</h2>
            </div>
        </div>
         <div className="notification">
            <NotificationsIcon className='notification-icon' />
         </div>
      </div>
    </div>
  )
}

export default Dashboard
