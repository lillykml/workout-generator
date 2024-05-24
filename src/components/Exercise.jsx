const Exercise = ({name, repetitions}) => {
    return (
        <>
            <li>{repetitions} {name} <button>Add</button></li>
        </>
    )
}

export default Exercise