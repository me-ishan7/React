import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import Layout from './Component/Layout.jsx'
import Profile from './Component/Profile.jsx'
import Login from './Component/Login.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
)