import React from 'react';
import '../styles/colour2.css';

function DecodeMyDischargePage() {
  return (
    <div className="discharge-container">
      <h1 className="discharge-heading">Decode My Discharge</h1>
      <form className="discharge-form">
        <label htmlFor="discharge-color">Discharge Color</label>
        <select id="discharge-color" name="discharge-color">
          <option value="clear">Clear</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="brown">Brown</option>
        </select>

        <label htmlFor="discharge-texture">Discharge Texture</label>
        <select id="discharge-texture" name="discharge-texture">
          <option value="thin">Thin</option>
          <option value="thick">Thick</option>
          <option value="creamy">Creamy</option>
          <option value="sticky">Sticky</option>
        </select>

        <label htmlFor="discharge-odor">Discharge Odor</label>
        <select id="discharge-odor" name="discharge-odor">
          <option value="none">None</option>
          <option value="mild">Mild</option>
          <option value="strong">Strong</option>
          <option value="fishy">Fishy</option>
          <option value="yeasty">Yeasty</option>
        </select>

        <button type="submit" className="discharge-button">Decode</button>
      </form>
    </div>
  );
}

export default DecodeMyDischargePage;
