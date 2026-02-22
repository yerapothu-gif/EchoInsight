import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Home.css";
const Home = () => {
const navigate = useNavigate();
const [status, setStatus] =useState("");
useEffect(() => {
    const checkBackend = async () => {
        try {
            const res = await axios.get("http://localhost:5000/");
            setStatus(res.data.message);
        } catch {
            setStatus("Backend not reachable");
        }
    };
    checkBackend();
}, []);
return (
    <div className="home-container">
        <nav className="navbar">
        <h2>EchoInsight AI</h2>
        <div>
            <button onClick={() => navigate("/login")}>Login</button>
            <button className="primary-btn" onClick={() => navigate("/register")}>
                Get Started
            </button>
        </div>
    </nav>
<div className="hero">
<div className="hero-left">
<h1>
Turn Research Papers Into <span>Engaging Podcasts</span>
</h1>
<p>
Convert dense academic PDFs into AI-powered podcasts, quizzes,
highlights and interactive Q&A.
</p>
<button
className="primary-btn"
onClick={() => navigate("/register")}
>
Start Converting Free
</button>

</div>
</div>
<div className="stats">
<div className="stat-box">500K+ Pages Converted</div>
<div className="stat-box">50+ AI Voices</div>
<div className="stat-box">30+ Languages</div>
<div className="stat-box">99.9% Uptime</div>
</div>
</div>
);
};
export default Home;