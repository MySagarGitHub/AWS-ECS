import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Healthy from "./pages/Healthy.jsx";
import NotFound from "./pages/NotFound.jsx";

const shellStyle = {
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  maxWidth: 900,
  margin: "40px auto",
  padding: 20,
  border: "1px solid #e5e7eb",
  borderRadius: 12
};

export default function App() {
  return (
    <div style={shellStyle}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
        <div>
          <h1 style={{ margin: 0 }}>React ECS Demo</h1>
          <p style={{ marginTop: 8, color: "#374151" }}>
            Deployed on ECS behind an ALB. Use <code>/healthy</code> for health checks.
          </p>
        </div>

        <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/">Home</Link>
          <Link to="/healthy">/healthy</Link>
        </nav>
      </header>

      <hr style={{ margin: "20px 0" }} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthy" element={<Healthy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer style={{ marginTop: 24, color: "#6b7280", fontSize: 12 }}>
        Container should listen on port <b>80</b> (Nginx). Build date: {new Date().toISOString()}
      </footer>
    </div>
  );
}