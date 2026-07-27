import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      <Routes>

        {/* HOME / DASHBOARD */}
        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* EXPERIENCE */}
        <Route
          path="/experience"
          element={<Experience />}
        />

        {/* PROJECTS */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* PROJECT DETAILS */}
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;