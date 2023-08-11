import {useContext} from "react"
 import {IoIosArrowForward} from "react-icons/io"
 import DispCard from "./DispCard"
 import {newcontext} from "./../App"
 export default function Cast(props){
    return<div className="section">
        <h2 style={{fontSize:"2.5rem"}}>Cast<IoIosArrowForward fill="yellow" width="20em"/></h2>
        <div className="scroll1">
            {props.res?.cast.map((value,index)=>{
                console.log(value.poster_path)
                if(index<5)
                return <div><img className="simic" src={`http://image.tmdb.org/t/p/original/${value?.profile_path}`}></img>
                <p style={{textAlign:"center",fontSize:"1.6rem"}}>{value.name}</p></div>
            })}
        </div>
    </div>
}