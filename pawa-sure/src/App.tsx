import { RouterProvider } from 'react-router-dom'
import './App.css'
import 'swiper/swiper-bundle.css';
import router from './Router/router';

function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
