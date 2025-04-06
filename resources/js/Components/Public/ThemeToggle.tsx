// components/ThemeToggle.tsx
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a preference stored
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    
    // Apply theme on initial load
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    // Store preference
    localStorage.setItem('darkMode', newMode.toString());
    
    // Apply/remove dark class
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-light-s3 dark:bg-s3"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}