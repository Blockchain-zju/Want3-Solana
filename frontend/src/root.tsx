import NavBar from 'components/NavBar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout
