import React, { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0078D4, #00A4EF)",
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
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h1
          style={{
            color: "#0078D4",
            marginBottom: "10px",
          }}
        >
          ✈ Flight Schedule
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Select your travel date below
        </p>

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={() => alert("It works!")}
          style={{
            marginTop: "25px",
            padding: "12px 24px",
            backgroundColor: "#0078D4",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          Continue
        </button>

        {selectedDate && (
          <p
            style={{
              marginTop: "15px",
              color: "#444",
              fontSize: "14px",
            }}
          >
            Selected Date: <strong>{selectedDate}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;