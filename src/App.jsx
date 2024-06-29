import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Exercises from './pages/Exercises'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import Landing from './components/Landing'
import Menu from './components/Menu'
import workoutService from './services/workout'
import loginService from './services/login'
import signupService from './services/signup'


function App() {

  const [workouts, setWorkouts] = useState([])
  const [workout, setWorkout] = useState(null)
  const [exercises, setExercises] = useState([])
  const [user, setUser] = useState('')

  // Load all available exercises
  useEffect(() => {
    workoutService
    .getAll()
    .then(allExercises => setExercises(allExercises))
  }, [])


  // Load all available workouts
  useEffect(() => {
    workoutService
    .getAllWorkouts()
    .then(allWorkouts => setWorkouts(allWorkouts))
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
  
  const addExercise = async (name, repetitions, category) => {

    const exerciseObject = {
      name: name,
      repetitions: repetitions,
      category: category
    }

    const exercise = await workoutService.create(exerciseObject)
    setExercises(exercises.concat(exercise))
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
        <Menu user={user.username} logout={logout}/>
        <Routes>
          <Route path="/" element={<Home workout={workout} removeExerciseFromWorkout={removeExerciseFromWorkout} generateWorkout={generateWorkout}/>} />
          <Route path="/exercises" element={<Exercises exercises={exercises} addExerciseToWorkout={addExerciseToWorkout} addExercise={addExercise}/>} />
          <Route path="/workouts" element={<Workouts workouts={workouts}/>} />
        </Routes>
      </div>
      }
    </div>
  )
}

export default App
