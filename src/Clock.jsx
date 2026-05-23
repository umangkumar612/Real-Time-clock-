import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #141e30, #243b55)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "white",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            marginBottom: "20px",
            color: "#333",
            fontFamily: "Arial",
          }}
        >
          Digital Clock
        </h1>

        <h2
          style={{
            color: color,
            backgroundColor: "#ffe66d",
            width: "250px",
            padding: "20px",
            borderRadius: "12px",
            fontSize: "32px",
            fontWeight: "bold",
            fontFamily: "monospace",
            letterSpacing: "2px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          {time}
        </h2>
      </div>
    </div>
  );
};

export default Clock;