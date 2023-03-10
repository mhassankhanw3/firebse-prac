import React from "react";

export default function SuccessAlert() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f0fdf4",
          padding: "10px 30px",
          width: "200px",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          margin: "20px auto 0px auto",
        }}
        role="alert"
      >
        <div
          style={{
            borderRadius: "50px",
            height: "30px",
            width: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#dcfce7",
            color: "#134e4a",
            fontSize: "18px",
          }}
        >
          i
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p style={{ color: "black" }}>login succussfully! 😊</p>
        </div>
      </div>
    </>
  );
}
