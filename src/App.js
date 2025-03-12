import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import {AuthProvider, useAuth} from "./components/authContext";

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';

import { GlobalStyles } from "./components/styles/GlobalStyles";

import Navbar from './components/styles/Navbar';

import ProtectedRoute from "./components/ProtectedRoute";


const App = () => {

    const user = useAuth();

    return (
        <AuthProvider>
            <GlobalStyles/>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile" element={user ? <UserProfile/> :  <Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App;