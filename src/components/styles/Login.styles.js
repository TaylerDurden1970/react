import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #121212;
  color: white;
`;

export const FormWrapper = styled.div`
  background: #1e1e1e;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background: #2a2a2a;
  color: white;
  outline: none;

  &:focus {
    border: 2px solid #6200ea;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #6200ea;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #7b1fa2;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
