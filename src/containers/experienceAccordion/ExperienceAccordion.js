import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion
          initialState={{
            expanded: this.props.sections
              .filter((section) => section["work"])
              .map((section) => section["title"]),
          }}
        >
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      marginLeft: "10px",
                      marginRight: "10px",
                      borderRadius: `10px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `8px`,
                      fontFamily: "Google Sans Medium",
                      fontSize: "20px",
                      color: `${theme.text}`,
                      transition: "background-color 0.2s ease",
                      ":hover": {
                        color: `${theme.text}`,
                        backgroundColor: `${theme.highlight}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      key={`${experience["title"]}-${experience["company"]}`}
                      index={index}
                      totalCards={section["experiences"].length}
                      experience={experience}
                      theme={theme}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
