import React from "react";

const Gallery = () => {
  const galleryImages = [
    { src: "/images/amb (1).jpg", caption: "Cozy Interior" },
    { src: "/images/amb (6).jpg", caption: "Fresh Deal" },
    { src: "/images/amb (4).jpg", caption: "Sweet Dessert" },
    { src: "/images/nvfood-unsplash.jpg", caption: "Delicious Food" },
    { src: "/images/amb (2).jpg", caption: "Our Chef" },
      { src: "/images/amb (5).jpg", caption: "Fire" },
    { src: "/images/ambienice g-unsplash.jpg", caption: "Cozy Enviroment" },
      { src: "/images/amb (3).jpg", caption: "Chef" },
  ];

  return (
    <section
      className="gallery"
      style={{
        padding: "50px 20px",
        textAlign: "center",
        borderRadius: "15px",
        marginTop: "30px",
        background: "linear-gradient(135deg, #FFF5E1 0%, #FFD6A5 100%)",
      }}
    >
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.caption} />
            <div className="overlay">
              <span className="caption">{img.caption}</span>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .gallery-title {
            font-size: 2.5rem;
            margin-bottom: 40px;
            background: linear-gradient(90deg, #FF6A88, #FF99AC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: textFade 2s ease-in-out infinite alternate;
          }

          @keyframes textFade {
            0% { opacity: 0.7; transform: translateY(0); }
            100% { opacity: 1; transform: translateY(-5px); }
          }

          .gallery-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px;
          }

          .gallery-item {
            position: relative;
            width: 200px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            cursor: pointer;
            animation: floatAnim 6s ease-in-out infinite;
          }

          .gallery-item img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.5s ease, filter 0.5s ease;
            display: block;
          }

          @keyframes floatAnim {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
  background: linear-gradient(135deg, rgba(rgba(255,160,122,0.3) → rgba(255,127,80,0.3)));
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s ease, backdrop-filter 0.5s ease;
            backdrop-filter: blur(0px);
          }

          .caption {
            color: #fff;
            font-size: 1.1rem;
            font-weight: 500;
            text-align: center;
            padding: 5px 10px;
            background: rgba(0,0,0,0.4);
            border-radius: 8px;
          }

          .gallery-item:hover img {
            transform: scale(1.1) rotate(1.5deg);
            filter: brightness(1.1);
          }

          .gallery-item:hover {
            box-shadow: 0 15px 25px rgba(0,0,0,0.25);
            transform: translateY(-5px);
          }

          .gallery-item:hover .overlay {
            opacity: 1;
            backdrop-filter: blur(4px);
          }

          @media (max-width: 768px) {
            .gallery-item {
              width: 45%; 
            }
          }

          @media (max-width: 480px) {
            .gallery-item {
              width: 100%; 
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;
