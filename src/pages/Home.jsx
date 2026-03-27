import React from "react";

export default function Home() {
  return (
    <div>
      <h2>Frontend is running</h2>
      <p>
        If you can see this page in your ECS service URL, your container, ALB listener, and target group routing are working.
      </p>

      <div style={{ marginTop: 16, padding: 16, background: "#f9fafb", borderRadius: 10, border: "1px solid #e5e7eb" }}>
        <h3 style={{ marginTop: 0 }}>What to screenshot</h3>
        <ul style={{ marginBottom: 0 }}>
          <li>This page showing “Frontend is running”</li>
          <li>Or the <code>/healthy</code> page returning “OK”</li>
        </ul>
      </div>
    </div>
  );
}