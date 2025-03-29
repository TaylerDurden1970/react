import React, { createContext, useContext, useState, ReactNode } from "react";

// Определяем интерфейс для контекста
interface ThemeContextType {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

// Создаем контекст с дефолтным значением
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Хук для использования контекста
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Определяем интерфейс для провайдера
interface ThemeProviderProps {
  children: ReactNode;
}

// Провайдер для контекста
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  console.log("ThemeProvider initialized with theme:", theme);

  // Переключение темы
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
