import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import Confetti from "./Confetti";

const BirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Happy Birthday! 🎂",
    "Wishing you all the best! 🌟",
    "May your day be filled with joy! 🎈",
    "Here's to another year of adventures! 🚀",
  ];

  const handleClick = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="text-center shadow-lg"
        style={{
          minWidth: "300px",
          maxWidth: "600px",
          background: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <Card.Body className="p-5">
          <h1 className="mb-4 text-primary">🎉 Birthday Wishes 🎉</h1>
          <div
            className="mb-4"
            style={{ fontSize: "4rem", cursor: "pointer" }}
            onClick={handleClick}
          >
            ❤️
          </div>
          <Card.Text className="h3 mb-4">
            {showMessage ? "🎈 Surprise! 🎈" : messages[messageIndex]}
          </Card.Text>
          {showMessage && <Confetti trigger={true} />}
          <footer className="text-muted mt-4">
            <p>With love from all of us! 💝</p>
          </footer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BirthdayCard;
