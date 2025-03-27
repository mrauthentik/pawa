import {createBrowserRouter} from 'react-router-dom'
import Landing from '../Components/Landing'
import SignUp from '../Components/Auth/SignUp'
import SignUpSuccess from '../Components/Auth/SignUpSuccess'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Landing />
    },
    {
        path:'/signup',
        element: <SignUp />
    },
    {
        path:'/signup-success',
        element: <SignUpSuccess /> 
    },
])

export default router