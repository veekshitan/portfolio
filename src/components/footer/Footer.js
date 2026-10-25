import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made by {greeting.title}
        </p>
        <p
          className="footer-text footer-credit"
          style={{ color: props.theme.secondaryText }}
        >
          Built on{" "}
          <a
            href="https://github.com/ashutosh1919/masterPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: props.theme.text }}
          >
            masterPortfolio
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/ashutosh1919"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: props.theme.text }}
          >
            Ashutosh Hathidara
          </a>{" "}
          (MIT License)
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
