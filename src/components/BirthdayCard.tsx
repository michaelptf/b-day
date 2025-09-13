import React, { useState } from "react";
import Confetti from "./Confetti";
import styles from "./styles/BirthdayCard.module.css";

const BirthdayCard = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "🎂 Happy Birthday 🎂",
    "You are the best bb!",
    "Here's to another year of adventures! woohoo",
  ];

  const handleClick = () => {
    if (showMessage) {
      setShowMessage(false);
      setMessageIndex(0);
    } else if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <div className={styles.comicContainer}>
      <div className={styles.comicContent}>
        <h1 className={styles.comicTitle}>Yeahh That's Your Birthday!!</h1>
        <div className={styles.imageContainer} onClick={handleClick}>
          <div className={styles.clickMeText}>✨ Click Me! ✨</div>
          <img
            src="https://raw.githubusercontent.com/michaelptf/b-day/main/resources/images.png"
            alt="Click me!"
            className={styles.clickableImage}
          />
        </div>
        <div className={styles.comicMessage}>
          {showMessage ? "🎈 Surprise! 🎈" : messages[messageIndex]}
        </div>
        {showMessage && <Confetti trigger={true} />}
      </div>
    </div>
  );
};

export default BirthdayCard;
