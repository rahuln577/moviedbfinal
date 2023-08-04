import {newcontext} from "./../Pages/Home"
import {useContext} from "react"
import DispCard from "./DispCard"
import Card from "./Card"
export default function Hero(){
    let result1=useContext(newcontext)
return<div id="hero">
    <div class="display">
    <div class="cont">
    <div class="maindesc">
    <img class="poster" src={`http://image.tmdb.org/t/p/original/${result1?.results[2].poster_path}`}></img>
    <div class="desc">
        <h2>{result1?.results[2].original_title}</h2>
        <p>{result1?.results[2].overview.slice(0,300)}...</p>
    </div>
    </div>
    <div class="overlay">
    <img class="backdrop" src={`http://image.tmdb.org/t/p/original/${result1?.results[2].backdrop_path}`}></img>
    </div>
    </div>
    </div>
    <div id="sc">
    <Card res={result1} num={0}/>
    <Card res={result1} num={1}/>
    <Card res={result1} num={3}/>
    </div>
    </div>


}