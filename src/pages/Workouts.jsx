const Workouts = ({ workouts }) => {
    return(
        <div className='m-7 flex flex-col items-center'>
             <h2 className="font-anton text-strong-purple text-6xl mb-10">Saved Workouts</h2>
             <ul>
                {workouts.map(workout => <li key={workout.id}>{workout.name}</li>)}
             </ul>
        </div>
    )
}

export default Workouts