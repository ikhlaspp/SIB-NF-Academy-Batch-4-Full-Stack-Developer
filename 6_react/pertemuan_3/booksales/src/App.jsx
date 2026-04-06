import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Book from './pages/Book'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'books',
        element: <Book />
      },
      {
        path: 'team',
        element: <Team />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App

