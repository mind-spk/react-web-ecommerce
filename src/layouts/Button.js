import React from "react";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.to);
  };

  return (
    <div>
      <button 
        onClick={handleClick} 
        className="px-6 py-1 border-2 border-[#F4511F] text-[#F4511F] hover:bg-[#F4511F] hover:text-white transition-all rounded-full"
      >
        {props.title}
      </button>
    </div>
  );
}

export default Button;
