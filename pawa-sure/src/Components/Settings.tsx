import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import wallet from '../assets/images/wallet.svg'
import bell from '../assets/images/bell.svg'
import lock from '../assets/images/lock.svg'
import mode from '../assets/images/mode.svg'
import language from '../assets/images/language.svg'
import question from '../assets/images/question.svg'
import excalamation from '../assets/images/excalamation.svg'
import out from '../assets/images/out.svg'
import left from '../assets/images/greater-than.svg'

const settings = [
    {img:wallet, title:'Payment & Wallet', icon:left},
    {img:bell, title:'Notification', icon:left},
    {img:lock, title:'Security', icon:left},
    {img:mode, title:'Dark Mode', icon:left},
    {img:language, title:'Language', icon:left},
    {img:question, title:'Help & Support', icon:left},
    {img:excalamation, title:'About', icon:left},
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
            <div className="sets">
            {settings.map((items,index)=>(
                <div key={index}>
                    <div className="name">
                        <img src={items.img} alt="" />
                        <p>{items.title}</p>
                    </div>
                    <div className="icon">
                       <img src={items.icon} alt="" />
                    </div>
                </div>
            ))}
            </div>
            <button> <img src={out} alt="" /> Log Out</button>
        </div>
    )
}
export default Settings