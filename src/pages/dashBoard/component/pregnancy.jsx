import React from 'react';
import '../styles/Pregnancy.css';

function PregnancyTrackerPage() {
  return (
    <div className="tracker-container"onClick={()=>{window.location.href = "/page8"}} >
      <h1 className="tracker-heading">Pregnancy Tracker</h1>
      <form className="tracker-form">
        <label htmlFor="due-date">Due Date</label>
        <input type="date" id="due-date" name="due-date" />

        <label htmlFor="weight">Weight (kg)</label>
        <input type="number" id="weight" name="weight" />

        <label htmlFor="blood-pressure">Blood Pressure</label>
        <input type="text" id="blood-pressure" name="blood-pressure" />

        <button type="submit" className="tracker-button">Track</button>
      </form>
    </div>
  );
}

export default PregnancyTrackerPage;
