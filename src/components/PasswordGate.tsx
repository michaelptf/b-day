import React, { useState } from "react";
import styles from "./styles/PasswordGate.module.css";

const PasswordGate: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "cutecutelenglengsorbb") {
      onUnlock();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className={styles.comicContainer}>
      <div className={styles.comicBubble}>
        <div className={styles.comicContent}>
          {/* <h2 className={styles.comicTitle}>Good Morning baby ❤️</h2> */}
          <div className={styles.comicQuestion}>
            <p>Do you know today is who's birthday?</p>
            <form onSubmit={handleSubmit}>
              <input
                type="cutecutelenglengsorbb"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                className={styles.comicInput}
                autoFocus
              />
              <button type="submit" className={styles.comicButton}>
                ✨ Open! ✨
              </button>
              {error && (
                <div className={styles.comicError}>
                  <p>🤔 Hmm... that's not quite it! Try again!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
