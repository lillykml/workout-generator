import Exercise from "./Exercise"
import WorkoutTitle from "./WorkoutTitle"
import { useState } from "react"

const Workout = ({workout, clickHandler, buttonText, rename}) => {

    const [workoutName, setWorkoutName] = useState(workout.name || "")

    const changeWorkoutName = (event) => {
        setWorkoutName(event.target.value)
        rename(event.target.value)
    }

    return (
        <div>
            <WorkoutTitle name={workoutName} changeName={changeWorkoutName}/>
            <div className="exercises">
                {workout.exercises.map(exercise => <Exercise key={exercise.workoutId} exercise={exercise} buttonText={buttonText} clickHandler={()=>clickHandler(exercise.workoutId)}/>)}
            </div>
        </div>
    )
}

export default Workout