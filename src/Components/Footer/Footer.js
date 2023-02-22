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
    <div className="w-screen">
      <footer className="grid grid-cols-3 gap-2 content-start bg-green p-[60px]">
        <div className="rounded text-center text-gold p-auto">
          <h1 className="text-2xl">Contact Us</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label class="block">
              <span class="text-blue">Full Name</span>
              <input
                type="text"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-grey-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                placeholder="John Doe"
                name="fullName"
              />
            </label>
            <label class="block">
              <span class="text-blue">Email address</span>
              <input
                type="email"
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-800
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                placeholder="john@example.com"
                name="emailAddress"
              />
            </label>
            <label class="block">
              <span class="text-blue">Additional details</span>
              <textarea
                class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                rows="3"
                placeholder="Place questions here"
                name="message"
              ></textarea>
            </label>
            <button
              className="rounded bg-blue m-2 p-2"
              type="Submit"
              value="Send"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="text-center">
          <h1 className="text-2xl text-gold">Menu</h1>
          <div className="">
            <nav>
              <ul className="text-blue grid grid-rows-4 gap-2">
                <NavLink to="/about">About Us </NavLink>
                <NavLink to="/partners">Partners</NavLink>
                <NavLink to="/resources">Resources</NavLink>
                <NavLink to="/team">Meet Our Team</NavLink>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <h1 className="text-gold text-center text-2xl">
            Senior Resource Network
          </h1>
          <div className="text-blue text-center">
            <p>1657 Commerce Dr Suite 7B3</p>
            <p>South Bend, IN 46628</p>
            <p>seniorresourcenet@gmail.com</p>
            <p>877-324-8490</p>
          </div>
        </div>
        <div className="flex items-end text-center">
          <p>Made with ❤️ by MF Designs </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
