import './Electrician.css';
import { useState } from 'react';
function Electrician() {
  const light=()=>{
    alert("Booking for Lights");
  }
  const fan=()=>{
    alert("Booking for Fans");
  }
  const tv=()=>{
    alert("Booking for TV");
  }
  const ac=()=>{
    alert("Booking for AC");
  }
  const fridge=()=>{
    alert("Booking for Refrigerator");
  }
  const washingMachine=()=>{
    alert("Booking for Washing Machine");
  }
  const wiring=()=>{
    alert("Booking for Wiring");
  }
  const ev=()=>{
    alert("Booking for EV Charger Installation");
  }
  const handleClick=()=>{
    alert("Booking Confirmed ");
  
  }
  return (
    <>
    <div className='main'>
      <div className='header'>
        <h2>Electrician</h2>
      </div>
      <div className='content'>
        <div className='card'>
        <button onClick={()=>light()}>
          <img src='/image/light.jpg' alt="Light"/><h3>Lights</h3>
        </button>
        <button onClick={()=>fan()}>
          <img src='/image/fan.jpg' alt="Fan" /><h3>Fans</h3>
        </button>
        <button onClick={()=>tv()}>
          <img src='/image/tv.jpg' alt="TV" /><h3>TV</h3>
        </button>
        </div>

        <div className='card'>
        <button onClick={()=>ac()}>
          <img src='/image/ac.jpg' alt="AC" /><h3>AC</h3>
        </button>
        <button onClick={()=>fridge()}>
          <img src='/image/refrigerator.jpg' alt="Refrigerator" /><h3>Refrigerator</h3>
        </button>
        <button onClick={()=>washingMachine()}>
          <img src='/image/washing_machine.jpg' alt="Washing Machine" /><h3>Washing Machine</h3>
        </button>
        </div>

        <div className='card'>
        <button onClick={()=>wiring()}>
          <img src='/image/wiring.jpg' alt="Wiring" /><h3>Wiring</h3>
        </button>
        <button onClick={()=>ev()}>
          <img src='/image/ev_charger.jpg' alt="EV Charger" /><h3>EV Charger Installation</h3>
        </button>
        </div>
        <div className='booking'>
          <button onClick={()=>handleClick()}><h3>Book Now</h3></button>
        </div>
        

      </div>
    </div>
    </>                                                                         
  );
}

export default Electrician;
