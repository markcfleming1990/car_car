import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center text-center w-auto h-[400px] p-60 bg-white">
      <h1 className="text-3xl py-2"> Welcome to Car Car Used Cars</h1>
      <div className="flex justify-center p-4 text-2xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus
          ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam
          maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean
          sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi
          tristique justo vel turpis sollicitudin, et tristique velit convallis.
          In hac habitasse platea dictumst. Phasellus mattis nunc sed orci
          consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet
          ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
      <div className="grid grid-cols-1 px-4 py-16">
        <button className="rounded-full bg-slate-400 py-4 px-16 text-2xl">
          About Us
        </button>
      </div>
    </div>
  );
}

export default About;
