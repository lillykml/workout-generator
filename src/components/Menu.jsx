import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <div>
        <Link className="p-5" to="/">home</Link>
        <Link className="p-5" to="/exercises">exercises</Link>
        <Link className="p-5" to="/workouts">workouts</Link>
      </div>
    )
}

export default Menu