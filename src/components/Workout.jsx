import Exercise from "./Exercise"

const Workout = ({workout, clickHandler, buttonText}) => {
    return (
        <div>
            <h2 className="font-anton text-strong-purple text-6xl m-4">Your Workout</h2>
            <div className="exercises">
                {workout.map(exercise => <Exercise key={exercise.workoutId} exercise={exercise} buttonText={buttonText} clickHandler={()=>clickHandler(exercise.workoutId)}/>)}
            </div>
        </div>
    )
}

export default Workout