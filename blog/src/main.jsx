import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

// Paginas
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    Children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPost/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
