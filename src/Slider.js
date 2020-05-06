import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "styled-components";

const StyledSlider = style.input`
-webkit-appearance: none;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  border-radius: 25px;
  
  -webkit-transition: .2s;
  transition: opacity .2s;
  :hover {
    opacity: 1;
  }
  ::-webkit-slider-thumb {
    border-radius: 50%;
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
  }
`;

const Slider = (props) => {
  const [value, setValue] = useState(props.initialValue);
  const handleChange = (e) => {
    e.preventDefault();

    // Change value on slider
    setValue(e.target.value);

    // Notify parent that value changed
    props.onChange(e.target.value);
  };

  return (
    <>
      <div class="slidecontainer">
        <span>{props.min}</span>
        <StyledSlider
          type="range"
          min={props.min}
          max={props.max}
          value={value}
          onChange={handleChange}
        />
        <span>{props.max}</span>
      </div>
    </>
  );
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  initialValue: 0,
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Slider;
