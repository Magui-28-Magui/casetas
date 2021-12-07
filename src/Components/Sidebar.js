import React from "react";
// import { SidebarContainer, SidebarContent, SidebarList } from "./styles";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const SidebarContainer = styled.div`
   margin-top: 3rem;
   height: 100vh; 
`;

const SidebarContent = styled.ul`
    list-style-type: none;
`;

const SidebarList = styled.li`
   a{
    color: white;
    :hover{
        color: gray;
    }
   }

`;

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
