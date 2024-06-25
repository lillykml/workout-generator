import Exercise from "./Exercise"

const Workout = ({workout, clickHandler, buttonText}) => {
    return (
        <div>
            <h2 className="font-anton text-strong-purple text-6xl mb-4">Your Workout</h2>
            <div className="exercises">
                {workout.map(exercise => <Exercise key={exercise.workoutId} name={exercise.name} 
                repetitions={exercise.repetitions} buttonText={buttonText} clickHandler={()=>clickHandler(exercise.workoutId)}/>)}
            </div>
        </div>
    )
}

export default Workout