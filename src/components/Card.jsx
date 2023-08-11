
import {FaImdb} from "react-icons/fa"
import {Link} from "react-router-dom"
export default function Card(props){
    let style={"font-size":"3.5rem"}
return<Link to="/info" className="link" state={{id:props.res?.results[props.num].id}} style={{textDecoration:"none"}}>
<div class="cardside">
    <img src={`http://image.tmdb.org/t/p/original/${props.res?.results[props.num].poster_path}`}></img>
    <div class="scon">
        <h3>{props.res?.results[props.num].original_title}</h3><div id="im">
        <FaImdb height="4rem" width="4rem" style={style}/> <p>{props.res?.results[props.num].vote_average}</p></div>
    </div>
</div>
</Link>

}
