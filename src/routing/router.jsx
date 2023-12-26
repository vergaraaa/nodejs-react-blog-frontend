import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/Articles";
import { CreateArticle } from "../components/pages/CreateArticle";
import { Header } from '../components/layouts/Header'
import { Nav } from '../components/layouts/Nav'
import { Sidebar } from '../components/layouts/Sidebar'
import { Footer } from '../components/layouts/Footer'

export const Router = () => {
    return (
        <BrowserRouter>
            {/* LAYOUT */}
            <Header />
            <Nav />

            {/* ROUTES */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/articles" element={<Articles />} /> 
                    <Route path="/create-articles" element={<CreateArticle />} /> 
                </Routes>
            </section>

            <Sidebar /> 
            <Footer />
        </BrowserRouter>
    );
}