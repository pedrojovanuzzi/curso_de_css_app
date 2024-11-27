import "./style.css";
import { HiBackward } from "react-icons/hi2";
import { HiForward } from "react-icons/hi2";


export const Aula1 = () => {
  return (
    <div className="body">
      <div className="box">
        <HiBackward className="arrow left"/>
        <HiForward className="arrow right"/>
      </div>
    </div>
  )
}
