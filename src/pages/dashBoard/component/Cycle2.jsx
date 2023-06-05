import React, { useState } from "react";
import "../styles/Cycle2.css";

function Cycle2() {
  const [startDate, setStartDate] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [nextPeriodDate, setNextPeriodDate] = useState("");

  const calculateNextPeriodDate = () => {
    const startDateObject = new Date(startDate);
    const nextPeriodDateObject = new Date(
      startDateObject.setDate(startDateObject.getDate() + parseInt(cycleLength))
    );
    setNextPeriodDate(nextPeriodDateObject.toDateString());
  };

  return (
    <div className="CycleApp">
      <div className="cycle"></div>
      <div className="down">
        <h3>1. WHEN DID YOUR LAST PERIOD START?</h3>
        <input
          name="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <h3>2. HOW MANY DAYS DOES YOUR LAST PERIOD LAST?</h3>
        <input
          name="cycleLength"
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
        />
        <h3>HOW LONG IS YOUR CYCLE?</h3>
        <input
          name="cycleLength"
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
        />
        <button onClick={calculateNextPeriodDate}>Calculate Next Period Date</button>
        {nextPeriodDate && <p>Next period date is: {nextPeriodDate}</p>}
      </div>
    </div>
  );
}

export default Cycle2;
