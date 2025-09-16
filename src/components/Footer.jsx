import React from "react";

export default function Footer(){
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <p style={{marginBottom:6}}>© {new Date().getFullYear()} MyRestaurant</p>
        <small style={{color:'#6c757d'}}>Address · Phone · email@example.com</small>
      </div>
    </footer>
  );
}
