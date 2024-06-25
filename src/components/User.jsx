
import { useState } from "react"
import Login from './Login'
import SignUp from "./SignUp"

const User = ({login, signup}) => {

    const [showGetStarted, setGetStarted] = useState(true)
    const [showButtons, setShowButtons] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);

    const handleGetStartedClick = () => {
        setShowButtons(true);
        setGetStarted(false)
      };
    
      const handleLoginClick = () => {
        setShowButtons(false);
        setShowLoginForm(true);
      };
    
      const handleSignUpClick = () => {
        setShowButtons(false);
        setShowSignUpForm(true);
      };
    
      const handleCancelClick = () => {
        setShowButtons(true);
        setShowLoginForm(false);
        setShowSignUpForm(false);
      };

    return(
        <div>
            {showGetStarted && <button className="btn-custom" onClick={handleGetStartedClick}>Get Started</button>}
            {showButtons && 
            <div>
                <button className="btn-custom" onClick={handleLoginClick}>Log In</button>
                <button className="btn-custom" onClick={handleSignUpClick}>Sign Up</button>
            </div>
            }
            {showLoginForm && 
            <div>
                <Login loginHandler={ login } />
                <button className="btn-custom" onClick={handleCancelClick}>Cancel</button>
            </div>
            }
            {showSignUpForm&& 
            <div>
                <SignUp signup={ signup } />
                <button className="btn-custom" onClick={handleCancelClick}>Cancel</button>
            </div>
            }
        </div>
    )
}

export default User