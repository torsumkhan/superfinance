import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledContainer>
      <ul>
        <li>Super Finance</li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  background-color: #1a73e8;
  padding: 20px 10px;
  color: white;
  ul {
    display: flex;
    margin: 0 auto;
    max-width: 960px;
    align-items: center;

    li {
      display: flex;
      margin-right: auto;
      letter-spacing: 1px;
      font-size: 1.2rem;
    }
  }
`;

export default Navbar;
