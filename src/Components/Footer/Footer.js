import React from "react";

function Footer() {
  return (
    <div>
      <footer className="grid grid-cols-3 content-start bg-green p-[60px]">
        <div>
          <h1 className="text-gold text-center">Contact Us</h1>
          <form className="grid justify-items-center grid-cols-2">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" className="" placeholder="Subject" />
            <button className="rounded-full px-2 bg-gold text-black text-center align-center">
              Submit
            </button>
          </form>
        </div>
        <div className="flex text-center">
          <h1 className="text-2xl text-gold">Menu</h1>
          <button>About Us</button>
          <button>Partners</button>
          <button>Donations</button>
        </div>
        <div>
          <h1>Senior Resource Network</h1>
          <p>1657 Commerce Dr Suite 7B3 South Bend, IN 46628 877-324-8490</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
