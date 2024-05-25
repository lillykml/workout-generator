const Exercise = ({name, repetitions, buttonText, clickHandler}) => {
    return (
        <>
            <li>{repetitions} {name} <button onClick={clickHandler}>
                {buttonText}</button></li>
        </>
    )
}

export default Exercise