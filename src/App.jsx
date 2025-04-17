import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Component/Home'
import CreatePost from './Component/CreatePost'
import UseContextApi from './Component/UseContextApi'
import AskQuestion from './Component/AskQuestion'
import './index.css'


  const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/createpost",
    element: <CreatePost/>
  },
  {
    path:"/askquestion",
    element: <AskQuestion/>
  },
  
  ])

const App = () => {
  return (
    
    <UseContextApi>
      <RouterProvider router={router}/>
    </UseContextApi>
    
  )
}

export default App
