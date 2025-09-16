import React from "react";
import BookingForm from "../components/BookingForm.jsx";

export default function BookingPage(){
  return (
    <section className="container">
      <h1>Reserve a Table</h1>
      <p style={{color:'#6c757d'}}>Select date, time and number of guests.</p>
      <BookingForm />
    </section>
  );
}
