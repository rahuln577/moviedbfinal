

export default function Card(props){
return<div class="cardside">
    <img src={`http://image.tmdb.org/t/p/original/${props.res?.results[props.num].poster_path}`}></img>
    <div class="scon">
        <h3>{props.res?.results[props.num].original_title}</h3>
        <p>IMDB: {props.res?.results[props.num].vote_average}</p>
    </div>
</div>

}
