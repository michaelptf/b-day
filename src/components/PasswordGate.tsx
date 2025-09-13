import React, { useState } from 'react';
import styles from './styles/PasswordGate.module.css';

const PasswordGate: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'yourPassword') {
            onUnlock();
        } else {
            setError(true);
            setPassword('');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.question}>What is the secret password?</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    placeholder="Enter password"
                />
                <button type="submit" className={styles.button}>Submit</button>
                {error && <p className={styles.error}>Incorrect password, try again!</p>}
            </form>
        </div>
    );
};

export default PasswordGate;