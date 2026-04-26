import {Link} from "react-router-dom"

const Header_Nuv = () =>{
    
    return(
        <header>
            <ul>
                <li>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to= "page1">New</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header_Nuv;