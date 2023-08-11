import {FaImdb} from "react-icons/fa"
import {Link} from "react-router-dom"
export default function MaCard(props){
    let style={"font-size":"3.5rem"}
    return         <Link className="link" to="/info" state={{id:props.res?.id}} style={{textDecoration:"none"}}>
    <div className="lcard">

        <img src={`http://image.tmdb.org/t/p/original/${props.res?.poster_path}`}></img>
        <div className="lcont"><h1>{props.res?.original_title}</h1>
        <p>{props.res?.overview.slice(0,200)}..</p>
        <div className="imdb"><FaImdb height="4rem" width="4rem" style={style}/><p>{props.res?.vote_average}</p></div>
        </div>
        
    </div>
        </Link>

}