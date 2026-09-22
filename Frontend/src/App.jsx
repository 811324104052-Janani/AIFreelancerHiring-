import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Dashboard() {
  const role = localStorage.getItem("role") || "Freelancer";
  const name = localStorage.getItem("name") || "User";

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <div className="dashboard-logo">F</div>

        <p className="dashboard-label">FREELANCEHUB</p>

        <h1>
          Welcome, <span>{name}</span> 👋
        </h1>

        <p className="dashboard-text">
          You are logged in as <strong>{role}</strong>.
        </p>

        <div className="dashboard-message">
          <div className="message-icon">🚀</div>

          <div>
            <strong>Your workspace is ready</strong>
            <p>
              Your personalized freelancer platform dashboard
              will appear here.
            </p>
          </div>
        </div>

        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <style>{`
        .dashboard-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          background:
            radial-gradient(circle at 20% 20%, rgba(79,124,255,.18), transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(139,92,246,.16), transparent 30%),
            #07111f;
          color: white;
          font-family: Arial, sans-serif;
        }

        .dashboard-card {
          width: 500px;
          max-width: 100%;
          padding: 45px;
          border-radius: 25px;
          text-align: center;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
          backdrop-filter: blur(20px);
          box-shadow: 0 30px 80px rgba(0,0,0,.35);
        }

        .dashboard-logo {
          width: 65px;
          height: 65px;
          margin: 0 auto 20px;
          border-radius: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg,#4f7cff,#8b5cf6);
          font-size: 30px;
          font-weight: 900;
        }

        .dashboard-label {
          color: #7191ff;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 3px;
        }

        .dashboard-card h1 {
          font-size: 30px;
          margin: 15px 0 10px;
        }

        .dashboard-card h1 span {
          color: #7898ff;
        }

        .dashboard-text {
          color: #8997ad;
        }

        .dashboard-message {
          margin-top: 30px;
          padding: 20px;
          display: flex;
          gap: 15px;
          text-align: left;
          border-radius: 15px;
          background: rgba(79,124,255,.10);
          border: 1px solid rgba(79,124,255,.20);
        }

        .message-icon {
          font-size: 25px;
        }

        .dashboard-message strong {
          font-size: 14px;
        }

        .dashboard-message p {
          color: #7d8ba2;
          font-size: 12px;
          line-height: 1.5;
        }

        .logout-button {
          margin-top: 25px;
          padding: 13px 30px;
          border: none;
          border-radius: 11px;
          background: #ef4444;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;