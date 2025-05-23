import { Cancel } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from "../assets/images/profile-img.svg"
import upload from '../assets/images/upload.svg'


const EditProfile:React.FC = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate('/profile')
    }
    // const changeUserName = (e:React.ChangeEvent<HTMLInputElement>) =>{
    //     e.preventDefault()
    //     setUserName(()=> e.target.value)
    // }
    return (
        <div className='edit-profile'>
            <div className="header">
             <div className="cancel" onClick={goBack}>
                <Cancel />
             </div>
                <h2>Edit Profile</h2>
            </div>
             <div className="img-holder">
                <img src={avatar} alt="" />
                 <div className="upload"> <img src={upload} alt="" /></div>
             </div>
             <form action="#">
                <label> Username</label>
                <input type="text"  />
             </form>
        </div>
    )
}

export default EditProfile