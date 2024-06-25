const Exercise = ({name, repetitions, buttonText, clickHandler}) => {
    return (
        <div className="bg-strong-purple rounded-md p-5 w-40">
            <p className="repetitions">{repetitions}</p>
            <p className="exercise-name">{name}</p>
            <button className='btn-custom btn-small' onClick={clickHandler}>{buttonText}</button>
        </div>
    )
}

export default Exercise