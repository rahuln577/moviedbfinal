import MaCard from "../components/MaCard"
import reactdom from "react-dom"
import App from "./../App"
import {useEffect,useState} from "react"
import {useLocation} from "react-router-dom"
import Axios from "axios"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWZhMTJhYzg3OTliZjhmYThhMmRkNzFjZmE0NDAyOSIsInN1YiI6IjY0Y2JhZmJjNGZkMTQxMDBjYTg1Y2VjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BqtFWCkIvtWcZ8YTq1xI1cO9Ww5-FVvmMClyaQIuIvM'
  }
}
export default function ListPage(){
    let loc=useLocation();
    console.log(loc.state)
    let {url}=loc.state
    useEffect(()=>{Axios(url,options).then((res)=>{
        console.log(res.data)
        setresult(res.data)
    })},[url])
    let [result,setresult]=useState()

    return<div className="List">
        {result?.results.map((value,index)=>{
        return <MaCard res={value}/>
        })}

    </div>
}