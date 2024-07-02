import { Link } from "react-router-dom"

const Workouts = ({ workouts }) => {
    return(
        <div className='m-7 flex flex-col items-center'>
             <h2 className="font-anton text-strong-purple text-6xl mb-10">Saved Workouts</h2>
             <ul>
                {workouts.map(workout => <li key={workout.id}><Link className="text-white" to={`/workouts/${workout.id}`}>{workout.name}</Link></li>)}
             </ul>
        </div>
    )
}

export default Workouts