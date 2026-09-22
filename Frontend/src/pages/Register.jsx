import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Freelancer",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Temporary frontend registration
    // Later this will connect to Spring Boot.

    localStorage.setItem("name", form.name);
    localStorage.setItem("email", form.email);
    localStorage.setItem("role", form.role);
    localStorage.setItem("token", "demo-token");

    navigate("/dashboard");
  };

  return (
    <div className="register-page">

      {/* HEADER */}

      <header className="register-header">

        <Link to="/login" className="register-brand">

          <div className="brand-icon">
            F
          </div>

          <div>
            <strong>FreelanceHub</strong>
            <small>Work smarter. Grow faster.</small>
          </div>

        </Link>

        <div className="existing-account">
          Already have an account?
          <Link to="/login"> Sign in</Link>
        </div>

      </header>

      {/* MAIN */}

      <main className="register-main">

        <div className="register-card">

          <div className="register-heading">

            <div className="heading-icon">
              ✨
            </div>

            <div>
              <p>GET STARTED</p>

              <h1>Create your account</h1>

              <span>
                Join thousands of professionals building
                better work together.
              </span>
            </div>

          </div>

          {error && (
            <div className="register-error">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleRegister}>

            {/* NAME */}

            <div className="field-group">

              <label>Full Name</label>

              <div className="register-input">

                <span>👤</span>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* EMAIL */}

            <div className="field-group">

              <label>Email Address</label>

              <div className="register-input">

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

            <div className="two-fields">

              <div className="field-group">

                <label>Password</label>

                <div className="register-input">

                  <span>🔒</span>

                  <input
                    type="password"
                    name="password"
                    placeholder="Create password"
                    value={form.password}
                    onChange={handleChange}
                  />

                </div>

              </div>

              <div className="field-group">

                <label>Confirm Password</label>

                <div className="register-input">

                  <span>🔐</span>

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>

            {/* ROLE */}

            <div className="role-title">
              <label>Choose your role</label>
            </div>

            <div className="register-roles">

              <button
                type="button"
                className={
                  form.role === "Freelancer"
                    ? "register-role selected"
                    : "register-role"
                }
                onClick={() =>
                  setForm({
                    ...form,
                    role: "Freelancer",
                  })
                }
              >

                <div className="role-icon">
                  👨‍💻
                </div>

                <div className="role-content">

                  <strong>Freelancer</strong>

                  <small>
                    Find projects, showcase your skills
                    and grow your career.
                  </small>

                </div>

                <div className="radio">
                  {form.role === "Freelancer" && "✓"}
                </div>

              </button>

              <button
                type="button"
                className={
                  form.role === "Client"
                    ? "register-role selected"
                    : "register-role"
                }
                onClick={() =>
                  setForm({
                    ...form,
                    role: "Client",
                  })
                }
              >

                <div className="role-icon">
                  🏢
                </div>

                <div className="role-content">

                  <strong>Client</strong>

                  <small>
                    Post jobs, hire talented people
                    and manage projects.
                  </small>

                </div>

                <div className="radio">
                  {form.role === "Client" && "✓"}
                </div>

              </button>

            </div>

            {/* TERMS */}

            <div className="terms">

              <span>✓</span>

              <p>
                By creating an account, you agree to our
                <a href="#terms"> Terms of Service</a> and
                <a href="#privacy"> Privacy Policy</a>.
              </p>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="create-button"
            >
              Create Account
              <span>→</span>
            </button>

          </form>

          <div className="security-note">
            🛡️ Your information is protected with secure
            authentication.
          </div>

        </div>

      </main>

      <style>{`

        * {
          box-sizing: border-box;
        }

        .register-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(79,124,255,.16),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(139,92,246,.14),
              transparent 30%
            ),
            #07111f;
          color: white;
          font-family: Arial, sans-serif;
        }

        .register-header {
          height: 80px;
          padding: 0 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,.07);
          background: rgba(7,17,31,.65);
          backdrop-filter: blur(15px);
        }

        .register-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: white;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 11px;
          background: linear-gradient(
            135deg,
            #4f7cff,
            #8b5cf6
          );
          font-size: 20px;
          font-weight: 900;
        }

        .register-brand strong {
          display: block;
          font-size: 15px;
        }

        .register-brand small {
          display: block;
          margin-top: 3px;
          color: #65748b;
          font-size: 9px;
        }

        .existing-account {
          color: #75839a;
          font-size: 11px;
        }

        .existing-account a {
          color: #7898ff;
          text-decoration: none;
          font-weight: bold;
        }

        .register-main {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 45px 20px;
        }

        .register-card {
          width: 650px;
          max-width: 100%;
          padding: 40px;
          border-radius: 26px;
          background: rgba(15,27,48,.82);
          border: 1px solid rgba(255,255,255,.10);
          backdrop-filter: blur(25px);
          box-shadow:
            0 30px 80px rgba(0,0,0,.4);
        }

        .register-heading {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-bottom: 28px;
        }

        .heading-icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(79,124,255,.12);
          border: 1px solid rgba(79,124,255,.25);
          font-size: 20px;
        }

        .register-heading p {
          margin: 0 0 5px;
          color: #6f94ff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .register-heading h1 {
          margin: 0;
          font-size: 27px;
        }

        .register-heading span {
          display: block;
          margin-top: 6px;
          color: #75839a;
          font-size: 11px;
        }

        .register-error {
          margin-bottom: 20px;
          padding: 12px;
          border-radius: 10px;
          color: #fca5a5;
          background: rgba(239,68,68,.10);
          border: 1px solid rgba(239,68,68,.25);
          font-size: 11px;
        }

        .field-group {
          flex: 1;
          margin-bottom: 18px;
        }

        .field-group label,
        .role-title label {
          display: block;
          margin-bottom: 7px;
          color: #bdc7d7;
          font-size: 11px;
          font-weight: 600;
        }

        .register-input {
          height: 49px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 13px;
          border-radius: 12px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
        }

        .register-input:focus-within {
          border-color: #5b7fff;
          box-shadow:
            0 0 0 3px rgba(91,127,255,.08);
        }

        .register-input > span {
          opacity: .6;
        }

        .register-input input {
          flex: 1;
          min-width: 0;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          color: white;
          font-size: 12px;
        }

        .register-input input::placeholder {
          color: #526077;
        }

        .two-fields {
          display: flex;
          gap: 12px;
        }

        .role-title {
          margin-top: 8px;
        }

        .register-roles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .register-role {
          min-height: 100px;
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 15px;
          text-align: left;
          color: white;
          border-radius: 14px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.08);
          cursor: pointer;
        }

        .register-role.selected {
          background: rgba(79,124,255,.11);
          border-color: #5b7fff;
        }

        .role-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 11px;
          background: rgba(255,255,255,.06);
          font-size: 17px;
        }

        .role-content strong {
          display: block;
          font-size: 11px;
        }

        .role-content small {
          display: block;
          max-width: 180px;
          margin-top: 6px;
          color: #69778d;
          font-size: 9px;
          line-height: 1.5;
        }

        .radio {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 19px;
          height: 19px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          border: 1px solid #46536a;
          font-size: 10px;
        }

        .selected .radio {
          border-color: #6a8aff;
          background: #6a8aff;
        }

        .terms {
          display: flex;
          gap: 8px;
          margin: 19px 0;
          align-items: flex-start;
        }

        .terms > span {
          width: 17px;
          height: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 5px;
          background: rgba(79,124,255,.13);
          color: #7898ff;
          font-size: 9px;
        }

        .terms p {
          margin: 0;
          color: #65748b;
          font-size: 9px;
          line-height: 1.5;
        }

        .terms a {
          color: #7898ff;
          text-decoration: none;
        }

        .create-button {
          width: 100%;
          height: 51px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(
            100deg,
            #4f7cff,
            #795cf6
          );
          color: white;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          transition: .2s;
          box-shadow:
            0 12px 30px rgba(79,124,255,.22);
        }

        .create-button:hover {
          transform: translateY(-2px);
        }

        .create-button span {
          font-size: 19px;
        }

        .security-note {
          margin-top: 18px;
          padding-top: 17px;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,.06);
          color: #536178;
          font-size: 9px;
        }

        @media(max-width:650px) {

          .register-header {
            padding: 0 20px;
          }

          .existing-account {
            max-width: 130px;
            text-align: right;
          }

          .register-card {
            padding: 28px 20px;
          }

          .two-fields {
            flex-direction: column;
            gap: 0;
          }

          .register-roles {
            grid-template-columns: 1fr;
          }

        }

      `}</style>
    </div>
  );
}

export default Register;