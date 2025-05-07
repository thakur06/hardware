import { useContext } from 'react';
import { CheatcodeContext } from './CheatCodeContext'; // Import the context

export const useCheatcode = () => {
  const context = useContext(CheatcodeContext);
  
  if (context === undefined) {
    throw new Error('useCheatcode must be used within a CheatcodeProvider');
  }
  
  return context;
};