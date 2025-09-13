import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from '../hooks/useWindowSize';
import styles from './styles/Confetti.module.css';

const ConfettiComponent: React.FC<{ trigger: boolean }> = ({ trigger }) => {
    const { width, height } = useWindowSize();

    return (
        <div className={styles.confettiContainer}>
            {trigger && <Confetti width={width} height={height} />}
        </div>
    );
};

export default ConfettiComponent;