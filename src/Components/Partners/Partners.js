import React from "react";
import { Link } from "react-router-dom";

function Partners() {
  const services = ["Medical", "Financial", "Legal", "Home & Auto", "Personal"];

  return (
    <div className="flex justify-center py-40 bg-blue text-gold w-screen">
      <div>
        <h1 className="text-center text-3xl font-bold">
          Our Local Professionals helps service our Seniors in a variety of
          areas including:
        </h1>
        <div className="flex justify-center text-center p-6 m-2">
          <ul className="list-disc text-3xl">
            {services.map((service) => (
              <li key={service}>
                {/* Pass the selected service as a query parameter */}
                <Link
                  to={{
                    pathname: "/service-vendors",
                    search: `?service=${service}`,
                  }}
                  className="underline hover:no-underline"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
