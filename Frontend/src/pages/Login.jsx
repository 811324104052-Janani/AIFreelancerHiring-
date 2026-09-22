import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "Freelancer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    // Temporary frontend login
    // Later this will connect to Spring Boot + JWT.

    localStorage.setItem("token", "demo-token");
    localStorage.setItem("role", form.role);
    localStorage.setItem("email", form.email);

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-glow glow-one"></div>
      <div className="login-glow glow-two"></div>

      {/* LEFT SIDE */}

      <section className="login-intro">

        <div className="logo-box">F</div>

        <div className="brand-name">
          Freelance<span>Hub</span>
        </div>

        <h1>
          Connect.
          <br />
          Create.
          <br />
          <span>Grow.</span>
        </h1>

        <p>
          A smarter way for clients and freelancers
          to connect, collaborate and build successful
          projects together.
        </p>

        <div className="benefits">

          <div className="benefit">
            <div>⚡</div>
            <span>
              <strong>Smart Matching</strong>
              <small>Discover the right opportunities</small>
            </span>
          </div>

          <div className="benefit">
            <div>🛡️</div>
            <span>
              <strong>Secure Workspace</strong>
              <small>Built with security in mind</small>
            </span>
          </div>

          <div className="benefit">
            <div>📈</div>
            <span>
              <strong>Project Tracking</strong>
              <small>Manage work from one place</small>
            </span>
          </div>

        </div>

      </section>

      {/* LOGIN CARD */}

      <section className="login-wrapper">

        <div className="login-card">

          <div className="login-top">
            <p>WELCOME BACK</p>

            <h2>Sign in to FreelanceHub</h2>

            <span>
              Continue where you left off.
            </span>
          </div>

          {error && (
            <div className="error-box">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="input-group">

              <label>Email Address</label>

              <div className="input-box">

                <span>✉</span>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <div className="password-header">
                <label>Password</label>

                <a href="#forgot">
                  Forgot password?
                </a>
              </div>

              <div className="input-box">

                <span>🔒</span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="eye-button"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>

            {/* ROLE */}

            <div className="input-group">

              <label>Continue as</label>

              <div className="roles">

                <button
                  type="button"
                  className={
                    form.role === "Freelancer"
                      ? "role active"
                      : "role"
                  }
                  onClick={() =>
                    setForm({
                      ...form,
                      role: "Freelancer",
                    })
                  }
                >
                  <b>👨‍💻</b>

                  <span>
                    <strong>Freelancer</strong>
                    <small>Find projects</small>
                  </span>
                </button>

                <button
                  type="button"
                  className={
                    form.role === "Client"
                      ? "role active"
                      : "role"
                  }
                  onClick={() =>
                    setForm({
                      ...form,
                      role: "Client",
                    })
                  }
                >
                  <b>🏢</b>

                  <span>
                    <strong>Client</strong>
                    <small>Hire talent</small>
                  </span>
                </button>

              </div>

            </div>

            <button
              type="submit"
              className="signin-button"
            >
              Sign In
              <span>→</span>
            </button>

          </form>

          <div className="signup-area">

            <span>New to FreelanceHub?</span>

            <Link to="/register">
              Create an account
            </Link>

          </div>

        </div>

        <p className="footer-text">
          © 2026 FreelanceHub · Smart · Secure · Simple
        </p>

      </section>

      <style>{`

        * {
          box-sizing: border-box;
        }

        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 100px;
          padding: 40px 7%;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(79,124,255,.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(139,92,246,.16),
              transparent 30%
            ),
            #07111f;
          color: white;
          font-family: Arial, sans-serif;
        }

        .login-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
        }

        .glow-one {
          width: 280px;
          height: 280px;
          background: rgba(59,130,246,.10);
          left: -120px;
          top: -80px;
        }

        .glow-two {
          width: 300px;
          height: 300px;
          background: rgba(139,92,246,.09);
          right: -100px;
          bottom: -100px;
        }

        /* INTRO */

        .login-intro {
          width: 450px;
          position: relative;
          z-index: 2;
        }

        .logo-box {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            #4f7cff,
            #8b5cf6
          );
          font-size: 27px;
          font-weight: 900;
          box-shadow:
            0 15px 40px rgba(79,124,255,.25);
        }

        .brand-name {
          margin-top: 15px;
          font-size: 16px;
          font-weight: 700;
        }

        .brand-name span {
          color: #7898ff;
        }

        .login-intro h1 {
          margin: 35px 0 20px;
          font-size: 62px;
          line-height: .98;
          letter-spacing: -4px;
        }

        .login-intro h1 span {
          background: linear-gradient(
            90deg,
            #5b8cff,
            #a78bfa
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .login-intro > p {
          color: #8997ad;
          font-size: 15px;
          line-height: 1.7;
          max-width: 420px;
        }

        .benefits {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .benefit > div {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.08);
        }

        .benefit strong {
          display: block;
          font-size: 12px;
        }

        .benefit small {
          display: block;
          margin-top: 4px;
          color: #66758d;
          font-size: 10px;
        }

        /* CARD */

        .login-wrapper {
          width: 450px;
          position: relative;
          z-index: 2;
        }

        .login-card {
          padding: 40px;
          border-radius: 25px;
          background: rgba(15,27,48,.82);
          border: 1px solid rgba(255,255,255,.10);
          backdrop-filter: blur(25px);
          box-shadow:
            0 30px 80px rgba(0,0,0,.4);
        }

        .login-top p {
          margin: 0 0 8px;
          color: #6f94ff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .login-top h2 {
          margin: 0;
          font-size: 26px;
        }

        .login-top span {
          display: block;
          margin-top: 8px;
          color: #78869d;
          font-size: 12px;
        }

        .error-box {
          margin-top: 20px;
          padding: 11px;
          border-radius: 10px;
          color: #fca5a5;
          background: rgba(239,68,68,.10);
          border: 1px solid rgba(239,68,68,.25);
          font-size: 11px;
        }

        form {
          margin-top: 27px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          color: #c3ccda;
          font-size: 11px;
          font-weight: 600;
        }

        .password-header {
          display: flex;
          justify-content: space-between;
        }

        .password-header a {
          color: #7191ff;
          font-size: 10px;
          text-decoration: none;
        }

        .input-box {
          height: 50px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 13px;
          border-radius: 12px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          transition: .2s;
        }

        .input-box:focus-within {
          border-color: #5b7fff;
          box-shadow:
            0 0 0 3px rgba(91,127,255,.09);
        }

        .input-box > span {
          opacity: .6;
        }

        .input-box input {
          flex: 1;
          height: 100%;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          font-size: 12px;
        }

        .input-box input::placeholder {
          color: #526077;
        }

        .eye-button {
          border: none;
          background: transparent;
          cursor: pointer;
          opacity: .7;
        }

        /* ROLES */

        .roles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .role {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px;
          text-align: left;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.035);
          color: white;
          cursor: pointer;
        }

        .role.active {
          border-color: #5b7fff;
          background: rgba(79,124,255,.12);
        }

        .role b {
          font-size: 18px;
        }

        .role strong {
          display: block;
          font-size: 10px;
        }

        .role small {
          display: block;
          margin-top: 3px;
          color: #68768c;
          font-size: 9px;
        }

        /* BUTTON */

        .signin-button {
          width: 100%;
          height: 51px;
          margin-top: 4px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(
            100deg,
            #4f7cff,
            #795cf6
          );
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: .2s;
          box-shadow:
            0 12px 30px rgba(79,124,255,.22);
        }

        .signin-button:hover {
          transform: translateY(-2px);
        }

        .signin-button span {
          font-size: 19px;
        }

        .signup-area {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.07);
          text-align: center;
          font-size: 11px;
          color: #68768c;
        }

        .signup-area a {
          margin-left: 5px;
          color: #7898ff;
          font-weight: 700;
          text-decoration: none;
        }

        .footer-text {
          text-align: center;
          color: #46546b;
          font-size: 9px;
          margin-top: 16px;
        }

        @media(max-width:900px) {

          .login-page {
            gap: 40px;
            padding: 30px;
          }

          .login-intro {
            width: 40%;
          }

          .login-intro h1 {
            font-size: 45px;
          }

          .login-wrapper {
            width: 440px;
          }

        }

        @media(max-width:700px) {

          .login-page {
            padding: 25px 15px;
          }

          .login-intro {
            display: none;
          }

          .login-wrapper {
            width: 100%;
            max-width: 450px;
          }

          .login-card {
            padding: 30px 23px;
          }

        }

      `}</style>
    </div>
  );
}

export default Login;