import React from "react";
import { Route, Routes } from "react-router-dom";

import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import About from "./Components/About/About.js";
import Nav from "./Components/Nav/Nav.js";
import Donations from "./Components/Donations/Donations.js";
import Partners from "./Components/Partners/Partners.js";
import Footer from "./Components/Footer/Footer.js";
import Resources from "./pages/resources.js";
import Team from "./pages/team.js";
import ServiceVendors from "./pages/serviceVendors.js";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Jumbotron />
              <About />
              <Partners />
              <Donations />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/vendors" element={<Vendors />} /> */}
        {/* Add a new route that will display the vendors for a specific service */}
        <Route path="/service-vendors" element={<ServiceVendors />} />
      </Routes>
      {/* <About /> */}
      {/* <Donations /> */}
      {/* <Partners /> */}
      <Footer />
    </div>
  );
}

export default App;
