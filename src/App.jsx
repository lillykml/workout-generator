import { useState, useEffect, useRef} from 'react'
import Workout from './components/Workout'
import Exercise from './components/Exercise'
import NewExercise from './components/NewExercise'
import Landing from './components/Landing'
import workoutService from './services/workout'
import loginService from './services/login'
import signupService from './services/signup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Title from './components/Title'

function App() {

  const [workout, setWorkout] = useState(null)
  const [exercises, setExercises] = useState([])
  const [user, setUser] = useState('')
  const newExerciseRef = useRef()

  // Load all available exercises
  useEffect(() => {
    workoutService
    .getAll()
    .then(allExercises => setExercises(allExercises))
  }, [])

  // Store logged-in User 
  useEffect(() => {
    const loggedInUserJSON = window.localStorage.getItem('loggedInAppUser')
    if (loggedInUserJSON) {
      const user = JSON.parse(loggedInUserJSON)
      setUser(user)
      workoutService.setToken(user.token)
  }}, [])

  // User handler
  const login = async (credentials) => {
    const loggedInUser = await loginService.login(credentials)
    window.localStorage.setItem('loggedInAppUser', JSON.stringify(loggedInUser))
    setUser(loggedInUser)
  }

  const logout = () => {
    window.localStorage.removeItem('loggedInAppUser')
    setUser(null)
    setWorkout(null)
    workoutService.setToken(null)
  }

  const signup = async (name, username, password) => {
    await signupService.signup({name, username, password})
    await login({username, password})
  }
  
  const addExercise = async (name, repetitions) => {

    const exerciseObject = {
      name: name,
      repetitions: repetitions
    }

    const exercise = await workoutService.create(exerciseObject)
    setExercises(exercises.concat(exercise))
    newExerciseRef.current.toggleVisibility()
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


  return (
    <div>
      {!user && <Landing login={login} signup={signup}/>}
      {user && 
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-cold-blue py-14">
        <Title />
        <div className='mb-7'>
          <p>{user.username} logged in</p>
          <button className='btn-custom' onClick={logout}>Logout</button>
        </div>
        <div className='mb-7'>
          {workout && <Workout workout={workout} clickHandler={removeExerciseFromWorkout} className="workout" buttonText={<FontAwesomeIcon icon={faTrash} />}/>}
          <button className='btn-custom' onClick={generateWorkout}>Generate Workout</button>
        </div>
        <div className='mb-7'>
          <h2 className="font-anton text-strong-purple text-6xl mb-4">Available Exercises</h2>
          <div className='exercises'>
            {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} buttonText={<FontAwesomeIcon icon={faPlus} />} clickHandler={()=>addExerciseToWorkout(exercise.id)}/>)}
          </div>
        </div>
        <NewExercise addExercise={addExercise} ref={newExerciseRef}/>
      </div>}
    </div>
  )
}

export default App
