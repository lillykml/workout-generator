import { useState, useEffect } from 'react'
import Workout from './components/Workout'
import Exercise from './components/Exercise'
import NewExercise from './components/NewExercise'
import Login from './components/Login'
import workoutService from './services/workout'
import loginService from './services/login'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [workout, setWorkout] = useState([])
  const [exercises, setExercises] = useState([])
  const [user, setUser] = useState('')


  // Load all available exercises
  useEffect(() => {
    workoutService
    .getAll()
    .then(allExercises => setExercises(allExercises))
  }, [])


  const addExercise = (name, repetitions) => {
    event.preventDefault()
    const exerciseObject = {
      name: name,
      repetitions: repetitions
    }
    workoutService
    .create(exerciseObject)
    .then(newExercise => {
      setExercises(exercises.concat(newExercise))
    })
  }

  // Generating and Modifing the workout
  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  }

  const addExerciseToWorkout = (id) => {
    workoutService
    .get(id)
    .then(exercise => {
      const newExercise = {
        ...exercise,
        workoutId: generateUniqueId()
      };
      setWorkout(workout.concat(newExercise))
    })
  }

  const removeExerciseFromWorkout = (id) => {
    setWorkout(workout.filter(e=> e.workoutId !== id))
  }

  const generateWorkout = () => {
    // randomly sample 8 exercises from my available exercises
    const sampleSize = 8
    const newWorkout = []

    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    while (newWorkout.length < sampleSize) {
      const randomIndex = getRandomInt(0, exercises.length)
      const exercise = exercises[randomIndex];
      const newExercise = {
        ...exercise,
        workoutId: generateUniqueId()
      }
      newWorkout.push(newExercise)
      }
      setWorkout(newWorkout)
    }

    const login = async (credentials) => {
      const loggedInUser = await loginService.login(credentials)
      setUser(loggedInUser)
    }

  return (
    <div>
      {!user && <Login loginHandler={login} />}
      {user && <p>{user.username} logged in</p>}
      <h1 className='heading'>Workout Generator</h1>
      <button onClick={generateWorkout}>Generate Workout</button>
      <Workout workout={workout} clickHandler={removeExerciseFromWorkout} className="workout" buttonText={<FontAwesomeIcon icon={faTrash} />}/>
      <h2>Available Exercises</h2>
      <div className='exercises'>
      {exercises.map(exercise => <Exercise key={exercise.id} name={exercise.name}
      repetitions={exercise.repetitions} buttonText={<FontAwesomeIcon icon={faPlus} />} clickHandler={()=>addExerciseToWorkout(exercise.id)}/>)}
      </div>
      <NewExercise addExercise={addExercise}/>
    </div>
  )
}

export default App
