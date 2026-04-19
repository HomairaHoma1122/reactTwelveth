import { useRef, useState } from "react"

export default function App(){

  const [arzish, setArzish] = useState(1);
  const value  = useRef(10);

  function clicked(){
    value.current++;
  }

  function handaling(){
    setArzish(arzish + 1)
  }
   return (
    <div style={
      {
       width: "100%",
       height: "100vh",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       gap: "9px",
       flexDirection: "column"
      }
    }>
      <div style={
        {
          display: "flex",
          gap: "12px"
        }
      }>
      <h1>{arzish}</h1>
      <button onClick={handaling}>Change</button>
      </div>
      <div style={
        {
          display: "flex",
          justifyContent: "center",
          gap: "9px"
        }
      }>
        <h1>{value.current}</h1>
        <button onClick={clicked}>Changing</button>
      </div>
    </div>
   )
}