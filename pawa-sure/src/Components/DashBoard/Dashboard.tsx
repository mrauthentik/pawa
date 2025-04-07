import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Dashboard:React.FC = () => {
  return (
    <div className='dashboard-container'>
      <div className="header">
        <div className="profile">
          <div className="profile-img">

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
