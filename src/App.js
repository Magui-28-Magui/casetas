import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Views";
import VisitorsForm from "./Views/Visitors/VisitorsForm";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid pl-0">
        <Navbar />
        <div className="row">
          <div
            className="col-2 bg-dark text-light position-fixed"
            id="sticky-sidebar"
          >
            <Sidebar />
          </div>
          <div className="col offset-2" id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":v_id" element={<VisitorsForm />} />
            </Routes>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
