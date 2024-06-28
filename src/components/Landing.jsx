import Hero from "./Hero"
import User from "./User"
import Card from "./Card"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Landing = ({ login, signup }) => {
    return(
        <div>
            <div id="first-section" className="bg-cover bg-center flex-col section" style={{backgroundImage: "url('/img/boxing_woman.jpg')"}}>
                <Hero />
                <User login={login} signup={signup}/>
            </div>
            <div id="second-section" className="h-screen bg-custom-gradient flex gap-24 items-center px-36 section">
                <Card imageUrl={"./img/pexels-victorfreitas-2261477.jpg"} altText={"Man Deadlifting"}>Are you tried of not making the progress you want? Do you constantly do the same exercises in the gym and need new inspiration? We've got you covered.</Card>
                <Card imageUrl={"./img/pexels-cottonbro-4753990.jpg"} altText={"Woman doing a pushup"}>With a wide library of exercises we provide you with workouts tailored to your needs. Our magic generator generates the perfect workout for you and your goals.</Card>
                <Card imageUrl={"./img/pexels-runffwpu-1571939.jpg"} altText={"Women running outside"}>This app is perfect for everybody - doesn't matter wether you are training for your next marathon, want to be a power lifter or just try to be more heatlhy and active.</Card>
            </div>
            <div id="thrid-section" className="section">
                <div className="w-1/2 float-left overflow-hidden">
                    <img src="./img/pexels-cottonbro-4752861.jpg" alt="man working out with ropes" className="object-cover object-center w-full h-full" />
                </div>
                <div className="bg-dark-purple flex flex-col justify-evenly p-24 content-center">
                    <h2 className="font-anton text-bright-yellow text-7xl mb-4"> More than just your everyday workout.</h2>
                    <div className="w-full flex justify-center">
                        <ul className="space-y-4 text-left">
                            <li className=" text-white text-xl"><FontAwesomeIcon icon={faCheck} className="pr-4"/>Broad library of exercises</li>
                            <li className=" text-white text-xl"><FontAwesomeIcon icon={faCheck} className="pr-4"/>Random workout generator</li>
                            <li className=" text-white text-xl"><FontAwesomeIcon icon={faCheck} className="pr-4"/>Endless customization</li>
                        </ul>
                    </div>
                    <button className="btn-custom mx-auto">Get Started</button>
                </div>
            </div>
        </div>

    )
}
export default Landing