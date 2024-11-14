// ThemeToggleButton.js
import React from 'react';
import { useTheme } from './ThemeChanger';
import { FaRegSun } from 'react-icons/fa6';
import { GiMoon } from 'react-icons/gi';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
    let btnthem = isDarkMode ? { "background": "rgb(235, 161, 91)" } : { "background": "rgb(70, 34, 104)"} 
  return (
      <button style={btnthem} onClick={toggleTheme}>
          {isDarkMode ? <FaRegSun /> : <GiMoon />}
    </button>
  );
};

export default ThemeToggleButton;
