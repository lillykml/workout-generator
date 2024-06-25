import { useState } from "react"

const NewExercise = ({ addExercise }) => {

    const [exerciseName, setExerciseName] = useState('')
    const [repetitions, setRepetitions] = useState('')

    const add = (event) => {
        event.preventDefault()
        addExercise(exerciseName, repetitions)
        setExerciseName('')
        setRepetitions('')
    }

    return (
            <>
                <h3>Add a new exercises to the database</h3>
                <div className="new-exercise-container">
                    <form onSubmit={add}>
                        <div className="form-group">
                            <label>Name</label>
                            <input value={exerciseName} onChange={(event) => setExerciseName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Repetitions</label>
                            <input value={repetitions} onChange={(event) => setRepetitions(event.target.value)}/>
                        </div>
                        <button className='btn-custom' type="submit">Add</button>
                    </form>
                </div>
            </>
    )
}

export default NewExercise