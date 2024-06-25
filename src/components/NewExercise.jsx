import { useState, forwardRef, useImperativeHandle } from "react"

const NewExercise = forwardRef((props, refs) => {

    const [visible, setVisible] = useState(false)
    const [exerciseName, setExerciseName] = useState('')
    const [repetitions, setRepetitions] = useState('')

    const add = (event) => {
        event.preventDefault()
        props.addExercise(exerciseName, repetitions)
        setExerciseName('')
        setRepetitions('')
    }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(refs, () => {
        return {
          toggleVisibility
        }
      })
    

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
                        <button className='btn-custom' type="submit">Add</button>
                    </form>
                </div>
            </div>}
            </>
    )
})

NewExercise.displayName = 'NewExercise'

export default NewExercise