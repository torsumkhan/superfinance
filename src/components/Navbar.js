import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);
  console.log("state in navbar", user);

  return (
    <StyledContainer>
      <ul>
        <li>Super Finance</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>Hi, {user.displayName}</li>
            <li>
              <button
                className="btn"
                style={{ color: "white", border: "1px solid white" }}
                onClick={() => logout()}
              >
                Logout
              </button>
            </li>
          </>
        )}
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
