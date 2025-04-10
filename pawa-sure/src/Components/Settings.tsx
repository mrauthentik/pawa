import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const settings = [
    {img:'', title:'Payment & Wallet', icon:''},
    {img:'', title:'Notification', icon:''},
    {img:'', title:'Security', icon:''},
    {img:'', title:'Dark Mode', icon:''},
    {img:'', title:'Language', icon:''},
    {img:'', title:'Help & Support', icon:''},
    {img:'', title:'About', icon:''},
]

const Settings:React.FC = ()=> {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate('/dashboard')
    }
    return (
        <div className='settings'>
            <div className="header">
                <div className="icon" onClick={handleNavigate}><ArrowBack /></div> 
                <div className="text"><h2>Settings</h2></div>
            </div>
            {/* <div className="avatar">
                <div className="image-holder">
                    <img src="" alt="" />
                    <UploadFile />
                </div>
            </div> */}
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