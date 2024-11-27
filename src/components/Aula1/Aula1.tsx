import { useState } from "react";
import "./style.css";
import { HiBackward } from "react-icons/hi2";
import { HiForward } from "react-icons/hi2";

export const Aula1 = () => {
  interface Colors {
    color: string;
  }

  const [index, setIndex] = useState(0);

  const colors: Colors[] = [
    { color: "red" },
    { color: "orange" },
    { color: "white" },
  ];

  function nextColor() {
    setIndex((prev) => (prev + 1) % colors.length);
  }

  function previousColor() {
    setIndex((prev) => (prev - 1 + colors.length) % colors.length);
  }

  return (
    <div className="body">
      <div className="box" style={{ backgroundColor: colors[index].color }}>
        <HiBackward className="arrow left" onClick={previousColor} />
        <HiForward className="arrow right" onClick={nextColor} />
      </div>
    </div>
  );
};
