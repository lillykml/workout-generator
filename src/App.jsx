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


  useEffect(() => {
    axios
      .get('http://localhost:3001/exercises')
      .then(response => {
        setExercises(response.data)
      })
  }, [])


  return (
    <>
    <h1>Workout Generator</h1>
    <button>Generate Workout</button>
    <Workout workout={workout}/>
    <h2>Available Exercises</h2>
    {exercises.map(exercise => <Exercise key={exercise.id} name={exercise.name} 
        repetitions={exercise.repetitions}/>)}
    <NewExercise name={newExerciseName} repetitions={newExerciseRepetitions}
    nameHandler={newNameHandler} repetitionsHandler={newRepetitionsHandler} addExercise={addExercise}/>
    </>
  )
}

export default App
