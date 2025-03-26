import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputFon = ({label, type, name, value, onChange}) => {
    return(
        <>
        <label className="form-label">{label}</label>
        <input
          type={type}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
        </>
    )
   }
 
export default InputFon;