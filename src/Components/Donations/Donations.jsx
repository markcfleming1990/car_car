import React, { useState } from "react";
import Modal from "../Modal/Index.jsx";

function Donation() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", body: "" });

  const handleClose = () => setShowModal(false);
  const handleOpen = (title, body) => {
    const content = generateBulletPoints(body);
    setModalContent({ title, body: content });
    setShowModal(true);
  };

  const generateBulletPoints = (points) => (
    <ul className="list-disc pl-8">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );

  const seniorSmilePoints = ["Dental", "Dentures & Partials", "X-rays"];

  const secondChancePoints = ["Empowerment & Employment", "Food", "Housing"];

  return (
    <div className="grid grid-cols-2 px-8 py-6 md:px-16 md:py-12 bg-blue text-gold w-screen w-screen-sm">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          We at Senior Resources Network have a variety of funds to help our
          Senior community in St. Joseph County.
        </h1>
        <div className="mb-12">
          <div className="text-3xl font-bold mb-2">Senior Smile Fund</div>
          <p className="text-lg mb-4">
            A fund designated to help assist seniors with their dental needs, we
            work with local dentists to cover any outstanding costs for any
            dental procedure.
          </p>
          <button
            className="rounded-full py-2 px-6 bg-green text-gold"
            onClick={() => handleOpen("Senior Smile Fund", seniorSmilePoints)}
          >
            Learn More
          </button>
        </div>
        <div>
          <div className="text-3xl font-bold mb-2">Second Chance Fund</div>
          <p className="text-lg mb-4">
            We at Senior Resource Network saw a need to help those making the
            transition from incarceration to a normal life. The Second Chance
            Fund is set up to help make the transition to a normal life.
          </p>
          <button
            className="rounded-full py-2 px-6 bg-green text-gold"
            onClick={() => handleOpen("Second Chance Fund", secondChancePoints)}
          >
            Learn More
          </button>
        </div>
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
