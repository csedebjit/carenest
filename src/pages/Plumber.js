import { useState } from 'react';
import './Plumber.css';
function Plumber() {
  const drain_cleaning=()=>{
    alert("Booking for Drain Cleaning ");
  }
  const leak_detection=()=>{
    alert("Booking for Leak Detection ");
  }
  const water_heater_repair=()=>{
    alert("Booking for Water Heater Repair ");
  }
  const pipe_repair=()=>{
    alert("Booking for Pipe Repairing / Replacement ");
  }
  const bathroom=()=>{
    alert("Booking for Bathroom / Kitchen ");
  }
  const handleClick=()=>{
    alert("Booking Confirmed ");

  }
return (
    <>
    <div className='main'>
      <div className='header'>
        <h2>Housekeeper</h2>
      </div>
      <div className='content'>
      <div className='card'>
        <button onClick={()=>drain_cleaning()}>
          <img src='/image/drain.jpg' alt="Drain Cleaning"/><h3>Drain Cleaning</h3>
        </button>
        <button onClick={()=>leak_detection()}>
          <img src='/image/leak.jpg' alt="Leak Detection" /><h3>Leak Detection</h3>
        </button>
        <button onClick={()=>water_heater_repair()}>
          <img src='/image/water_heater.jpg' alt="Water Heater Repairing" /><h3>Water Heater Repairing</h3>
        </button>
        <button onClick={()=>pipe_repair()}>
          <img src='/image/pipe.jpg' alt="Pipe Repairing" /><h3>Pipe Repairing / Replacement</h3>
        </button>
        <button onClick={()=>bathroom()}>
          <img src='/image/kitchen.jpg' alt="Bathroom / Kitchen" /><h3>Bathroom / Kitchen</h3>
        </button>
        </div>
      </div>
      <div className='booking'>
        <button onClick={()=>handleClick()}><h3>Book Now</h3></button>
      </div>
    </div>
    </>
);
}

export default Plumber;
