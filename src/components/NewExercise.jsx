import { useState } from "react"

const NewExercise = ({ addExercise }) => {

    const [visible, setVisible] = useState(false)
    const [exerciseName, setExerciseName] = useState('')
    const [repetitions, setRepetitions] = useState('')
    const [category, setCategory] = useState('')

    const add = (event) => {
        event.preventDefault()
        addExercise(exerciseName, repetitions, category)
        setExerciseName('')
        setRepetitions('')
        setCategory('')
        toggleVisibility()
    }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
            <>
            {!visible && <button onClick={toggleVisibility} className="btn-custom">Add New Exercise</button>}
            {visible && 
            <div>
                <h3 className="font-anton text-4xl m-4">Add a new exercises to the database</h3>
                <div className="new-exercise-container">
                    <form onSubmit={add}>
                        <div className="form-group">
                            <label>Name</label>
                            <input className='input-custom' value={exerciseName} onChange={(event) => setExerciseName(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Repetitions</label>
                            <input className='input-custom' value={repetitions} onChange={(event) => setRepetitions(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <input className="ml-4" type="radio" name="category" value="abs" onChange={(event)=>setCategory(event.target.value)}/>Abs
                            <input className="ml-4" type="radio" name="category" value="upper body" onChange={(event)=>setCategory(event.target.value)}/>Upper Body
                            <input className="ml-4" type="radio" name="category" value="lower body" onChange={(event)=>setCategory(event.target.value)}/>Lower Body
                            <input className="ml-4" type="radio" name="category" value="full body" onChange={(event)=>setCategory(event.target.value)}/>Full Body
                        </div>
                        <button className='btn-custom' type="submit">Add</button>
                    </form>
                </div>
            </div>}
            </>
    )
}

export default NewExercise