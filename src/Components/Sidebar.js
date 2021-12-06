import React from "react";
import { SidebarContainer, SidebarContent, SidebarList } from "./styles";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarList>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </SidebarList>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
