import React from "react";
import Maria from "../Assets/img/Maria_Team.png";

const Team = () => {
  return (
    <div>
      <p>Our team is dedicated to bringing the best to our senior community</p>

      <div>
        <img src={Maria} alt="Maria Tanksley CEO and Founder">
          <p>Maria Tanksley</p>
          <p>CEO/Founder</p>
          <p>email@email.com</p>
        </img>
      </div>
    </div>
  );
};

export default Team;
