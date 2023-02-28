import React, { useState } from "react";
import Modal from "../Modal/Index.js";

function Donation() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleClose = () => setShowModal(false);
  const handleOpen = (title, body) => {
    let content = body;
    if (title === "Senior Smile Fund") {
      content = (
        <ul>
          <li>Dental</li>
          <li>Dentures &amp; Partials</li>
          <li>X-rays</li>
        </ul>
      );
    } else if (title === "Second Chance Fund") {
      content = (
        <ul>
          <li>Empowerment &amp; Employment</li>
          <li>Food</li>
          <li>Housing</li>
        </ul>
      );
    }
    setModalContent({ title, body: content });
    setShowModal(true);
  };

  return (
    <div className="grid grid-row-2 px-4 py-10 w-screen gap-6 h-auto border-green-500 bg-blue text-gold border-blue">
      <h1 className="col-span-2 text-center text-3xl">
        We at Senior Resources Network have a variety of funds to help our
        Senior community in St. Joseph County.
      </h1>
      <div className="text-center text-2xl">
        <h2>Senior Smile Fund</h2>
        <p className="text-left">
          A fund designated to help assist seniors with their dental needs, we
          work with local dentists to cover any outstanding costs for any dental
          procedure.
        </p>
        <button
          className="rounded-full py-2 px-6 bg-green text-gold"
          onClick={() =>
            handleOpen(
              "Senior Smile Fund",
              "This is information about the Senior Smile Fund."
            )
          }
        >
          Learn More
        </button>
      </div>
      <div className="text-center text-2xl">
        <h2 className="text-bold">Second Chance Fund</h2>
        <p className="text-left">
          We at Senior Resource Network saw a need to help those making the
          transition from incarceration to a normal life. The Second Chance Fund
          is set up to help make the transition to a normal life.
        </p>
        <button
          className="rounded-full py-2 px-6 bg-green text-gold"
          onClick={() =>
            handleOpen(
              "Second Chance Fund",
              "This is information about the Second Chance Fund."
            )
          }
        >
          Learn More
        </button>
      </div>
      <div className="">
        <p>
          Your donations go a long way towards helping our local senior
          community.
        </p>
      </div>
      {showModal && (
        <Modal
          title={modalContent.title}
          body={modalContent.body}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default Donation;
