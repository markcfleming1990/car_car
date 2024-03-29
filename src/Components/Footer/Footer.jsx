import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k3riwe9",
        "test_template",
        e.target,
        "uN27GwZC7oXU9NF4h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="w-screen max-w-screen-md">
      <footer className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-green p-8 text-gold w-screen">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Contact Us</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label className="block mb-2">
              <span className="text-blue">Full Name</span>
              <input
                type="text"
                className="mt-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="John Doe"
                name="fullName"
              />
            </label>
            <label className="block mb-2">
              <span className="text-blue">Email address</span>
              <input
                type="email"
                className="mt-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="john@example.com"
                name="emailAddress"
              />
            </label>
            <label className="block mb-2">
              <span className="text-blue">Comments or Questions</span>
              <textarea
                className="mt-1 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                rows="3"
                placeholder="Place questions here"
                name="message"
              ></textarea>
            </label>
            <button
              className="rounded bg-blue py-2 px-4 mt-2"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="text-center">
          <h1 className="text-3xl mb-4">Menu</h1>
          <nav>
            <ul className="text-blue grid grid-rows-4 gap-2 text-2xl">
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/partners">Partners</NavLink></li>
              <li><NavLink to="/resources">Resources</NavLink></li>
              <li><NavLink to="/team">Meet Our Team</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="text-center">
          <h1 className="text-3xl mb-4">Senior Resource Network</h1>
          <div className="text-blue text-1xl lg:text-2xl">
            <p>1657 Commerce Dr Suite 7B3</p>
            <p>South Bend, IN 46628</p>
            <p>seniorresourcenet@gmail.com</p>
            <p>877-324-8490</p>
          </div>
        </div>

        <div className="flex items-end text-center">
          <p>Made with ❤️ by MF Designs</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
