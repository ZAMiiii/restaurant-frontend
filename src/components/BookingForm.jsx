import React, { useState, useRef } from "react";

const TIMES = ["17:00","18:00","19:00","20:00","21:00","22:00"];

export default function BookingForm(){
  const [data, setData] = useState({
    name:"", date:"", time:"17:00", guests:2, occasion:"", contact:""
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const liveRef = useRef();

  const todayISO = new Date().toISOString().split("T")[0];

  function validate(){
    const e = {};
    if(!data.name.trim()) e.name = "Please enter your name";
    if(!data.date) e.date = "Please choose a date";
    else if(data.date < todayISO) e.date = "Date cannot be in the past";
    if(!TIMES.includes(data.time)) e.time = "Choose a valid time";
    if(!Number(data.guests) || data.guests < 1 || data.guests > 10) 
      e.guests = "Guests must be between 1 and 10";

    // Contact validation
    if(!data.contact.trim()) {
      e.contact = "Please provide your email or phone";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10,15}$/;
      if(!(emailRegex.test(data.contact) || phoneRegex.test(data.contact))) {
        e.contact = "Enter a valid email or phone number";
      }
    }

    return e;
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setData(prev => ({...prev,[name]: name === "guests" ? Number(value) : value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if(Object.keys(eobj).length) {
      if(liveRef.current) liveRef.current.textContent = "Please fix the errors";
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const booking = {...data, id: Date.now()};
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    setConfirmed(booking);
    setShowModal(true);
    if(liveRef.current) liveRef.current.textContent = "Booking successful";
    setData({name:"",date:"",time:"17:00",guests:2,occasion:"",contact:""});
  }

  return (
    <>
      <div aria-live="polite" ref={liveRef} style={{height:18}}></div>

      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={data.name} onChange={handleChange} placeholder="Full name" />
        {errors.name && <small className="error" role="alert">{errors.name}</small>}

        <div className="booking-row">
          <div>
            <label htmlFor="date">Date</label>
            <input id="date" type="date" name="date" value={data.date} onChange={handleChange} min={todayISO} />
            {errors.date && <small className="error" role="alert">{errors.date}</small>}
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <select id="time" name="time" value={data.time} onChange={handleChange} aria-label="Select time slot">
              {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.time && <small className="error" role="alert">{errors.time}</small>}
          </div>
        </div>

        <div className="booking-row">
          <div>
            <label htmlFor="guests">Guests</label>
            <input id="guests" name="guests" type="number" min="1" max="10" value={data.guests} onChange={handleChange} />
            {errors.guests && <small className="error" role="alert">{errors.guests}</small>}
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <input id="occasion" name="occasion" value={data.occasion} onChange={handleChange} placeholder="Birthday, Anniversary..." />
          </div>
        </div>

        <label htmlFor="contact">Contact (Email or Phone)</label>
        <input 
          id="contact" 
          name="contact" 
          value={data.contact} 
          onChange={handleChange} 
          placeholder="you@example.com or 03001234567" 
        />
        {errors.contact && <small className="error" role="alert">{errors.contact}</small>}

        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button type="submit" className="btn">Confirm Booking</button>
          <button type="button" className="btn secondary" onClick={()=>{ 
            setData({name:"",date:"",time:"17:00",guests:2,occasion:"",contact:""}); 
            setErrors({}); 
          }}>
            Reset
          </button>
        </div>
      </form>

      {showModal && confirmed && (
        <div 
          className="modal-backdrop" 
          role="dialog" 
          aria-modal="true" 
          aria-label="Booking confirmation"
          onClick={() => { setShowModal(false); setConfirmed(null); }}
        >
          <div 
            className="modal" 
            onClick={e => e.stopPropagation()}  // modal ke andar click ignore
          >
            <h3>Booking Confirmed</h3>
            <p><strong>Name:</strong> {confirmed.name || "—"}</p>
            <p><strong>Date:</strong> {confirmed.date}</p>
            <p><strong>Time:</strong> {confirmed.time}</p>
            <p><strong>Guests:</strong> {confirmed.guests}</p>
            {confirmed.occasion && <p><strong>Occasion:</strong> {confirmed.occasion}</p>}
            <p><strong>Contact:</strong> {confirmed.contact}</p>
            <div style={{display:'flex',justifyContent:'flex-end',gap:8, marginTop:10}}>
              <button className="btn" onClick={()=>{ setShowModal(false); setConfirmed(null); }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
