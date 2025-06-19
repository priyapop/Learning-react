import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function RandomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = RandomColorUtility(256); //256 max length you can pass
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);//no space btn rgb It should be exactly like rgb(123,45,67).
  }
  //useEffect(<function>, <dependency>)
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
 else handleCreateRandomHexColor();},[typeOfColor]
  );

  return (
    //the style prop is used to apply inline styles to a JSX element — similar to the style attribute in HTML, but with JavaScript object syntax.
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create rgb Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "40px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor ==='rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
