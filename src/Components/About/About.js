import React from "react";
import lifeplanning from '../../Assets/img/life_planning.png';
import networking from '../../Assets/img/Networking.png';
import customSolutions from '../../Assets/img/custom_soutions.png'

function About() {
  return (
    <div className="flex justify-center text-center w-auto h-[100px] py-10 bg-white">
      
      <div className="grid grid-cols-1 justify-center">
      <h1 className="text-2xl"> All in One Life Planning</h1>
        <p className=''>
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
      <div className="grid grid-cols-3 gap-8 px-6 py-16">
        <div>
        <img src={lifeplanning} alt='grid about us' />
          Life planning
        </div>
        <div>
        <img src={networking} alt='grid about us' />
          Business Networking
        </div>
        <div>
        <img src={customSolutions} alt='grid about us' />
          Custom Solutions
        </div>
      </div>
    </div>
  );
}

export default About;
