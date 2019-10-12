import React from "react";
import Location from "./location.svg";
import GitHub from "./github.svg";
import Email from "./email.svg";
import LinkedIn from "./linkedin.svg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <header>
          <h1>JEFF KEILMAN</h1>
          <h2>DATA ENGINEER</h2>
        </header>
        <div className="links">
          <div className="link-row">
            <img src={Location} alt="location" />
            <span>Boston, MA</span>
          </div>
          <div className="link-row">
            <img src={Email} alt="email" />
            <span>jkeilman93@gmail.com</span>
          </div>
          <div className="link-row">
            <a href="https://github.com/jeffkeilman" target="_blank">
              <img src={GitHub} alt="github" />
              <span>jeffkeilman</span>
            </a>
          </div>
          <div className="link-row">
            <a href="https://www.linkedin.com/in/jeffkeilman" target="_blank">
              <img src={LinkedIn} alt="linkedin" />
              <span>jeffkeilman</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
