import React from "react";

export default function Home(){
  return (
    <section className="container">
      <div className="hero">
        <div className="hero-grid">
          <div>
            <h1>Delicious meals. Charming atmosphere.</h1>
            <p>Reserve a table and join us for a memorable dining experience — fresh ingredients, handcrafted dishes, warm service.</p>
            <div className="cta-row">
              <a className="btn" href="/booking">Book a Table</a>
              <a className="btn secondary" href="/about">Learn More</a>
            </div>
          </div>
          <div>
            <div className="card" style={{textAlign:'center'}}>
              <h4>Today's Special</h4>
              <p style={{color:'#6c757d'}}>Grilled salmon with seasonal vegetables</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <h4>Cozy Interior</h4>
          <p style={{color:'#6c757d'}}>A relaxed space perfect for family and friends.</p>
        </div>
        <div className="card">
          <h4>Fresh Ingredients</h4>
          <p style={{color:'#6c757d'}}>We source locally and cook daily.</p>
        </div>
        <div className="card">
          <h4>Private Events</h4>
          <p style={{color:'#6c757d'}}>Book for birthdays & special occasions.</p>
        </div>
      </div>
    </section>
  );
}
