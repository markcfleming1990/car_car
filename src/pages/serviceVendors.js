import React from "react";
import { useLocation } from "react-router-dom";
import Maria from "../Assets/img/Maria_Team.png";

function ServiceVendors() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get("service");

  const vendors = {
    Medical: [
      {
        name: "Maria Tanksley",
        phone: "555-1234",
        email: "medical1@example.com",
        image: Maria,
      },
      {
        name: "Medical Vendor 2",
        phone: "555-5678",
        email: "medical2@example.com",
        image: "https://via.placeholder.com/150",
      },
    ],
    Financial: [
      {
        name: "Financial Vendor 1",
        phone: "555-1234",
        email: "financial1@example.com",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Financial Vendor 2",
        phone: "555-5678",
        email: "financial2@example.com",
        image: "https://via.placeholder.com/150",
      },
    ],
    Legal: [
      {
        name: "Legal Vendor 1",
        phone: "555-1234",
        email: "legal1@example.com",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Legal Vendor 2",
        phone: "555-5678",
        email: "legal2@example.com",
        image: "https://via.placeholder.com/150",
      },
    ],
    "": [
      {
        name: "Home & Auto Vendor 1",
        phone: "555-1234",
        email: "homeauto1@example.com",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Home & Auto Vendor 2",
        phone: "555-5678",
        email: "homeauto2@example.com",
        image: "https://via.placeholder.com/150",
      },
    ],
    Personal: [
      {
        name: "Personal Vendor 1",
        phone: "555-1234",
        email: "personal1@example.com",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Personal Vendor 2",
        phone: "555-5678",
        email: "personal2@example.com",
        image: "https://via.placeholder.com/150",
      },
    ],
  };

  const vendorList = vendors[service];

  return (
    <div>
      <h1>Vendors for {service}</h1>
      {vendorList ? (
        <ul>
          {vendorList.map((vendor) => (
            <li key={vendor.email}>
              <img src={vendor.image} alt={vendor.name} />
              <h2>{vendor.name}</h2>
              <p>{vendor.phone}</p>
              <p>{vendor.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No vendors found for {service}</p>
      )}
    </div>
  );
}

export default ServiceVendors;
