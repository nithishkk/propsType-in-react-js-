import React from "react";
import "./style.css";
import Componets from './Mycomponets'
const nithish ="nithish"
const number=1200; 
export default function App() {
  return (
    <div>
      <Componets message={nithish} num={number}/>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
