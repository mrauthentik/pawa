import {createBrowserRouter} from 'react-router-dom'
import Landing from '../Components/Landing'
import SignUp from '../Components/Auth/SignUp'
import SignUpSuccess from '../Components/Auth/SignUpSuccess'
import Meter from '../Components/Auth/Meter'
import MeterSuccess from '../Components/Auth/MeterSuccess'
import SignIn from '../Components/Auth/SignIn'

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
    {
        path:'/meter',
        element: <Meter />
    },
    {
        path:'/meter-success',
        element: <MeterSuccess />
    },
    {
        path:'/signin',
        element: <SignIn />
    },
])

export default router