
import './App.css'
import AppLayout from './Component/Layout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Team from './Pages/Team/Team'
import Contact from './Pages/Contact/Contact'
import Jobs from './Pages/Jobs/Jobs'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/About",
          element:<About />,
        },
        {
          path:"/Services",
          element:<Services />,
        },
        {
          path:"/Team",
          element:<Team />,
        },
        {
          path:"/Contact",
          element:<Contact />,
        },
        {
          path:"/Jobs",
          element:<Jobs />,
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
