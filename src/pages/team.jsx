import React from "react";
import Maria from "../Assets/img/Maria_Team.png";

const teamMembers = [
  {
    name: "Maria Tanksley",
    title: "CEO/Founder",
    email: "maria@email.com",
    img: Maria,
  },
];

const TeamMember = ({ member }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12">
      <img
        src={member.img}
        alt={member.name}
        width="200"
        height="200"
        className="w-48 h-48 object-cover rounded-full mb-4"
      />
      <div className="flex flex-col items-center">
        <p className="font-bold text-lg">{member.name}</p>
        <p className="text-blue">{member.title}</p>
        <p className="text-gold mb-4">{member.email}</p>
        <button className="bg-green py-2 px-6 text-gold rounded-lg">
          Contact Me
        </button>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="bg-blue h-screen w-screen text-gold py-12">
      <h1 className="text-center text-3xl mb-12">
        Our team is dedicated to bringing the best to our senior community
      </h1>
      <div className="flex flex-wrap justify-center gap-12">
        {teamMembers.map((member) => (
          <TeamMember member={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default Team;
