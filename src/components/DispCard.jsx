import {BsStarFill} from "react-icons/bs"
import {useEffect} from "react"
export default function DispCard(props){
    const style={"fontSize":"1.7rem","color":"yellow"}
    console.log(props.res)
return <div class="dispc">
    <img src={`http://image.tmdb.org/t/p/original/${props.res.poster_path}`}></img>
    <div class="dcon">
        <div>
        <h4>{props.res?.original_title}</h4>
        <div class="star"><BsStarFill style={style} fill="yellow"/><p>{props.res?.vote_average.toString().slice(0,3)}</p></div>
        </div>
    </div>
</div>
}