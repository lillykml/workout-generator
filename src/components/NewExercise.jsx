const NewExercise = ({name, repetitions, nameHandler, repetitionsHandler, addExercise}) => {
    return (
        <>
        <h3>Add a new exercises</h3>
        <form onSubmit={addExercise}>
            <div>
                <label>Name</label>
                <input value={name} onChange={nameHandler}/>
            </div>
            <div>
                <label>Repetitions</label>
                <input value={repetitions} onChange={repetitionsHandler}/>
            </div>
            <button type="submit">Add</button>
        </form>
        </>
    )
}

export default NewExercise