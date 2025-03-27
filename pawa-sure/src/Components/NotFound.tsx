import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assets/images/404.svg'

const NotFound:React.FC = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <h1>404 Not Found</h1>
        </div>
    )
}
export default NotFound