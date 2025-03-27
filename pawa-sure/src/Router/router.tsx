import {createBrowserRouter} from 'react-router-dom'
import Landing from '../Components/Landing'
import SignUp from '../Components/Auth/SignUp'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Landing />
    },
    {
        path:'/signup',
        element: <SignUp />
    },
])

export default router