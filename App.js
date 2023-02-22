import React from "react";
import { Route, Routes } from "react-router-dom";

// import Home from "./pages/home.js";
import Resources from "./src/pages/resources.js";
import Team from "./src/pages/team.js";
// import About from "./pages/about.js";
// import Partners from "./pages/partners.js";

import Jumbotron from "./src/Components/Jumbotron/Jumbotron.js";
import About from "./src/Components/About/About.js";
import Nav from "./src/Components/Nav/Nav.js";
import Donations from "./src/Components/Donations/Donations.js";
import Partners from "./src/Components/Partners/Partners.js";
import Footer from "./src/Components/Footer/Footer.js";

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
      <Donations />
      <Partners />

      <Footer />
    </div>
  );
}

export default App;
