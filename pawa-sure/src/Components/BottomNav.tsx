import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SettingsIcon from '@mui/icons-material/Settings';

const BottomNav: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <div className='bottom-nav' >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
          
        }}
    
      >
        <BottomNavigationAction className='bottom-btn' label="Home" icon={<HomeIcon className='bottom-icon' />} />
        <BottomNavigationAction label="Analytics" icon={<AnalyticsIcon  className='bottom-icon'/>} />
        <BottomNavigationAction label="Transactions" icon={<ReceiptLongIcon className='bottom-icon'/>} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon className='bottom-icon'/>} />
      </BottomNavigation>
    </div>
  );
};

export default BottomNav;
