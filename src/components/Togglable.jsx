import { useState } from "react"

const Togglable = (props) => {

    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return(
        <div className="mt-4">
            <div style={hideWhenVisible}>
                <button className="btn-custom" onClick={toggleVisibility}>{props.buttonlabel}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button className="btn-custom" onClick={toggleVisibility}>Cancel</button>
            </div>
        </div>
    )
}

export default Togglable