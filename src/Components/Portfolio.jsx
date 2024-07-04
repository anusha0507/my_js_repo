/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/study-port.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Diet Dynamo",
    description:
      "Collaboration to create a beginner friendly diet management website where users can post their queries related to dit plans and achieve the desired goals.",
    url: "https://github.com/dikshagupta3094/Healthy_diet",
  },
  {
    title: "Drumkit",
    description:
      "Created a simple and fun drumkit game which produces sound when a particular key is pressed.",
    url: "https://github.com/anusha0507/drumkit",
  },
  {
    title: "My Resume Site",
    description:
      "Created using HTML and CSS and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/anusha0507/portfolio",
  },
  {
    title: "Currency Converter",
    description:
      "Created a currency converter application where the value of indian currency can be converted into foreign currency.",
    url: "https://github.com/anusha0507/currency-converter",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
