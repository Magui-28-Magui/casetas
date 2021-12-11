import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SidebarList = styled.li`
   a{
    color: white;
    margin-bottom: 1rem;
    :hover{
        color: gray;
    }
   }

`;

const Sidebar = () => {
  return (
    <aside className="col-12 col-md-2 h-100 p-0 bg-dark fixed-top">
      <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
        <div className="collapse navbar-collapse align-items-start">
          <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
            <SidebarList className="nav-item mb-5">
              <div className="nav-link pl-0 text-nowrap">
                <i className="fa fa-bullseye fa-5x"></i>
              </div>
            </SidebarList>
            <SidebarList className="nav-item">
              <div className="nav-link pl-0">
                <i className="fas fa-shield-alt fa-fw mr-2"></i>
                <span className="d-none d-md-inline">
                  <Link to="/">Guardia</Link>
                </span>
              </div>
            </SidebarList>
            <SidebarList className="nav-item">
              <div className="nav-link pl-0">
                <i className="fa fa-user-shield fa-fw mr-2"></i>{" "}
                <span className="d-none d-md-inline">
                  <Link to="/dashboard">Administrador</Link>
                </span>
              </div>
            </SidebarList>
            <SidebarList className="nav-item">
              <div className="nav-link pl-0">
                <i className="fa fa-sign-out-alt fa-fw mr-2"></i>{" "}
                <span className="d-none d-md-inline">
                  <Link to="/logout">Cerrar sesión</Link>
                </span>
              </div>
            </SidebarList>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
