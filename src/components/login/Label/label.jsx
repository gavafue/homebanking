import React from "react";
import './label.css';

const Label = ({ text }) => {
    return (
        <div className="labeldiv">
            <label> {text} </label>
        </div>)
}

export default Label;