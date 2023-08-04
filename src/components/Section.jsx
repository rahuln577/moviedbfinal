import {useContext} from "react"
 import {IoIosArrowForward} from "react-icons/io"
 import DispCard from "./DispCard"
 import {newcontext} from "./../App"
 export default function Section(props){
    console.log(props.current)
    return<div className="section">
        <h2>{props.head}<IoIosArrowForward fill="yellow" width="20em"/></h2>
        <div className="scroll">
            {props.current?.results.map((value)=>{
                return <DispCard res={value}></DispCard>
            })}
        </div>
    </div>
}