import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profileImage from "../../assets/images/profileImage.jpg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="main">
      <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-text-section">
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            {/* Uncomment if you want to show social media links */}
            {/* <SocialMedia /> */}
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="Download my resume"
                  href={greeting.resumeLink}
                  newTab={true}
                />
              )}
            </div>
          </div>

          {/* SIMPLIFIED IMAGE SECTION - REMOVED NESTED DIVS */}
          <div className="greeting-image-div">
            <img
              src={profileImage}
              alt="Ilyess - Full Stack Software Developer"
              className="profile-image-direct"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
