import React from "react";

export default function SuccessAlert() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f0fdf4",
          //   borderLeft: "4px solid ",
          //   borderColor: "#22c55e",
          padding: "1px 30px",
          width: "200px",
          display: "flex",
          alignItems: "center",
          //   justifyContent: "center",
          borderRadius: "10px",
          margin: "20px auto 0px auto",
        }}
        // className="bg-orange-900 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <div
          style={{
            borderRadius: "150px",
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
          <p>login succussfully! 😊</p>
        </div>
      </div>
    </>
  );
}
