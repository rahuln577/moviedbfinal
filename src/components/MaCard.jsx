import {FaImdb} from "react-icons/fa"
export default function MaCard(props){
    let style={"font-size":"3.5rem"}
    return <div className="lcard">
        <img src={`http://image.tmdb.org/t/p/original/${props.res?.poster_path}`}></img>
        <div className="lcont"><h1>{props.res?.original_title}</h1>
        <p>{props.res?.overview.slice(0,350)}...</p>
        <div className="imdb"><FaImdb height="4rem" width="4rem" style={style}/><p>{props.res?.vote_average}</p></div>
        </div>

    </div>
}