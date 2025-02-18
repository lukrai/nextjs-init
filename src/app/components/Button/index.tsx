'use client';
import { Button } from 'react-aria-components';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
}

function StyledButton({ children, onClick, fullWidth = false }: StyledButtonProps) {
  return (
    <Button
      onPress={onClick}
      className={`font-inter rounded bg-[#0453C2] px-4 py-2 text-xs font-semibold leading-4 text-white transition-colors hover:bg-[#0343A2] focus:outline-none focus:ring-2 focus:ring-[#0453C2] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${fullWidth ? 'w-full' : 'inline-flex'} `}
    >
      {children}
    </Button>
  );
}

export default StyledButton;
