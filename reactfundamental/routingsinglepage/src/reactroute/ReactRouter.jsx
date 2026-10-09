import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, FAQPage } from './router.page.jsx';

function ReactRouter() {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                    <li>
                        <Link to="/faq" >FAQ</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/faq" element={<FAQPage />} />
            </Routes>
        </main>
        </>
    ) 
}

export default ReactRouter;