const Exercise = ({name, id, repetitions, buttonText, clickHandler}) => {
    return (
        <>
            <li>{repetitions} {name} <button onClick={()=>clickHandler(id)}>
                {buttonText}</button></li>
        </>
    )
}

export default Exercise