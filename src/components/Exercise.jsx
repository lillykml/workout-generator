const Exercise = ({name, repetitions}) => {
    return (
        <>
            <li>{repetitions} {name} <button>Delete</button></li>
        </>
    )
}

export default Exercise