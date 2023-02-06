import React from "react";

function Footer() {
  return (
    <div className="flex bg-green  ">
      <footer>
        <h1 className="text-gold text">Contact Us</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <button className="rounded-full px-2 bg-gold text-black">
            Submit
          </button>
        </form>
        <section>
          <h1>Senior Resource Network</h1>
          <p>1657 Commerce Dr Suite 7B3 South Bend, IN 46628 877-324-8490</p>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
