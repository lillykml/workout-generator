import { useState } from 'react'
import Workout from './components/Workout'


function App() {

  const [workout, setWorkout] = useState([])

  return (
    <>
    <h1>Workout Generator</h1>
    <button>Generate Workout</button>
    <Workout workout={workout}/>
    </>
  )
}

export default App
