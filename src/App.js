import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Views";
import VisitorsForm from "./Views/Visitors/Guard/VisitorsForm";
import Sidebar from "./Components/Sidebar";
import VisitorAdminForm from "./Views/Visitors/Admin/VisitorAdminForm";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Sidebar />
          <main className="col offset-md-2 bg-faded py-3" id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":v_id" element={<VisitorsForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-visitor" element={<VisitorAdminForm />} />
              <Route path="add-visitor/:v_id" element={<VisitorAdminForm />} />
            </Routes>
          </main>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
