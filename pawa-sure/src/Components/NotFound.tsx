import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound:React.FC = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <h1>404 Not Found</h1>
        </div>
    )
}
export default NotFound