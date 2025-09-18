import React from "react";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        padding: "60px 50px",
        backgroundColor: "#fffbe6",
        borderRadius: "20px",
        marginBottom: "60px",
      }}
    >
      {/* Text Content */}
      <div style={{ maxWidth: "55%" }}>
        <h1 style={{ fontSize: "3rem", color: "#222", marginBottom: "20px" }}>
          Welcome to Little Lemon
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color: "#555" }}>
          Taste the freshness of our delicious Mediterranean dishes — 
          handcrafted with love, the finest ingredients, and a touch of 🍋.
        </p>
        <div style={{ marginTop: "25px", display: "flex", gap: "15px" }}>
          <a
            href="/booking"
            style={{
              padding: "12px 25px",
              backgroundColor: "#ffcc00",
              color: "#333",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            Reserve a Table
          </a>
          <a
            href="/about"
            style={{
              padding: "12px 25px",
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src="/images/lemon-unsplash.jpg"
          alt="lemon-unsplash"
          style={{
            width: "400px",
            borderRadius: "20px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
