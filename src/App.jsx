import { useState, useEffect } from 'react'
import Workout from './components/Workout'
import axios from 'axios'
import Exercise from './components/Exercise'
import NewExercise from './components/NewExercise'


function App() {

  const [workout, setWorkout] = useState([])
  const [exercises, setExercises] = useState([])
  const [newExerciseName, setNewExerciseName] = useState('')
  const [newExerciseRepetitions, setNewExerciseRepetitions] = useState('')


  // Load all available exercises
  useEffect(() => {
    axios
      .get('http://localhost:3001/exercises')
      .then(response => {
        setExercises(response.data)
      })
  }, [])

  // Adding a new exercise to the available exercises
  const newNameHandler = (event) => {
    setNewExerciseName(event.target.value)
  }

  const newRepetitionsHandler = (event) => {
    setNewExerciseRepetitions(event.target.value)
  }

  const addExercise = (event) => {
    event.preventDefault()
    const exerciseObject = {
      name: newExerciseName,
      repetitions: newExerciseRepetitions
    }
    axios
    .post('http://localhost:3001/exercises', exerciseObject)
    .then(response => {
      setExercises(exercises.concat(response.data))
      setNewExerciseName('')
      setNewExerciseRepetitions('')
    })
  }

  // Generating and Modifing the workout
  const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  }

  const addExerciseToWorkout = (id) => {
    axios
    .get(`http://localhost:3001/exercises/${id}`)
    .then(response => {
      const exercise = response.data
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
    <>
    <h1>Workout Generator</h1>
    <button onClick={generateWorkout}>Generate Workout</button>
    <Workout workout={workout} clickHandler={removeExerciseFromWorkout}/>
    <h2>Available Exercises</h2>
    {exercises.map(exercise => <Exercise key={exercise.id} name={exercise.name} id={exercise.id} 
    repetitions={exercise.repetitions} buttonText="Add" clickHandler={addExerciseToWorkout}/>)}
    <NewExercise name={newExerciseName} repetitions={newExerciseRepetitions}
    nameHandler={newNameHandler} repetitionsHandler={newRepetitionsHandler} addExercise={addExercise}/>
    </>
  )
}

export default App
