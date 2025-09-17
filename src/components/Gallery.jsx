import React from "react";

const Gallery = () => {
  const galleryImages = [
    "/images/pasta.jpg",
    "/images/salad.jpg",
    "/images/dessert.jpg",
    "/images/lemon-tart.jpg",
    "/images/chef.jpg",
    "/images/interior.jpg",
  ];

  return (
    <section
      className="gallery"
      style={{
        padding: "50px",
        textAlign: "center",
        backgroundColor: "#fffbe6",
        borderRadius: "15px",
        marginTop: "30px",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "40px", color: "#333" }}>Gallery</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "200px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            className="gallery-img"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
