import { useState } from 'react';
import './Housekeeper.css';
function Housekeeper() {
  const normal_cleaning=()=>{
    alert("Booking for Normal Cleaning");
  }
  const deep_cleaning=()=>{
    alert("Booking for Deep Cleaning");
  }
  const dish_washing=()=>{
    alert("Booking for Dish Washing");
  }
  const laundry=()=>{
    alert("Booking for Laundry");
  }
  const ironing=()=>{
    alert("Booking for Ironing");
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
        <button onClick={()=>normal_cleaning()}>
          <img src='/image/cleaning.jpg' alt="Cleaning"/><h3>Normal Cleaning</h3>
        </button>
        <button onClick={()=>deep_cleaning()}>
          <img src='/image/deep_cleaning.jpg' alt="Deep Cleaning" /><h3>Deep Cleaning</h3>
        </button>
        <button onClick={()=>dish_washing()}>
          <img src='/image/dish_washing.jpg' alt="Dish Washing" /><h3>Dish Washing</h3>
        </button>
        <button onClick={()=>laundry()}>
          <img src='/image/laundry.jpg' alt="Laundry" /><h3>Laundry</h3>
        </button>
        <button onClick={()=>ironing()}>
          <img src='/image/ironing.jpg' alt="Ironing" /><h3>Ironing</h3>
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

export default Housekeeper;
