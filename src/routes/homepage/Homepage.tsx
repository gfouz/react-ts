import * as React from "react";
import {aboutme} from './content'
import Navbar from "./Nav";
import styled from "styled-components";

function Homepage() {
  return (
    <>
      <StyledHome>
        <header className="header">
          <img className="header__image" src="./images/headergray.jpg" />
          <img
            className="header__icon"
            src="./images/wtexplorer.svg"
            alt="logo"
          />
        </header>
        <article className="logo">
          <img src="./images/portfolio.png" className="logo__title" />
          <img className="logo__icon" src="./images/explorer.svg" alt="logo" />
        </article>
        <Navbar />
        <section className="banner">
          <article className="article__item">
            <h4 className="article__title">About me.</h4>
            <p className="article__paragraph">
               {aboutme}
            </p>
          </article>
          <article className="article__item">
            <img className="banner__image" src="./images/sitting.jpg" />
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
            <p className="article__paragraph">
              Hello, my name is Giovani Fouz and I use modern JavaScript
              frameworks such as React or Vue to create single page application
              or full static sites so that among my skills are HTML, CSS, SCSS,
              JavaScript and TypeScript. Besides i feel very comfortable with
              some react technologies as styled-components, Material UI,
              react-query, react-hook-form and NextJs and very soon i will be
              learning about Deno that is a new technology on the server side.
            </p>
          </article>
        </section>
        <section className="lastsection">
            <img className="lastsection__image" src="./images/book.jpg" />
        </section>
        <aside>
             <img className="aside__image" src="./images/table.jpg" alt="table" />
        </aside>
        <footer>
              <h2>Gfouz 2022</h2>
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
    position: relative;
    width: 100%;
    height: 150px;
    display: grid;
    place-items: center;
    background-color: #272727;
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

  .header__image {
    margin: 0;
    width: 250px;
    height: auto;
  }
  .header__icon {
    width: 40px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
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
    width: 200px;
    margin: 2em;
  }
  .logo__icon {
    width: 50px;
  }
  .banner {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ffffff;
    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
    }
  }
  .article__item {
    text-align: center;
    margin: 2em 0;
    width: 400px;
    height: 280px;
    @media (max-width: 620px) {
      max-width: 500px;
      width: 100%;
      height: auto;
      margin: 0;
    }
  }

  .article__image-container {
    max-width: 320px;
    height: auto;
    text-align: center;
  }
  .banner__image {
    max-width: 100%;
    height: auto;
    margin: 1em 0 0 0;
  }
  .article__title {
    padding: 0 0.8em;
    color: #385a61;
    text-align: center;
    text-transform: uppercase;
  }
  .article__paragraph {
    padding: 0 1em;
    text-align: left;
  }
  .banner__subtitle {
    color: #333333;
  }
  .technologies {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 600px) {
      flex-direction: column-reverse;
      justify-content: center;
    }
  }

  .technologies__item {
    border: 1px solid black;
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
  .technologies__image-container {
    max-width: 400px;
    height: auto;
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
    background-image:linear-gradient(#000000, #222222, #a2a3a8);
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
     margin: -3px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-items: center;
     color: #000000;
     background-color: #a2a3a8;
  }
  .lastsection {
     width: 100%;
     height: 300px;
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
