import Exercise from "./Exercise"

const Workout = ({workout}) => {
    return (
        <>
        {workout.map(exercise => <Exercise key={exercise.id} name={exercise.name} 
        repetitions={exercise.repetitions}/>)}
        <button>Add Element</button>
        </>
    )
}

export default Workout