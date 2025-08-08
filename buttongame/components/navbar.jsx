import {Link} from "react-router-dom"

function NavBar(){
    return(
        <>
            <Link to={"/levelone"}>Play</Link>
            <Link to={"/options"}>Options</Link>
        </>
    )
}
export default NavBar