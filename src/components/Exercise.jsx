const Exercise = ({name, repetitions, buttonText, clickHandler}) => {
    return (
        <>
            <li className="exercise">
                <p className="repetitions">{repetitions}</p>
                <p className="exercise-name">{name}</p>
                <button className='btn-custom' onClick={clickHandler}>{buttonText}</button>
            </li>
        </>
    )
}

export default Exercise