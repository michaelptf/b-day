import { useState, useEffect } from 'react';

const useConfetti = () => {
    const [isConfettiActive, setIsConfettiActive] = useState(false);

    const triggerConfetti = () => {
        setIsConfettiActive(true);
        setTimeout(() => {
            setIsConfettiActive(false);
        }, 3000); // Confetti lasts for 3 seconds
    };

    return { isConfettiActive, triggerConfetti };
};

export default useConfetti;