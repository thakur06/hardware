import { createContext, useState } from "react";
const CheatcodeContext = createContext({
  cheatcode: false,
  validateCheatCode: () => {},
});

export const CheatcodeProvider = ({ children }) => {
  const [cheatcode, setCheatcode] = useState(false);
  const validateCheatCode = (newCode) => {
    if (newCode == import.meta.env.VITE_CHEATCODE) {
      setCheatcode(true);
      console.log("code activated");
      return true;
    } else {
      setCheatcode(false);
      console.log("Invalid code")
      return false;
    }
  };
  const value = {
    cheatcode,
    validateCheatCode,
  };
  return (
    <CheatcodeContext.Provider value={value}>
      {children}
    </CheatcodeContext.Provider>
  );
};

export { CheatcodeContext };
