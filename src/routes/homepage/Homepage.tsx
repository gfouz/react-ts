import * as React from "react";
import { about, technologies } from "./content";
import SpyGlass from "../../icons/SpyGlass";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import MediaApps from '../../components/ContactMedia'

function Homepage() {
  return (
    <>
      <StyledHome>
        <header className="header">
          <img className="header__picture" src="./images/et.png" />
          <div className="header__logo">
            <SpyGlass color="#ffffff" size="40px" />
            <h4>gfouz</h4>
          </div>
        </header>
        <article className="main-image">
          <h4>GFOUZ</h4>
        </article>
        <Navbar />
        <article className="logo">
          <img className="logo__title" src="./images/literataGrey.png" />
          <SpyGlass color="#555555" size="35px"  />
        </article>
        <section className="banner">
          <article className="article__item">
            <h4 className="article__title">About me.</h4>
            <p className="article__paragraph">
              {about}
            </p>
          </article>
          <article className="article__item">
            <img className="banner__image" src="./images/writer.jpg" />
          </article>
        </section>
        <section className="technologies">
          <article className="article__item">
            <img
              className="technologies__image"
              src="./images/freelancer.jpg"
              alt="stylesCss"
            />
          </article>
          <article className="article__item">
            <h4 className="article__title">technologies I am using:</h4>
            <p className="article__paragraph">{technologies}</p>
          </article>
        </section>
         <MediaApps />
        <section className="lastsection">
          <img className="lastsection__image" src="./images/book.jpg" />
        </section>
        <aside>
          <img className="aside__image" src="./images/table.jpg" alt="table" />
        </aside>
        <footer>
          <h4>GFOUZ &copy; 2022 - made with ReactJs </h4>
        </footer>
      </StyledHome>
    </>
  );
}
export default Homepage;

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  .header {
    width: 100%;
    display: grid;
    place-items: center;
    background-image: linear-gradient(#222b13, #5a7131, #84a648);
  }

  .header__title {
    position: absolute;
    font-size: 2.5em;
    font-family: Arial Black;
    margin: 0;
    letter-spacing: 2px;
    color: #282828;
    text-shadow: 1px 1px 10px #ffffff;
    text-transform: uppercase;
  }
  .header__subtitle {
    color: #333333;
    font-size: 0.9em;
  }
  .header__logo {
    text-align: center;
    position: absolute;
    top: 30px;
    left: 30px;
    color: #ffffff;
    h4 {
      margin: 0;
    }
  }
  .header__picture {
    width: 100px;
    margin: 1em 0;
  }
  .main-image {
    color: #7ba13e;
    text-align: right;
    width: 100%;
    height: 400px;
    background-image: url("./images/boy.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h4 {
      margin: 0 2em;
    }
  }
  .logo {
    width: 100%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logo__title {
    width: 250px;
    margin: 2em;
  }
  .logo__icon {
    width: 40px;
  }

  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .banner {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: #ffffff;
    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .article__item {
    text-align: center;
    margin: 2em 0;
    width: 400px;
    @media (max-width: 620px) {
      max-width: 500px;
      width: 100%;
      height: auto;
      margin: 1em 0;
    }
  }

  .banner__image {
    max-width: 90%;
    height: auto;
    box-shadow: 1px 1px 10px #222222;
  }
  .article__title {
    margin: 0 1em;
    color: #385a61;
    text-align: left;
    text-transform: uppercase;
  }
  .article__paragraph {
    padding: 0 1em;
    margin: 0;
    text-align: left;
  }
  .banner__subtitle {
    color: #333333;
  }
  .technologies {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    @media (max-width: 600px) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
  }

  .technologies__item {
    margin: 2em 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 320px;
    height: 260px;
    @media (max-width: 600px) {
      max-width: 450px;
      height: auto;
      margin: 0;
      padding: 1em;
    }
  }

  .technologies__image {
    max-width: 100%;
    height: auto;
  }

  .technologies__smalltext {
    text-align: center;
    color: #282828;
  }
  aside {
    background-image: linear-gradient(#000000, #222222, #a2a3a8);
    width: 100%;
    color: #ffffff;
    text-shadow: 1px 1px 10px #000000;
    text-align: center;
  }
  .aside__image {
    max-width: 100%;
    height: auto;
  }
  footer {
    width: 100%;
    height: 100px;
    display: flex;
    margin: -3px 0 0 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    text-shadow: 1px 1px 10px #222222;
    background-color: #a2a3a8;
  }
  .lastsection {
    width: 100%;
    height: 300px;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .lastsection__image {
    max-width: 100%;
    height: auto;
  }
`;
