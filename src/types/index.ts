export interface BirthdayCardProps {
  message: string;
  onClick: () => void;
}

export interface ConfettiProps {
  isVisible: boolean;
}

export interface PasswordGateProps {
  onPasswordSubmit: (password: string) => void;
}

export interface UseConfettiReturn {
  triggerConfetti: () => void;
  isConfettiVisible: boolean;
}