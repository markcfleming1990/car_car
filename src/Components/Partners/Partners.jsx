import React from "react";
import { Link } from "react-router-dom";
import Personal from "../../Assets/img/personal.png";

function Partners() {
  const services = [
    { name: "Medical", id: "Medical" },
    { name: "Financial", id: "Financial" },
    { name: "Legal", id: "Legal" },
    { name: "Home & Auto", id: "HomeAuto" },
    { name: "Personal", id: "Personal" },
  ];

  return (
    <div className="py-20 bg-blue text-gold w-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Our Local Professional Services:
            </h1>
            <ul className="text-2xl md:text-3xl space-y-2 md:space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  {/* Pass the selected service as a query parameter */}
                  <Link
                    to={{
                      pathname: "/service-vendors",
                      search: `?service=${service.id}`,
                    }}
                    className="underline hover:no-underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={Personal}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              alt="Grandfather with grandson"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
