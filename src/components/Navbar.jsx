import { SiThemoviedatabase } from 'react-icons/si';
import {BiSearchAlt} from 'react-icons/bi'
export default function Navbar(){
const style={
    fontSize:"4rem",
    color:"white",
    margin:"0.2em"
}
const styleser={
    fontSize:"2rem",
    color:"white",
}
return <div id="nav"><nav>
    <SiThemoviedatabase style={style}/>
    <div>
    <input id="search" type="search" placeholder='Search here...'></input>
    <button><BiSearchAlt style={styleser}/></button></div>
</nav></div>
}