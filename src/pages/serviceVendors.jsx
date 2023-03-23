import React from "react";
import { useLocation } from "react-router-dom";
// import Maria from "../Assets/img/Maria_Team.png";
import Karen from "../Assets/img/Karen.png";

function ServiceVendors() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get("service");

  const vendors = {
    Medical: [
      // {
      //   name: "Maria Tanksley",
      //   phone: "555-1234",
      //   email: "medical1@example.com",
      //   image: Maria,
      // },
      // {
      //   name: "Medical Vendor 2",
      //   phone: "555-5678",
      //   email: "medical2@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
    ],
    Financial: [
      // {
      //   name: "Financial Vendor 1",
      //   phone: "555-1234",
      //   email: "financial1@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
      // {
      //   name: "Financial Vendor 2",
      //   phone: "555-5678",
      //   email: "financial2@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
    ],
    Legal: [
      {
        name: "Karen Winkle-Gorsline",
        businessName:"LegalShield",
        phone: "845-430-5473",
        email: "karenwinkle2@gmail.com",
        link:"https://checkout.ladiesofjustice.com/karenwinklegorsline?source=backoffice",
        image: Karen
      },
      // {
      //   name: "Legal Vendor 2",
      //   phone: "555-5678",
      //   email: "legal2@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
    ],
    HomeAuto: [
      // {
      //   name: "Home & Auto Vendor 1",
      //   phone: "555-1234",
      //   email: "homeauto1@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
      // {
      //   name: "Home & Auto Vendor 2",
      //   phone: "555-5678",
      //   email: "homeauto2@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
    ],
    Personal: [
      // {
      //   name: "Personal Vendor 1",
      //   phone: "555-1234",
      //   email: "personal1@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
      // {
      //   name: "Personal Vendor 2",
      //   phone: "555-5678",
      //   email: "personal2@example.com",
      //   image: "https://via.placeholder.com/150",
      // },
    ],
  };

  const vendorList = vendors[service];

  return (
    <div className="bg-blue text-center">
      <h1 className="text-gold font-bold text-2xl pr-8">
        Vendors for {service}
      </h1>
      {vendorList ? (
        <ul className="grid grid-rows-3 grid-flow-row pr-12 md:grid-cols-3 pl-96 pt-16">
          {vendorList.map((vendor) => (
            <li key={vendor.email}>
              <div className="bg-blue p-8">
                <div className="flex justify-center">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    width="200"
                    height="200"
                    className="w-32 h-32 object-cover rounded-full mb-2"
                  />
                </div>
                <div className="text-gold text-center mt-4">
                <h2 className="mt-2">{vendor.name}</h2>
                <p>{vendor.businessName}</p>
                <p>{vendor.phone}</p>
                <p>{vendor.email}</p>
                <a href={vendor.link}>
                  <button className="bg-green text-gold border-full rounded p-2">
                    Visit Our Website
                  </button>
                </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-blue text-gold">
        <p>Vendors coming soon for {service}</p>
        </div>
      )}
    </div>
  );
}

export default ServiceVendors;
