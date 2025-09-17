import React from "react";

const Menu = () => {
  const menuItems = [
    { name: "Pasta", image: "/images/pasta.jpg", price: "$12" },
    { name: "Salad", image: "/images/salad.jpg", price: "$8" },
    { name: "Dessert", image: "/images/dessert.jpg", price: "$6" },
    { name: "Lemon Tart", image: "/images/lemon-tart.jpg", price: "$7" },
  ];

  return (
    <section
      className="menu"
      style={{
        padding: "50px",
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: "15px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", color: "#333" }}>Our Menu</h2>
      
      <div
        className="menu-items"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={{
              width: "220px",
              textAlign: "center",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              padding: "15px",
              transition: "transform 0.3s",
            }}
            className="menu-item"
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3 style={{ marginTop: "15px", color: "#333" }}>{item.name}</h3>
            <p style={{ color: "#666", marginTop: "5px" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
