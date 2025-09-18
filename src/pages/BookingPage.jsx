import React from "react";
import BookingForm from "../components/BookingForm.jsx";

export default function BookingPage() {
  return (
    <section className="container" style={{ padding: "40px 20px" }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "10px" }}>
        Reserve a Table
      </h1>
      <p style={{ color: "#6c757d", marginBottom: "30px" }}>
        Select date, time, and number of guests.
      </p>
      <BookingForm />
    </section>
  );
}
