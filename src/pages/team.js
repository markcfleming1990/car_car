import React from "react";
import Maria from "../Assets/img/Maria_Team.png";
import Anthony from "../Assets/img/Anthony_Trivet.png";

const teamMembers = [
  {
    name: "Maria Tanksley",
    title: "CEO/Founder",
    email: "maria@email.com",
    img: Maria,
  },
  {
    name: "Anthony Trivet",
    title: "Director of Partner Acquisitions",
    email: "anthony@email.com",
    img: Anthony,
  },
];

const TeamMember = ({ member }) => {
  return (
    <div className="justify-center text-center px-4 md:px-0">
      <img
        src={member.img}
        alt={member.name}
        width="200"
        height="200"
        className="w-48 h-48 object-cover rounded-full bg-auto mx-auto mb-4 md:mb-0 md:mx-0"
      />
      <div>
        <p>{member.name}</p>
        <p>{member.title}</p>
        <p className="mb-4 md:mb-0">{member.email}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="bg-blue h-screen w-screen text-gold grid grid-cols-1 md:grid-cols-2 justify-items-center py-12">
      <h1 className="text-center text-3xl col-span-4">
        Our team is dedicated to bringing the best to our senior community
      </h1>

      {teamMembers.map((member) => (
        <TeamMember member={member} key={member.name} />
      ))}
    </div>
  );
};

export default Team;
