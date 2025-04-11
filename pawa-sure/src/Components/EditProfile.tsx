import React from 'react'
import { useNavigate } from 'react-router-dom'


const EditProfile:React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className='edit-profile'>
             <div className="cancel"></div>
        </div>
    )
}

export default EditProfile