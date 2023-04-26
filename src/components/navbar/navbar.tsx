import './navbar.scss';
import { Link, NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <div className='nav-container'>
          <NavLink to=""><div className='nav-title'>React PlayGround</div></NavLink>
        <div>
          <ul>
            <li><NavLink to="">Info</NavLink></li>
            <li><NavLink to="useeffect-api-fetch">API Fetch - useEffect</NavLink></li>
            <li><NavLink to="axios-api-fetch">API Fetch - Axios</NavLink></li>
            <li><NavLink to="useState">useState</NavLink></li>
            <li><NavLink to="useRef">useRef</NavLink></li>
            <li><NavLink to="useEffect">useEffect</NavLink></li>

          </ul>
        </div>
      </div>
    </>
  )
}`~`