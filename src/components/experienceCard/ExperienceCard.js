import React, { Component } from 'react';
import './ExperienceCard.css';
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const description = experience["description"];
    const roles = experience["roles"];
    return (
      <div className="experience-list-item" style={{ marginTop: (index === 0 ? 30 : 40) }}>
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assests/images/${experience["logo_path"]}`)}
              alt={experience["company"]}
            />
          </div>
        </Fade>
        <div className="experience-card-stepper">
          <div className="experience-card-stepper-dot" style={{ backgroundColor: theme.text }} />
          {
            index !== (totalCards - 1) &&
            <div className="experience-card-stepper-line" style={{ backgroundColor: theme.headerColor }} />
          }
        </div>
        <Fade right duration={2000} distance="40px">
          <div className="experience-card-wrapper">
            <div className="arrow-left" style={{ borderRight: `10px solid ${theme.highlight}` }}></div>
            <div
              className="experience-card"
              style={{ background: theme.body, borderLeft: `4px solid ${theme.text}` }}
            >
              {roles ? (
                <div>
                  <div className="experience-card-header">
                    <h3 className="experience-card-title" style={{ color: theme.text }}>
                      <a
                        className="experience-card-title-link"
                        href={experience["company_url"]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience["company"]}
                      </a>
                    </h3>
                    <div className="experience-card-heading-right">
                      <p className="experience-card-duration" style={{ color: theme.secondaryText }}>{experience["duration"]}</p>
                      <p className="experience-card-location" style={{ color: theme.secondaryText }}>{experience["location"]}</p>
                    </div>
                  </div>
                  <ul className="experience-card-roles">
                    {roles.map((role, i) => (
                      <li key={role.title} className="experience-card-role">
                        <span
                          className="experience-card-role-dot"
                          style={{
                            backgroundColor: i === 0 ? theme.text : theme.body,
                            borderColor: theme.text,
                          }}
                        />
                        <span className="experience-card-role-title" style={{ color: theme.text }}>
                          {role.title}
                        </span>
                        <span className="experience-card-role-duration" style={{ color: theme.secondaryText }}>
                          {role.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="experience-card-header">
                  <div>
                    <h3 className="experience-card-title" style={{ color: theme.text }}>{experience["title"]}</h3>
                    <p className="experience-card-company" style={{ color: theme.text }}>
                      <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
                        {experience["company"]}
                      </a>
                    </p>
                  </div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-duration" style={{ color: theme.secondaryText }}>{experience["duration"]}</p>
                    <p className="experience-card-location" style={{ color: theme.secondaryText }}>{experience["location"]}</p>
                  </div>
                </div>
              )}
              {Array.isArray(description) ? (
                <ul className="experience-card-points" style={{ color: theme.expTxtColor }}>
                  {description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                description && (
                  <p className="experience-card-description" style={{ color: theme.expTxtColor }}>
                    {description}
                  </p>
                )
              )}
              {experience["tech"] && (
                <div className="experience-card-tech">
                  {experience["tech"].map((tech) => (
                    <span
                      key={tech}
                      className="experience-card-chip"
                      style={{ backgroundColor: theme.highlight, color: theme.text }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
