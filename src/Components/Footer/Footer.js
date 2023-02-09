import React from "react";

function Footer() {
  return (
    <div>
      <footer className="grid grid-cols-3 content-start bg-green p-[60px]">
        <div>
          <h1 className="text-gold text-center text-2xl">Contact Us</h1>
          <form className="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <button className="rounded-full">Submit</button>
          </form>
        </div>

        <div className="text-center">
          <h1 className="text-2xl text-gold">Menu</h1>
          <div className="text-gold grid grid-rows-4 gap-2">
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
          <div className="text gold text-center">
            <p>1657 Commerce Dr Suite 7B3</p>
            <p>South Bend, IN 46628</p>
            <p>877-324-8490</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
