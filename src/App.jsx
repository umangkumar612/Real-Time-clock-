import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          width: "400px",
        }}
      >
        <h1
          style={{
            color: "#222",
            marginBottom: "25px",
            fontSize: "36px",
          }}
        >
          ⏰ React Digital Clock
        </h1>

        <p
          style={{
            marginBottom: "10px",
            color: "#555",
            fontSize: "18px",
          }}
        >
          Select Clock Color
        </p>

        <select
          onChange={(event) => setColor(event.target.value)}
          style={{
            padding: "12px",
            width: "220px",
            borderRadius: "10px",
            border: "2px solid #ccc",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "30px",
            outline: "none",
          }}
        >
          <option value={"red"}>Red</option>
          <option value={"black"}>Black</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
        </select>

        <Clock color={color} />
      </div>
    </div>
  );
}

export default App;