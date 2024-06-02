const NewExercise = ({name, repetitions, nameHandler, repetitionsHandler, addExercise}) => {
    return (
            <>
                <h3>Add a new exercises to the database</h3>
                <div className="new-exercise-container">
                    <form onSubmit={addExercise}>
                        <div className="form-group">
                            <label>Name</label>
                            <input value={name} onChange={nameHandler}/>
                        </div>
                        <div className="form-group">
                            <label>Repetitions</label>
                            <input value={repetitions} onChange={repetitionsHandler}/>
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </>
    )
}

export default NewExercise