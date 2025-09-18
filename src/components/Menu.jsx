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
        padding: "50px 20px",
        textAlign: "center",
        borderRadius: "15px",
        marginTop: "30px",
        background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)", // gradient background
      }}
    >
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="image-container">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <style>
        {`
          .menu-title {
            font-size: 2.5rem;
            margin-bottom: 40px;
            color: #333;
            background: linear-gradient(90deg, #FF6A88, #FF99AC);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: textFade 2s ease-in-out infinite alternate;
          }

          @keyframes textFade {
            0% { opacity: 0.7; transform: translateY(0); }
            100% { opacity: 1; transform: translateY(-5px); }
          }

          .menu-items {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 30px;
          }

          .menu-item {
            width: 220px;
            text-align: center;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: transform 0.5s cubic-bezier(.03,.98,.52,.99), box-shadow 0.5s;
            cursor: pointer;
            background: #fff;
            perspective: 1000px;
          }

          .menu-item .image-container {
            overflow: hidden;
          }

          .menu-item img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .menu-item:hover img {
            transform: scale(1.1) rotate(2deg);
          }

          .menu-item:hover {
            box-shadow: 0 15px 25px rgba(0,0,0,0.25);
            transform: rotateX(3deg) rotateY(3deg) translateY(-5px);
          }

          .menu-item h3 {
            margin-top: 15px;
            color: #333;
            transition: color 0.3s ease;
          }

          .menu-item p {
            color: #666;
            margin-top: 5px;
          }

          .menu-item:hover h3 {
            color: #FF6A88; /* subtle color change on hover */
          }

          /* Responsive for tablets and mobiles */
          @media (max-width: 768px) {
            .menu-item {
              width: 45%; /* 2 items per row */
            }
          }

          @media (max-width: 480px) {
            .menu-item {
              width: 100%; /* 1 item per row */
            }
          }
        `}
      </style>
    </section>
  );
};

export default Menu;
