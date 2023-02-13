import React from "react";

function Footer() {
  return (
    <div>
      <footer className="grid grid-cols-3 gap-2 content-start bg-green p-[60px]">
        <div className="rounded text-center text-gold p-auto">
          <h1 className="text-2xl">Contact Us</h1>
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
            ></textarea>
          </label>
          <button className="rounded bg-blue m-2 p-2">Submit</button>
        </div>

        <div className="text-center">
          <h1 className="text-2xl text-gold">Menu</h1>
          <div className="text-blue grid grid-rows-4 gap-2">
            <div>
              <button>Home</button>
            </div>
            <div>
              <button>About Us</button>
            </div>
            <div>
              <button>Partners</button>
            </div>
            <div>
              <button>Donations</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-gold text-center text-2xl">
            Senior Resource Network
          </h1>
          <div className="text-blue text-center">
            <p>1657 Commerce Dr Suite 7B3</p>
            <p>South Bend, IN 46628</p>
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
