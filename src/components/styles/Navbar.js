import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    background: #222;
    padding: 10px 0;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
        background: #333;
        border-radius: 5px;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/profile">User</NavLink>
            <NavLink to="/login">Authorization</NavLink>
            <NavLink to="/register">Register</NavLink>
        </Nav>
    );
};

export default Navbar;
