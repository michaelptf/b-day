import React, { useState } from 'react';
import PasswordGate from './components/PasswordGate';
import BirthdayCard from './components/BirthdayCard';

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <div>
      {isUnlocked ? <BirthdayCard /> : <PasswordGate onUnlock={handleUnlock} />}
    </div>
  );
};

export default App;