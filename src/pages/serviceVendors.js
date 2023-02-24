import React from "react";
import { useLocation } from "react-router-dom";

function ServiceVendors() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const service = searchParams.get("service");

  return (
    <div>
      <h1>Vendors for {service}</h1>
      {/* Display the vendors for the selected service */}
    </div>
  );
}

export default ServiceVendors;
