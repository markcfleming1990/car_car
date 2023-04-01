import React from "react";

function About() {
  return (
    <div className="bg-blue text-gold py-16 w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Our Mission</h1>
        </div>
        <div className="mt-10">
          <p className="text-xl lg:text-2xl xl:text-3xl px-4 py-4 lg:py-10">
            At Senior Resource Network, we refer trusted local professionals to
            our senior community. Our network consists of various service
            providers offering services in a variety of different areas
            including Medical, Financial, Legal, Home & Auto, and Personal
            services to meet your needs.
          </p>
          <p className="text-xl lg:text-2xl xl:text-3xl px-4 py-4 lg:py-10">
            Our senior focused partners are carefully curated to fulfill the
            unique needs of our senior community. We trust our partners to
            provide high-quality services to our senior community. If you'd like
            to know more please contact us below!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
