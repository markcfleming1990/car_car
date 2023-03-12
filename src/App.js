import React from "react";
import { Route, Routes } from "react-router-dom";
import Jumbotron from "./Components/Jumbotron/Jumbotron.jsx";
import About from "./Components/About/About.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Donations from "./Components/Donations/Donations.jsx";
import Partners from "./Components/Partners/Partners.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Resources from "./pages/resources.jsx";
import Team from "./pages/team.jsx";
import ServiceVendors from "./pages/serviceVendors.jsx";

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
