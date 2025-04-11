import { Cancel } from '@mui/icons-material'
import { useNavigate, Link } from 'react-router-dom'
import React from 'react'
import avatar from '../assets/images/profile-img.svg'



const Profile:React.FC = () => {

    const details = [
        {title: 'Username', item:'Charles_babage'},
        {title: 'First Name', item:'Charles'},
        {title: 'Last Name', item:'Bababage'},
        {title: 'Phone Number', item:'+234822603666'},
        {title: 'Email', item:'Charles_bababage12@gmail.com'},
        {title: 'Gender', item:'Male'},
        // {title: 'Linked Meter', item:'Osaporo Estate and Housing  12348888'},
        {title: 'Linked Meter', item:`Charles Housing 86896898`}
    ]

    const navigate = useNavigate()
    const handleCancel = () => {
        navigate('/dashboard')
    }
  return (
    <div className='profile-container'>
       <div className="header">
        <div className="cancel" onClick={handleCancel}>
        <Cancel />
        </div>
         <h2>Profile</h2>
       </div>
       <div className="img-holder">
        <img src={avatar} alt="" />
        <div className="name"> 
            <h2>Charles Babbage</h2>
        </div>
       </div>
       <div className="profile-list">
         {details.map((items, index)=>(
            <div className='profile-items' key={index}>
               <div className="title"><h2>{items.title}</h2></div>
               <div className="items"><p>{items.item}</p></div>
            </div>
         ))}
       </div>
       <button><Link to='/edit-profile' className='link'> Edit Profile</Link></button>
    </div>
  )
}

export default Profile
