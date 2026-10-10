import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import UserServices from "/src/Services/UserServices";

function getRegistrationError(error) {
  if (error?.code === "auth/email-already-in-use") {
    return "An account already exists with this email.";
  }

  if (error?.code === "auth/weak-password") {
    return "Choose a stronger password.";
  }

  if (error?.code === "auth/invalid-email") {
    return "Enter a valid email address.";
  }

  return error?.message || "Registration failed. Please try again.";
}

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rollNumber: "",
    contact: "",
    Course: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!form.name.trim() || !form.rollNumber.trim() || !form.Course.trim()) {
      toast.error("Complete all required fields.");
      return;
    }

    setLoading(true);

    try {
      await UserServices.Register(form);
      toast.success("Student account created successfully.");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(getRegistrationError(error));
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
              <div className="home_title">Student registration</div>
              <p style={{ color: "#fff" }}>
                Join your university course community
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">
              <div className="contact_form_container">
                <h2 className="text-center mb-3">Create your account</h2>
                <p className="text-center mb-4">
                  Registration is for students. Teachers and admins receive
                  accounts through the university administrator.
                </p>

                <form onSubmit={handleSubmit} className="contact_form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="student-name">Full name</label>
                      <input
                        id="student-name"
                        name="name"
                        type="text"
                        className="contact_input"
                        value={form.name}
                        onChange={updateField}
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="roll-number">
                        Enrollment / roll number
                      </label>
                      <input
                        id="roll-number"
                        name="rollNumber"
                        type="text"
                        className="contact_input"
                        value={form.rollNumber}
                        onChange={updateField}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="student-email">Email address</label>
                      <input
                        id="student-email"
                        name="email"
                        type="email"
                        className="contact_input"
                        value={form.email}
                        onChange={updateField}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="student-contact">
                        Contact number (optional)
                      </label>
                      <input
                        id="student-contact"
                        name="contact"
                        type="tel"
                        className="contact_input"
                        value={form.contact}
                        onChange={updateField}
                        autoComplete="tel"
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label htmlFor="student-course">Course</label>
                      <input
                        id="student-course"
                        name="Course"
                        type="text"
                        className="contact_input"
                        placeholder="Enter your course exactly as listed by your admin"
                        value={form.Course}
                        onChange={updateField}
                        required
                      />
                      <small>
                        This will become a dropdown once connected to your
                        admin-managed courses.
                      </small>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label htmlFor="student-password">Password</label>
                      <input
                        id="student-password"
                        name="password"
                        type="password"
                        className="contact_input"
                        value={form.password}
                        onChange={updateField}
                        autoComplete="new-password"
                        minLength={6}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label htmlFor="confirm-password">Confirm password</label>
                      <input
                        id="confirm-password"
                        name="confirmPassword"
                        type="password"
                        className="contact_input"
                        value={form.confirmPassword}
                        onChange={updateField}
                        autoComplete="new-password"
                        minLength={6}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Profile-Pic">PROFILE PIC</label>
                      <input
                        name=""
                        onChange={(e) => {
                          setimage(e.target.files[0]);
                        }}
                        id="email"
                        type="file"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter category name'"
                        placeholder="Email"
                        className="contact_input"
                        required="required"
                      />
                    </div>
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
                        "Create student account"
                      )}
                    </button>
                  </div>
                </form>

                <p className="text-center mt-4">
                  Already registered? <Link to="/login">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
