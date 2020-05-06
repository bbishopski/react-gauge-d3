import React, { useState } from "react";
import logo from "./logo.svg";
import Gauge from "./Gauge";
import Slider from "./Slider";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="App">
      <Gauge value={value} min={0} max={100} label="Speed" units="MPH"></Gauge>
      <Slider onChange={handleChange}></Slider>
    </div>
  );
}

export default App;
