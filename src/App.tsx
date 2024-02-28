import NavBar from "./components/NavBar.tsx"
import { Outlet } from 'react-router'


function App() {
  return (
    <div id="app">
        <NavBar />
        <Outlet />
    </div>
  )
}

export default App
