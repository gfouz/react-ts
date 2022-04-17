import * as React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <>
      <StyledNav>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="" className="navbar__link">
                blog
              </a>
            </li>
            <li className="navbar__item">
              <a href="" className="navbar__link">
                about
              </a>
            </li>
            <li className="navbar__item">
              <a href="" className="navbar__link">
                work
              </a>
            </li>
          </ul>
          <div className="line"></div>
        </nav>
      </StyledNav>
    </>
  );
}
export default Navbar;

const StyledNav = styled.nav`
  width: 100%;
  .line {
    opacity: 0;
    width: 80%;
    height: 2px;
    margin: 0 auto;
    animation line 2s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
  .navbar {
  }
  .navbar__list {
    height: 70px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .navbar__item {
    list-style-type: none;
    opacity: 0;
    animation links 1s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }
  .navbar__link {
    text-decoration: none;
    color: #03950b;
    font-weight: bolder;
    text-transform: uppercase;
  }
  @keyframes links {
      0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes line {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 80%;
      background-color: #008000;
    }
  }
`;
