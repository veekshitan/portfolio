import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites, certifications, achievements } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Achievements and Qualifications
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          {achievements.list.length > 0 && (
            <div className="achievements-section">
              <Fade bottom duration={2000} distance="20px">
                <h1
                  className="achievements-header"
                  style={{ color: theme.text }}
                >
                  {achievements.title}
                </h1>
              </Fade>
              <div className="achievements-grid">
                {achievements.list.map((item) => (
                  <Fade bottom duration={1500} distance="20px" key={item.title}>
                    <div
                      className="achievement-tile"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                      }}
                    >
                      <span className="achievement-tile-icon">{item.icon}</span>
                      <h3 className="achievement-tile-title">{item.title}</h3>
                      <p
                        className="achievement-tile-desc"
                        style={{ color: theme.secondaryText }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          )}
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
