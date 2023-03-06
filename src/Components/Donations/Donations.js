import React, { useState } from "react";
import Modal from "../Modal/Index.js";

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
    <ul>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );

  const seniorSmilePoints = ["Dental", "Dentures &amp; Partials", "X-rays"];

  const secondChancePoints = [
    "Empowerment &amp; Employment",
    "Food",
    "Housing",
  ];

  return (
    <div className="grid grid-row-2 px-4 py-6 pt-12 w-screen gap-6 h-auto border-green-500 bg-blue text-gold border-blue">
      <h1 className=" col-span-2 text-center text-3xl font-bold">
        We at Senior Resources Network have a variety of funds to help our
        Senior community in St. Joseph County.
      </h1>
      <div className="text-center text-2xl">
        <h2 className="text-center text-3xl font-bold">Senior Smile Fund</h2>
        <p className="text-left">
          A fund designated to help assist seniors with their dental needs, we
          work with local dentists to cover any outstanding costs for any dental
          procedure.
        </p>
        <button
          className="rounded-full py-2 px-6 bg-green text-gold"
          onClick={() => handleOpen("Senior Smile Fund", seniorSmilePoints)}
        >
          Learn More
        </button>
      </div>
      <div className="text-center text-2xl">
        <h2 className="text-center text-3xl font-bold">Second Chance Fund</h2>
        <p className="text-left">
          We at Senior Resource Network saw a need to help those making the
          transition from incarceration to a normal life. The Second Chance Fund
          is set up to help make the transition to a normal life.
        </p>
        <button
          className="rounded-full py-2 px-6 bg-green text-gold"
          onClick={() => handleOpen("Second Chance Fund", secondChancePoints)}
        >
          Learn More
        </button>
      </div>
      <div className="grid grid-row-2 justify-center">
        <p>
          Your donations go a long way towards helping our local senior
          community.
        </p>
        <button className="rounded-full py-2 px-12 bg-green text-gold">
          Donate
        </button>
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
