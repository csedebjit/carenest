import React, { useState } from "react";


function BookingForm() {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    time: "",
    reason: "",
  });

  const [bookings, setBookings] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mobile || !formData.email || !formData.time || !formData.reason) {
      alert("Please fill all fields!");
      return;
    }
    setBookings([...bookings, formData]);
    setFormData({ mobile: "", email: "", time: "", reason: "" });
  };

  return (
    <div className="booking-container">
      <h2> Book Now </h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Mobile Number:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>

        <label>
          Booking Time:
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>

        <label>
          Reason for Booking:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Write your reason"
          />
        </label>

        <button type="submit">Book Now</button>
      </form>

      <div className="booking-list">
        <h3> Booking Details</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul>
            {bookings.map((b, index) => (
              <li key={index} className="booking-item">
                <p><strong>Mobile:</strong> {b.mobile}</p>
                <p><strong>Email:</strong> {b.email}</p>
                <p><strong>Time:</strong> {b.time}</p>
                <p><strong>Reason:</strong> {b.reason}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BookingForm;
