import React, { useState, useEffect, FormEvent } from "react";
import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
  ErrorMessage,
} from "./styles/Styles";
import { useTheme } from "./ThemeContext";

interface User {
  email: string;
  password: string;
  name: string;
}

const Register: React.FC = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setError("User already registered.");
    }
  }, []);

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      setError("User already exists!");
      return;
    }

    const newUser: User = { email, password, name };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setError("");
    alert("Registration successful!");
  };

  return (
    <Container theme={theme}>
      <FormWrapper theme={theme}>
        <Title>Registration</Title>
        <form onSubmit={handleRegister}>
          <div>
            <label>Email:</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Name:</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Button type="submit">Sign up</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
