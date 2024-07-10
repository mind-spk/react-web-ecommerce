import React from "react";

function Button(props) {
  return (
    <div>
      <button className="px-6 py-1 border-2 border-[#F4511F] text-[#F4511F] hover:bg-[#F4511F] hover:text-white transition-all rounded-full">{props.title}</button>
    </div>
  );
}

export default Button;
