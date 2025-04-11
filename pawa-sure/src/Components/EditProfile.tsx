import { Cancel } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import avatar from "../assets/images/profile-img.svg"
import upload from '../assets/images/upload.svg'


const EditProfile:React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className='edit-profile'>
             <div className="cancel">
                <Cancel />
                <h2>Edit Profile</h2>
             </div>
             <div className="img-holder">
                <img src={avatar} alt="" />
             </div>
        </div>
    )
}

export default EditProfile