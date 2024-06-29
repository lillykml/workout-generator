import { useState } from "react"
import Exercise from "../components/Exercise"
import NewExercise from "../components/NewExercise";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Exercises = ({exercises, addExerciseToWorkout, addExercise }) => {

    const [filter, setFilter] = useState('all')

    const displayedExercises = filter === 'all' ? exercises: exercises.filter(exercise => exercise.category && exercise.category === filter)

    return(
        <div className='m-7 flex flex-col items-center'>
          <h2 className="font-anton text-strong-purple text-6xl mb-10">Available Exercises</h2>
          <div className="mb-10">
            <input className="ml-4" type="radio" name="category" value="all" defaultChecked onChange={(event)=>setFilter(event.target.value)}/> All
            <input className="ml-4" type="radio" name="category" value="abs" onChange={(event)=>setFilter(event.target.value)}/> Abs
            <input className="ml-4" type="radio" name="category" value="upper body" onChange={(event)=>setFilter(event.target.value)}/> Upper Body
            <input className="ml-4" type="radio" name="category" value="lower body" onChange={(event)=>setFilter(event.target.value)}/> Lower Body
            <input className="ml-4" type="radio" name="category" value="full body" onChange={(event)=>setFilter(event.target.value)}/> Full Body
          </div>
          <div className='exercises'>
            {displayedExercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} buttonText={<FontAwesomeIcon icon={faPlus} />} clickHandler={()=>addExerciseToWorkout(exercise.id)}/>)}
          </div>
          <NewExercise addExercise={addExercise} />
        </div>
    )
}

export default Exercises