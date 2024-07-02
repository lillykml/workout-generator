const WorkoutTitle = ({ name, changeName }) => {
    return(
        <input 
        type="text" 
        value={name} 
        onChange={changeName} 
        placeholder="Enter Workout Title"
        className="font-anton text-strong-purple text-6xl m-6 bg-transparent w-1/2 text-center"
        style={{ width: '100%', border: 'none', outline: 'none' }}
    />
    )
}

export default WorkoutTitle