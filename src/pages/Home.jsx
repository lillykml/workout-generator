import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Workout from "../components/Workout"

const Home = ({ workout, removeExerciseFromWorkout, generateWorkout, save}) => {
    return(
        <div className='mb-7'>
            <h2 className="font-anton text-strong-purple text-6xl mb-10">Welcome to the Workout Generator</h2>
            <p>Simply click the button below to generate your custom workout. You can remove exercises and add custom exercises via the exercises tab.</p>
            {workout && 
            <>
                 <Workout workout={workout} clickHandler={removeExerciseFromWorkout} className="workout" buttonText={<FontAwesomeIcon icon={faTrash} />}/>
                <button className='btn-custom' onClick={save}>Save Workout</button>
            </>}
            <button className='btn-custom' onClick={generateWorkout}>Generate Workout</button>
        </div>
    )
}

export default Home