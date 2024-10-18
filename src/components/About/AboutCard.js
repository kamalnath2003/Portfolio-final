import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kamalnath Vijayavel </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am  a fresh CSE graduate looking for oppurtunity into tech industry.
            <br />
            I have completed BE in Computer Science and ENgineering at Jeppiaar institute of technology
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
