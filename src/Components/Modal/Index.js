import React from "react";

function Modal(props) {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="bg-blue border-2 border-gold p-8 rounded-lg">
        <h2 className="text-gold text-center text-3xl">{props.title}</h2>
        <p className="text-gold mt-4">{props.body}</p>
        <div className="flex justify-center mt-8">
          <button
            className="text-gold bg-green py-2 px-4 rounded-lg"
            onClick={props.onClick}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
