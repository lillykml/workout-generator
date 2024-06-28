const Exercise = ({exercise, buttonText, clickHandler}) => {
    return (
        <div className="bg-strong-purple rounded-md p-5 w-40">
            <p className="repetitions">{exercise.repetitions}</p>
            <p className="exercise-name">{exercise.name}</p>
            <p className="rounded-lg bg-white text-strong-purple">{exercise.category}</p>
            <button className='btn-custom btn-small' onClick={clickHandler}>{buttonText}</button>
        </div>
    )
}

export default Exercise