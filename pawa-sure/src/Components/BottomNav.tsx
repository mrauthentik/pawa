import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        onChange={(_, newValue) => setValue(newValue)}
        sx={{
            backgroundColor: "#fff",
           
          }}
    
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon className='bottom-icon' />}
        sx={{
            color: value === 0 ? '#dddd' : "#474747",
            '&.Mui-selected': {
              color: '#FFC107',
            },
            '& .MuiSvgIcon-root':{
                fontSize: '1.9rem'
            },
            '&:hover':{
                backgroundColor: 'transparent',
            },
            '&.MuiBottomNavigationAction-label': {
              fontSize: '52px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: value === 0 ? '600' : '400',
              
            },
        }}
        />
        <BottomNavigationAction label="Analytics" icon={<AnalyticsIcon  className='bottom-icon'/>}
          sx={{
            color: value === 0 ? '#dddd' : "#474747",
            '&.Mui-selected': {
              color: '#FFC107',
            },
            '& .MuiSvgIcon-root':{
                fontSize: '1.9rem'
            },
            '&:hover':{
                backgroundColor: 'transparent',
            },
            '&.MuiBottomNavigationAction-label': {
              fontSize: '52px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: value === 0 ? '600' : '400',
              
            },
        }}
        />
        <BottomNavigationAction label="Transactions" icon={<ReceiptLongIcon className='bottom-icon'/>}
         sx={{
            color: value === 0 ? '#dddd' : "#474747",
            '&.Mui-selected': {
              color: '#FFC107',
            },
            '& .MuiSvgIcon-root':{
                fontSize: '1.9rem'
            },
            '&:hover':{
                backgroundColor: 'transparent',
            },
            '&.MuiBottomNavigationAction-label': {
              fontSize: '52px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: value === 0 ? '600' : '400',
              
            },
        }}
        />
         <Link to='/settings'>
            <BottomNavigationAction label="Settings" icon={<SettingsIcon className='bottom-icon'/>} 
            sx={{
                color: value === 0 ? '#474747' : "#474747",
                
                '&.Mui-selected': {
                  color: '#FFC107',
                },
                '&:hover':{
                    backgroundColor: 'transparent',
                },
                '& .MuiSvgIcon-root':{
                    fontSize: '1.9rem'
                },
                '&.MuiBottomNavigationAction-label': {
                  fontSize: '52px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: value === 0 ? '600' : '400',
                  
                },
            }}
            />
          </Link>
       </BottomNavigation>
       
    </div>
  );
};

export default BottomNav;
