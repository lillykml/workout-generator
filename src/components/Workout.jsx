import Exercise from "./Exercise"

const Workout = ({workout, clickHandler}) => {
    return (
        <>
        <h2>Your Workout</h2>
        {workout.map(exercise => <Exercise key={exercise.workoutId} name={exercise.name} 
        repetitions={exercise.repetitions} buttonText="Delete" clickHandler={()=>clickHandler(exercise.workoutId)}/>)}
        </>
    )
}

export default Workout