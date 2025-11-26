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
    <div className="w-[400px] mx-auto my-[40px] p-[25px] rounded-[12px]
            bg-[#f7f9fc] shadow-[0_4px_10px_rgba(0,0,0,0.1)]
            font-sans">
      <h2 className="text-center"> Book Now </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
        <label class="flex flex-col font-semibold">
          Mobile Number:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
          />
        </label>

        <label class="flex flex-col font-semibold">
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>

        <label class="flex flex-col font-semibold">
          Booking Time:
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>

        <label class="flex flex-col font-semibold">
          Reason for Booking:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Write your reason"
          />
        </label>

        <button type="submit" class="p-[10px] bg-[#4b7bec] text-white text-[16px] rounded-[6px]
         cursor-pointer transition-colors duration-300
         hover:bg-[#3867d6]">Book Now</button>
      </form>

      <div className="mt-5">
        <h3> Booking Details</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          <ul>
            {bookings.map((b, index) => (
              <li key={index} className="bg-white p-[12px] mb-[10px] rounded-[8px] border border-[#eee]">
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
