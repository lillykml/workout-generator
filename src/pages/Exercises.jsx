import { useState } from "react"
import Exercise from "../components/Exercise"
import NewExercise from "../components/NewExercise";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Exercises = ({exercises, addExerciseToWorkout, addExercise }) => {

    const [filter, SetFilter] = useState('')

    return(
        <div className='mb-7'>
          <h2 className="font-anton text-strong-purple text-6xl mb-4">Available Exercises</h2>
          <div className='exercises'>
            {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} buttonText={<FontAwesomeIcon icon={faPlus} />} clickHandler={()=>addExerciseToWorkout(exercise.id)}/>)}
            <NewExercise addExercise={addExercise} />
          </div>
        </div>
    )
}

export default Exercises