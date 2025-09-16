import React from "react";

export default function About(){
  return (
    <section className="container">
      <h1>About MyRestaurant</h1>
      <p style={{color:'#6c757d'}}>We are a passionate team cooking seasonal dishes with love.</p>

      <div className="cards" style={{marginTop:18}}>
        <div className="card">
          <h4>Our Story</h4>
          <p style={{color:'#6c757d'}}>Started in 2025, our mission is to celebrate flavours.</p>
        </div>
        <div className="card">
          <h4>Our Chefs</h4>
          <p style={{color:'#6c757d'}}>Experienced chefs crafting modern comfort food.</p>
        </div>
        <div className="card">
          <h4>Sustainability</h4>
          <p style={{color:'#6c757d'}}>We minimize waste and support local farmers.</p>
        </div>
      </div>
    </section>
  );
}
