import React from "react";

function Modal(props) {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="bg-blue border-2 border-gold p-8 rounded-lg">
        <h2 className="text-gold text-center text-3xl">{props.title}</h2>
        <p className="text-gold mt-4">{props.body}</p>
        <div className="flex justify-between items-center mt-8">
          <button
            className="text-gold bg-green py-2 px-4 rounded-lg mr-4"
            onClick={props.onClose}
          >
            Close
          </button>
          <button
            className="text-gold bg-gold py-2 px-4 rounded-lg"
            onClick={() => {
              // Replace this with your own donate logic
              console.log("Donate button clicked!");
            }}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
