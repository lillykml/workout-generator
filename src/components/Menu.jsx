import { Link } from "react-router-dom"

const Menu = ({user, logout}) => {
    return(
      <div className="flex justify-between mx-56 items-center mb-10">
          <Link className="nav-item" to="/">home</Link>
          <Link className="nav-item" to="/exercises">exercises</Link>
          <Link className="nav-item" to="/workouts">workouts</Link>
          <p className="inline">{user} logged in</p>
          <button className='nav-item bg-none' onClick={logout}>Logout</button>
      </div>
       
    )
}

export default Menu