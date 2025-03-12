import React, { useState } from "react";
import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom";
import { Container, FormWrapper, Title, Input, Button, ErrorMessage } from "./styles/Login.styles";

const Login = () => {
    const { login, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const success = login(email, password);
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
        <Container>
            <FormWrapper>
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
};

export default Login;
