import {createBrowserRouter} from 'react-router-dom'
import Landing from '../Components/Landing'
import SignUp from '../Components/Auth/SignUp'
import SignUpSuccess from '../Components/Auth/SignUpSuccess'
import Meter from '../Components/Auth/Meter'
import MeterSuccess from '../Components/Auth/MeterSuccess'
import SignIn from '../Components/Auth/SignIn'
import FailedMeterNumber from '../Components/Auth/FailedMeterNo'
import NotFound from '../Components/NotFound'
import OnboardingSlider from '../Components/onBoardingSlider'
import Dashboard from '../Components/Dashboard/Dashboard'
// import Dashboard from '../Components/Dashboard/Dashboard'


const router = createBrowserRouter([
    {
        path:'/',
        element: <Landing />
    },
    {
        path:'/onboarding',
        element: <OnboardingSlider />
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
    {
        path:'/invalid',
        element: <FailedMeterNumber />
    },
    {
        path:'/dashboard',
        element: <Dashboard />
    },
    {
        path:'*',
        element: <NotFound />
    },
])

export default router