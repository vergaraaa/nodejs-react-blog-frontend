import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Article } from "../components/pages/Article";
import { Articles } from "../components/pages/Articles";
import { CreateArticle } from "../components/pages/CreateArticle";
import { Header } from '../components/layouts/Header'
import { Nav } from '../components/layouts/Nav'
import { Sidebar } from '../components/layouts/Sidebar'
import { Footer } from '../components/layouts/Footer'
import { Search } from "../components/pages/Search";

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
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/create-articles" element={<CreateArticle />} />
                    <Route path="/search/:query" element={<Search />} />
                    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404 Page not Found</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Sidebar />
            <Footer />
        </BrowserRouter>
    );
}