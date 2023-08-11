import {useState,useEffect} from "react"
import Similar from "./../components/Similar"
import Cast from "./../components/Cast"
import Axios from "axios"
import {useLocation} from "react-router-dom"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWZhMTJhYzg3OTliZjhmYThhMmRkNzFjZmE0NDAyOSIsInN1YiI6IjY0Y2JhZmJjNGZkMTQxMDBjYTg1Y2VjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BqtFWCkIvtWcZ8YTq1xI1cO9Ww5-FVvmMClyaQIuIvM'
  }
}

export default function Info(props){
    let {id}=useLocation().state
    const url1 = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    
const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
const cast = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;

    let [result,setresult]=useState()
    let [vid,setvid]=useState()
    let [sim,setsim]=useState()
    let [cred,setcred]=useState()
    useEffect(()=>{Axios(url,options).then((res)=>{
        setresult(res.data)
        console.log(res.data)
    })
    Axios(cast,options).then((res)=>{
        setcred(res.data)
    })
    let similar = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${result?.genres[0].id}`;
    Axios(similar,options).then((res)=>{
        console.log(res.data)
        setsim(res.data)
    })
    Axios(url1,options).then((res)=>{
        setvid(res.data)
    })},[id])
return <div>
        <h1 id="he">{result?.original_title}</h1>
    <div className="infoma">

        <iframe src={`https://www.youtube.com/embed/${vid?.results[0]?.key}?autoplay=1&mute=1`}></iframe>
        <div className="icont">
            <h1 id="inhe">{result?.original_title}</h1>
            <p>{result?.overview}</p>
            <p><span style={{fontSize:"inherit",fontWeight:"Bold"}}>Release</span>: {result?.release_date}</p>
            <p><span style={{fontWeight:"Bold",fontSize:"inherit"}}>Languages</span>: {result?.spoken_languages[0]?.english_name}, {result?.spoken_languages[1]?.english_name}, {result?.spoken_languages[2]?.english_name}, {result?.spoken_languages[3]?.english_name}</p>
            <p><span style={{fontWeight:"Bold",fontSize:"inherit"}}>Genres</span>: {result?.genres[0]?.name}, {result?.genres[1]?.name}, {result?.genres[2]?.name}, {result?.genres[3]?.name}</p>
            <p><span style={{fontWeight:"Bold",fontSize:"inherit"}}>Budget</span>: ${result?.budget}</p>
        </div>
    </div>
    <Cast res={cred}/>
    <Similar res={sim}/>
</div>
}