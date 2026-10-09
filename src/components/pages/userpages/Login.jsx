import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import UserServices from "/src/Services/UserServices";

const ROUTES_BY_ROLE = {
  1: "/admin",
  2: "/",
  3: "/teacher",
};

function getLoginError(error) {
  if (error?.code === "auth/invalid-email") {
    return "Enter a valid email address.";
  }

  if (
    error?.code === "auth/invalid-credential" ||
    error?.code === "auth/wrong-password" ||
    error?.code === "auth/user-not-found"
  ) {
    return "Incorrect email or password.";
  }

  if (error?.code === "auth/too-many-requests") {
    return "Too many attempts. Please try again later.";
  }

  return error?.message || "Unable to log in. Please try again.";
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const role = await UserServices.Login(email, password);
      toast.success("Welcome back!");
      navigate(ROUTES_BY_ROLE[role], { replace: true });
    } catch (error) {
      toast.error(getLoginError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="home">
        <div
          className="home_background parallax_background parallax-window"
          data-parallax="scroll"
          data-image-src="/images/contact.jpg"
          data-speed="0.8"
        />
        <div className="home_container">
          <div className="container">
            <div className="home_content text-center">
              <div className="home_title">Sign in</div>
              <p style={{ color: "#fff" }}>Access your course community</p>
            </div>
          </div>
        </div>
      </div>

      <main className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-5">
              <div className="contact_form_container">
                <h2 className="text-center mb-3">Welcome back</h2>
                <p className="text-center mb-4">
                  Students, teachers, and admins can sign in here.
                </p>

                <form onSubmit={handleSubmit} className="contact_form">
                  <div className="mb-3">
                    <label htmlFor="login-email">Email address</label>
                    <input
                      id="login-email"
                      className="contact_input"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="login-password">Password</label>
                    <input
                      id="login-password"
                      className="contact_input"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="contact_button"
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <HashLoader size={22} color="#ffffff" />
                      ) : (
                        "Sign in"
                      )}
                    </button>
                  </div>
                </form>

                <p className="text-center mt-4">
                  New student? <Link to="/register">Create an account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
