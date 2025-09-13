import React, { useState } from 'react';
import styles from './styles/BirthdayCard.module.css';
import Confetti from './Confetti';

const BirthdayCard = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);
    const messages = [
        "Happy Birthday!",
        "Wishing you all the best!",
        "May your day be filled with joy!",
        "Here's to another year of adventures!",
    ];

    const handleClick = () => {
        if (messageIndex < messages.length - 1) {
            setMessageIndex(messageIndex + 1);
        } else {
            setShowMessage(true);
        }
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.header}>🎉 Birthday Wishes 🎉</h1>
            <div className={styles.heart} onClick={handleClick}>
                ❤️
            </div>
            <div className={styles.message}>
                {showMessage ? "🎈 Surprise! 🎈" : messages[messageIndex]}
            </div>
            {showMessage && <Confetti />}
            <footer className={styles.footer}>
                <p>With love from all of us!</p>
            </footer>
        </div>
    );
};

export default BirthdayCard;