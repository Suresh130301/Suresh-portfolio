import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "lokahbcuehuvvyevcwdcjhgjc chsdgcghiudce hgsxvxuwgcuyc",
    github: "https://github.com",
    demo: "some link",
  },
  {
    id: 1,
    image: IMG1,
    title: "lokahbcuehuvvyevcwdcjhgjc chsdgcghiudce hgsxvxuwgcuyc",
    github: "https://github.com",
    demo: "some link",
  },
  {
    id: 1,
    image: IMG2,
    title: "lokahbcuehuvvyevcwdcjhgjc chsdgcghiudce hgsxvxuwgcuyc",
    github: "https://github.com",
    demo: "some link",
  },
  {
    id: 1,
    image: IMG3,
    title: "lokahbcuehuvvyevcwdcjhgjc chsdgcghiudce hgsxvxuwgcuyc",
    github: "https://github.com",
    demo: "some link",
  },
  {
    id: 1,
    image: IMG4,
    title: "lokahbcuehuvvyevcwdcjhgjc chsdgcghiudce hgsxvxuwgcuyc",
    github: "https://github.com",
    demo: "some link",
  },
  {
    id: 1,
    image: IMG5,
    title: "lokahbcuehuvvyevcwdcjhgjc chsdgcghiudce hgsxvxuwgcuyc",
    github: "https://github.com",
    demo: "some link",
  },
  {
    id: 1,
    image: IMG6,
    title: "lokahbcuehuvvyevcwdcjhgjc chsdgcghiudce hgsxvxuwgcuyc",
    github: "https://github.com",
    demo: "some link",
  },
];
const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>

      <div className="container Portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <articleb key={id} className="Portfolio__item">
              <div className="Portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="Portfolio__items-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </articleb>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
