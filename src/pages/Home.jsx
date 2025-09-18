import React from "react";
import Hero from "../components/Hero.jsx";
import Menu from "../components/Menu.jsx";
import Gallery from "../components/Gallery.jsx";

export default function Home() {
  return (
    <section className="home-section">
      {/* Hero Section */}
      <Hero />

      {/* Feature Cards */}
      <div
        className="cards"
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "60px",
          marginTop: "60px",
        }}
      >
        <div
          className="card"
          style={{
            flex: 1,
            padding: "25px",
            background: "#fff8e1",
            borderRadius: "14px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🍷</div>
          <h4 style={{ color: "#c47f17", marginBottom: "8px" }}>
            Cozy Interior
          </h4>
          <p style={{ color: "#555" }}>
            A warm, inviting space — perfect for family dinners or casual nights
            out.
          </p>
        </div>

        <div
          className="card"
          style={{
            flex: 1,
            padding: "25px",
            background: "#f1f8e9",
            borderRadius: "14px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🥗</div>
          <h4 style={{ color: "#2e7d32", marginBottom: "8px" }}>
            Fresh Ingredients
          </h4>
          <p style={{ color: "#555" }}>
            Locally sourced produce, prepared daily for peak freshness and
            flavor.
          </p>
        </div>

        <div
          className="card"
          style={{
            flex: 1,
            padding: "25px",
            background: "#fce4ec",
            borderRadius: "14px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🎉</div>
          <h4 style={{ color: "#ad1457", marginBottom: "8px" }}>
            Private Events
          </h4>
          <p style={{ color: "#555" }}>
            Celebrate birthdays, anniversaries, or special occasions with us.
          </p>
        </div>
      </div>

      {/* Menu Section */}
      <Menu />

      {/* Gallery Section */}
      <Gallery />
    </section>
  );
}
