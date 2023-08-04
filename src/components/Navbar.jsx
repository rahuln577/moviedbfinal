import { SiThemoviedatabase } from 'react-icons/si';
import {BiSearchAlt} from 'react-icons/bi'
import {useState} from "react"
import {Link} from "react-router-dom"
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
let [show,setshow]=useState(false)
function handle(){
    setshow(!show)
}

return <div id="nav"><nav>
    <Link to="/" ><SiThemoviedatabase style={style}/></Link>

    <div>
    <Link className="eleme"to="/nowplaying" state={{url:"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"}}>Now Playing</Link>
    <Link className="eleme"to="/popular" state={{url:"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"}}>Popular</Link>
    <Link className="eleme"to="/toprated" state={{url:"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"}}>Top Rated</Link>
    <Link className="eleme"to="/upcoming" state={{url:"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"}}>Upcoming</Link>
    </div>
    <div className="tod">
    <div id="holder" onClick={handle}>
        <div className="ico"></div>
        <div className="ico"></div>
        <div className="ico"></div>
    </div>
    </div>
</nav>
<div id="ham" className={show?"show":"hide"}>
    <Link onClick={handle} className="eleme1"to="/nowplaying" state={{url:"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"}}>Now Playing</Link>
    <Link onClick={handle} className="eleme1"to="/popular" state={{url:"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"}}>Popular</Link>
    <Link onClick={handle} className="eleme1"to="/toprated" state={{url:"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"}}>Top Rated</Link>
    <Link onClick={handle} className="eleme1"to="/upcoming" state={{url:"https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"}}>Upcoming</Link>
    </div>
</div>
}