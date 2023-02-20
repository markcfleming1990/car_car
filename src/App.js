import React from "react";
import { Route, Routes } from "react-router-dom";

// import Home from "./pages/home.js";
import Resources from "./pages/resources.js";
import Team from "./pages/team.js";
import About from "./pages/about.js";
import Partners from "./pages/partners.js";

import Jumbotron from "./Components/Jumbotron/Jumbotron.js";
import Nav from "./Components/Nav/Nav.js";
// import Donations from "./Components/Donations/Donations.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <About />
      {/* <Donations /> */}
      <Footer />
    </div>
  );
}

export default App;
