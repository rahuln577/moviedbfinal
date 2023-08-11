import {useContext} from "react"
 import {IoIosArrowForward} from "react-icons/io"
 import {Link} from "react-router-dom"
 import DispCard from "./DispCard"
 import {newcontext} from "./../App"
 export default function Similar(props){
    return<div className="section">
        <h2 style={{fontSize:"2.5rem"}}>Similar<IoIosArrowForward fill="yellow" width="20em"/></h2>
        <div className="scroll">
            {props.res?.results.map((value)=>{
                if(value?.poster_path!=null){
                console.log(value.poster_path)
                return <Link to="/info" className="link" state={{id:value?.id}} style={{textDecoration:"none"}}> 
                <img className="simi" src={`http://image.tmdb.org/t/p/original/${value?.poster_path}`}></img></Link>}
            })}
        </div>
    </div>
}