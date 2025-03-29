import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

import { useTheme } from "./ThemeContext";

import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
  ErrorMessage,
} from "./styles/Styles";

function Login() {
  const { theme } = useTheme();
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success: boolean = login(email, password);
    if (success) {
      setError("");
    } else {
      setError("Wrong email or password");
    }
  };

  if (user) {
    return <Navigate to="/profile" />; // Если пользователь уже вошел, перенаправляем на профиль
  }

  return (
    <Container theme={theme}>
      <FormWrapper theme={theme}>
        <Title>Sign in</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Sign in</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </form>
      </FormWrapper>
    </Container>
  );
}

export default Login;
