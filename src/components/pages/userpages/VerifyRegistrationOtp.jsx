import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import UserServices from "/src/Services/UserServices";
import "./VerifyRegistrationOtp.css";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 60;

const VerifyRegistrationOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const registrationForm = location.state?.form;

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (!registrationForm) {
      toast.error("Registration session expired. Please start again.");
      navigate("/register", { replace: true });
      return;
    }

    inputRefs.current[0]?.focus();
  }, [registrationForm, navigate]);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleOtpChange = (index, value) => {
    const cleanedValue = value.replace(/\D/g, "").slice(-1);

    setOtp((current) => {
      const nextOtp = [...current];
      nextOtp[index] = cleanedValue;
      return nextOtp;
    });

    if (cleanedValue && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();

    const pastedOtp = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pastedOtp) return;

    const nextOtp = Array(OTP_LENGTH).fill("");

    pastedOtp.split("").forEach((digit, index) => {
      nextOtp[index] = digit;
    });

    setOtp(nextOtp);

    const focusIndex = Math.min(pastedOtp.length, OTP_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async (event) => {
    event.preventDefault();

    const enteredOtp = otp.join("");

    if (enteredOtp.length !== OTP_LENGTH) {
      toast.error("Enter the complete 6-digit OTP.");
      return;
    }

    setLoading(true);

    try {
      await UserServices.verifyRegistrationOtp(
        registrationForm.email,
        enteredOtp,
      );

      await UserServices.Register(registrationForm);

      toast.success("Student account created successfully.");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(
        error?.message || "Invalid or expired OTP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (secondsLeft > 0 || resending) return;

    setResending(true);

    try {
      await UserServices.sendRegistrationOtp(registrationForm.email);

      setOtp(Array(OTP_LENGTH).fill(""));
      setSecondsLeft(RESEND_SECONDS);
      inputRefs.current[0]?.focus();

      toast.success("A new OTP has been sent.");
    } catch (error) {
      toast.error(error?.message || "Unable to resend OTP.");
    } finally {
      setResending(false);
    }
  };

  if (!registrationForm) {
    return null;
  }

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
              <div className="home_title">Verify your email</div>

              <p style={{ color: "#fff" }}>
                Confirm your email to complete registration
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7">
              <div className="contact_form_container text-center">
                <h2 className="mb-3">Enter verification code</h2>

                <p className="mb-4">
                  We sent a 6-digit OTP to{" "}
                  <strong>{registrationForm.email}</strong>
                </p>

                <form onSubmit={handleVerify}>
                  <div
                    className="otp_container d-flex justify-content-center gap-2 mb-4"
                    onPaste={handlePaste}
                  >
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(element) => {
                          inputRefs.current[index] = element;
                        }}
                        className="otp_input"
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        aria-label={`OTP digit ${index + 1}`}
                        onChange={(event) =>
                          handleOtpChange(index, event.target.value)
                        }
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        autoComplete={index === 0 ? "one-time-code" : "off"}
                      />
                    ))}
                  </div>

                  <p className="mb-4">
                    {secondsLeft > 0 ? (
                      <>
                        You can request a new code in{" "}
                        <strong>{secondsLeft}s</strong>
                      </>
                    ) : (
                      "Didn't receive the code?"
                    )}
                  </p>

                  <button
                    type="button"
                    className="btn btn-link mb-3"
                    onClick={handleResend}
                    disabled={secondsLeft > 0 || resending}
                  >
                    {resending ? "Sending..." : "Resend OTP"}
                  </button>

                  <div>
                    <button
                      type="submit"
                      className="contact_button"
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <HashLoader size={22} color="#ffffff" />
                      ) : (
                        "Verify and create account"
                      )}
                    </button>
                  </div>
                </form>

                <p className="mt-4">
                  Wrong email?{" "}
                  <Link to="/register" state={{ form: registrationForm }}>
                    Change email
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default VerifyRegistrationOtp;
