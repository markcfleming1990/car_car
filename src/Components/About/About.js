import React from "react";

function About() {
  return (
    <div className="grid grid-cols-2 bg-blue w-screen">
      <h1 className="col-span-2 text-center text-3xl text-gold">Our Mission</h1>
      <p className="col-span-2 text-center text-xl lg:text-2xl xl:text-3xl text-gold px-4 py-[98px] my-[98px] lg:py-20">
        At Senior Resource Network, we refer trusted local professionals to our
        senior community. Our network consists of various service providers
        offering services in a variety of different areas including Medical,
        Financial, Legal, Home & Auto, and Personal services to meet your needs.
      </p>
    </div>
  );
}

export default About;
