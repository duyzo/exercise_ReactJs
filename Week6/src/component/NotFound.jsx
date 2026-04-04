import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

export default function NotFound() {
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
    card: {
      maxWidth: 980,
      width: "100%",
      background: "white",
      borderRadius: 12,
      boxShadow: "0 8px 30px rgba(2,6,23,0.12)",
      display: "flex",
      gap: "2rem",
      padding: "2rem",
      alignItems: "center",
      justifyContent: "space-between",
    },
    content: {
      flex: 1,
    },
    code: {
      fontSize: 96,
      margin: 0,
      lineHeight: 1,
      color: "#0b1220",
    },
    title: {
      fontSize: 24,
      margin: "0.25rem 0 1rem",
      color: "#0b1220",
    },
    desc: {
      marginBottom: "1.25rem",
      color: "#334155",
    },
    button: {
      display: "inline-block",
      textDecoration: "none",
      background: "#4f46e5",
      color: "white",
      padding: "0.6rem 1rem",
      borderRadius: 8,
      fontWeight: 600,
      boxShadow: "0 6px 18px rgba(79,70,229,0.18)",
    },
    imageWrap: {
      width: 260,
      flexShrink: 0,
      textAlign: "center",
    },
    image: {
      maxWidth: "100%",
      display: "block",
    },
    small: {
      marginTop: 12,
      color: "#64748b",
      fontSize: 13,
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.content}>
          <h1 style={styles.code}>404</h1>
          <h2 style={styles.title}>Trang không tìm thấy</h2>
          <p style={styles.desc}>
            Xin lỗi — trang bạn đang tìm không tồn tại hoặc đã được di chuyển.
          </p>
          <Link to="/" style={styles.button} aria-label="Quay về trang chủ">
            Quay về trang chủ
          </Link>
          <div style={styles.small}>Hoặc kiểm tra lại đường dẫn URL.</div>
        </div>

        <div style={styles.imageWrap}>
          <img src={hero} alt="Not found illustration" style={styles.image} />
        </div>
      </div>
    </div>
  );
}
