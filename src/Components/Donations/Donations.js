import React, { useState } from "react";

function Donation() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    icon: "",
    text: "",
  });

  const handleLearnMoreClick = (content) => {
    setShowModal(true);
    setModalContent(content);
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
            handleLearnMoreClick({
              title: "Senior Smile Fund",
              icon: "😀",
              text: "The Senior Smile Fund is dedicated to helping seniors with their dental needs by covering outstanding costs for dental procedures in partnership with local dentists.",
            })
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
            handleLearnMoreClick({
              title: "Second Chance Fund",
              icon: "🤝",
              text: "The Second Chance Fund is dedicated to helping individuals who are making the transition from incarceration to a normal life. The fund provides support and resources to help them make the transition successfully.",
            })
          }
        >
          Learn More
        </button>
      </div>
      <div>
        <p>
          your donations go a long way towards helping our local senior
          community
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="bg-white rounded-lg w-1/2">
            <div className="flex flex-col items-center justify-center p-8">
              <div className="text-3xl">{modalContent.icon}</div>
              <h2 className="text-2xl font-bold my-4">{modalContent.title}</h2>
              <p>{modalContent.text}</p>
              <button
                className="rounded-full py-2 px-6 bg-green text-gold mt-4"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Donation;
