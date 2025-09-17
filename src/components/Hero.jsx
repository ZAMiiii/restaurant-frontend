import React from "react";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "50px",
        backgroundColor: "#fffbe6",
        borderRadius: "15px",
      }}
    >
      {/* Text Content */}
      <div style={{ maxWidth: "50%" }}>
        <h1 style={{ fontSize: "3rem", color: "#333" }}>Welcome to Little Lemon</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "15px", color: "#666" }}>
          Taste the freshness of our delicious Mediterranean dishes, made with love and the finest ingredients 🍋
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            backgroundColor: "#ffcc00",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Reserve a Table
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src="/images/hero-dish.jpg"
          alt="Delicious Dish"
          style={{ width: "400px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
        />
      </div>
    </section>
  );
};

export default Hero;
