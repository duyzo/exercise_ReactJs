import React from "react";

export default function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#f8fafc",
     
      fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      color: "black",

    },
  };

  return (
    <div style={styles.page}>
      <h1 style={{ color: "black" }}>Welcome</h1>
     <div>
         <nav style={{ marginTop: "1rem" }}>
        <a href="/about" style={{ marginRight: "1rem", color: "#4f46e5", textDecoration: "none" }}>About</a>
        <a href="/contact" style={{ color: "#4f46e5", textDecoration: "none" }}>Contact</a>
      </nav>
     </div>
    </div>
  );
}
