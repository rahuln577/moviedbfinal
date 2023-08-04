import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Axios from "axios"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Hero from "./components/Hero"
import DispCard from "./components/DispCard"
import Section from "./components/Section"
import { createContext ,useEffect,useState} from "react"
export const newcontext=createContext()
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWZhMTJhYzg3OTliZjhmYThhMmRkNzFjZmE0NDAyOSIsInN1YiI6IjY0Y2JhZmJjNGZkMTQxMDBjYTg1Y2VjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BqtFWCkIvtWcZ8YTq1xI1cO9Ww5-FVvmMClyaQIuIvM'
  }
}
const top = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const toprm = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const trendingss = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

function App(){
    let [result,setresult]=useState()
    let [current,setcurrent]=useState()
    let [topratedm,settopratedm]=useState()
    let [trendings,settrendings]=useState()
    useEffect(()=>{Axios(url,options).then((res)=>{
        console.log(res.data)
        setresult(res.data)
    })
    Axios(top,options).then((res)=>{
      console.log(res.data)
      setcurrent(res.data)
  })
  Axios(trendingss,options).then((res)=>{
    console.log(res.data)
    settrendings(res.data)
})
  Axios(toprm,options).then((res)=>{
    console.log(res.data)
    settopratedm(res.data)
})},[])
    return <div>
        <newcontext.Provider value={result}>
        <Navbar/>
        <Hero></Hero>
        <Section head="Currently Running" current={current} />
        <Section head="Top Rated Movies" current={topratedm} />
        <Section head="Trending Movies" current={trendings} />
        <BrowserRouter>
            <Routes>
                <Route path="/card" element={<Card/>}></Route>
            </Routes>
        </BrowserRouter>
        </newcontext.Provider>


        </div>
}
export default App