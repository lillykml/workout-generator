import Hero from "./Hero"
import User from "./User"

const Landing = ({ login, signup }) => {
    return(
        <div className="py-52 bg-cover bg-center h-screen" style={{backgroundImage: "url('/img/boxing_woman.jpg')"}}>
            <Hero />
            <User login={login} signup={signup}/>
        </div>
    )
}
export default Landing