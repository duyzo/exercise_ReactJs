import React from "react";

export default function About() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      background: "linear-gradient(135deg,#f8fafc,#eef2ff)",
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "#0f172a",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={{ color: "#0f172a" }}>About Us</h1>
    </div>
  );
}
