import Exercise from "./Exercise"

const Workout = ({workout, clickHandler}) => {
    return (
        <>
        <h2>Your Workout</h2>
        <div className="exercises">
            {workout.map(exercise => <Exercise key={exercise.workoutId} name={exercise.name} 
            repetitions={exercise.repetitions} buttonText="x" clickHandler={()=>clickHandler(exercise.workoutId)}/>)}
        </div>
        </>
    )
}

export default Workout