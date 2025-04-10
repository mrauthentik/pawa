import { UploadFile } from '@mui/icons-material'
import React from 'react'

const settings = [
    {img:'', title:'Edit Profile', icon:''},
    {img:'', title:'Notification', icon:''},
    {img:'', title:'Language', icon:''},
    {img:'', title:'Security', icon:''},
    {img:'', title:'Dark Mode', icon:''},
    {img:'', title:'About', icon:''},
]

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
            <div className="details">
                <div className="name">Charles Babbage</div>
                <div className="email">
                 <p>charles_babbage12@gmail.com</p>
                </div>
            </div>
            <div className="sets">
            {settings.map((items,index)=>(
                <div key={index}>
                    <div className="name">
                        <img src={items.img} alt="" />
                        <p>{items.title}</p>
                    </div>
                    <div className="icon">
                        {items.icon}
                    </div>
                </div>
            ))}
            </div>
            <button> Log Out</button>
        </div>
    )
}
export default Settings