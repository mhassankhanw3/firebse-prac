import React from "react";

export default function FailedAlert({ msg }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#fef2f2",
          padding: "20px 20px",
          width: "500px",
          display: "flex",
          alignItems: "flex-start",
          borderRadius: "10px",
          margin: "40px auto 0px auto",
        }}
        role="alert"
      >
        <div
          style={{
            borderRadius: "50px",
            height: "27px",
            width: "30px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fecaca",
            color: "#111827",
            fontSize: "18px",
          }}
        >
          !
        </div>
        <div style={{ marginLeft: "10px", color: "#991b1b" }}>{msg}</div>
      </div>
    </>
  );
}
