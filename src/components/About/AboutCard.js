import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Legrini yehya </span>
            from <span className="purple"> Guelma , Algeria</span>
            <br />
            I am currently work as Software developer freelancer 
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Filmmaking 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "we have one life ,enjoy!"{" "}
          </p>
          <footer className="blockquote-footer">Yehya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
