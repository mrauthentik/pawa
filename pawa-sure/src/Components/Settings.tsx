import { UploadFile } from '@mui/icons-material'
import React from 'react'

const Settings:React.FC = ()=> {
    return (
        <div className='settings'>
            <div className="header">
                <div className="text"><h2>Profile</h2></div>
                <div className="icon"><img src="" alt="" /></div> 
            </div>
            <div className="avatar">
                <div className="image-holder">
                    <img src="" alt="" />
                    <UploadFile />
                </div>
            </div>
        </div>
    )
}
export default Settings