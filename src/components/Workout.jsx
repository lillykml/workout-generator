import Exercise from "./Exercise"

const Workout = ({workout, clickHandler}) => {
    return (
        <>
        <h2>Your Workout</h2>
        {workout.map(exercise => <Exercise key={exercise.id} name={exercise.name} 
        repetitions={exercise.repetitions} buttonText="Delete" clickHandler={()=>clickHandler(exercise.id)}/>)}
        </>
    )
}

export default Workout