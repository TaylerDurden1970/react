import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Тип для пользователя
interface User {
  email: string;
  password: string;
  name: string;
}

// Тип для AuthContext
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string, name: string) => boolean;
  logout: () => void;
}

// Примерная структура пользователей для работы с локальным хранилищем
const initialUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Загружаем текущего пользователя из localStorage при монтировании компонента
  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser") || "null",
    );
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    const user = initialUsers.find(
      (u) => u.email === email && u.password === password,
    );
    if (user) {
      setUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user)); // Сохраняем текущего пользователя
      return true;
    }
    return false;
  };

  const register = (email: string, password: string, name: string): boolean => {
    const existingUser = initialUsers.find((u) => u.email === email);
    if (existingUser) {
      return false; // Пользователь уже существует
    }
    const newUser: User = { email, password, name };
    initialUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(initialUsers)); // Сохраняем обновленный список пользователей в localStorage
    setUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser)); // Сохраняем текущего зарегистрированного пользователя
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser"); // Удаляем информацию о текущем пользователе
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
