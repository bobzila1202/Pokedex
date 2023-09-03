import './App.css';
import { Home, Login } from './components';
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes";
import { AuthProvider } from "./contexts";
import { PokeDataProvider } from './contexts/data';

function App () {
    return (
        <PokeDataProvider>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
                    <Route index element={<Home />}></Route>
                </Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="*" element={<h1>404! Not found</h1>}></Route>
            </Routes>
        </AuthProvider>
        </PokeDataProvider>
    )
}


export default App