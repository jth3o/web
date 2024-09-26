import React from 'react';
import './Button.css';

const Button = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button className="custom-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
