import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserServices from "/src/Services/UserServices";
import { HashLoader } from "react-spinners";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [load, setload] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setload(true);
    console.log(email);
    console.log(password);

    try {
      let userType = await UserServices.Login(email, password);

      if (userType == 1) {
        toast.success("Login Successfully");

        nav("/admin");
      } else if (userType == 2) {
        toast.success("User Login Successfully");
        nav("/");
      } else if (userType == 3) {
        toast.success("Teacher Login Successfully");
        nav("/teacher");
      } else {
        toast.error("Login Failed");
      }

      console.log(userType);
    } catch (err) {
      toast.error(err);
    } finally {
      setload(false);
    }
  };

  return (
    <>
      {load ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        >
          <HashLoader size={100} color="#f49522" />
        </div>
      ) : (
        <>
          {/* Menu */}
          <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
            <div className="menu_close_container">
              <div className="menu_close">
                <div />
                <div />
              </div>
            </div>
            <div className="search">
              <form action="#" className="header_search_form menu_mm">
                <input
                  type="search"
                  className="search_input menu_mm"
                  placeholder="Search"
                  required="required"
                />
                <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                  <i className="fa fa-search menu_mm" aria-hidden="true" />
                </button>
              </form>
            </div>
            <nav className="menu_nav">
              <ul className="menu_mm">
                <li className="menu_mm">
                  <Link to="index.html">Home</Link>
                </li>
                <li className="menu_mm">
                  <Link to="courses.html">Courses</Link>
                </li>
                <li className="menu_mm">
                  <Link to="instructors.html">Instructors</Link>
                </li>
                <li className="menu_mm">
                  <Link to="#">Events</Link>
                </li>
                <li className="menu_mm">
                  <Link to="blog.html">Blog</Link>
                </li>
                <li className="menu_mm">
                  <Link to="contact.html">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="menu_extra">
              <div className="menu_phone">
                <span className="menu_title">phone:</span>(009) 35475 6688933 32
              </div>
              <div className="menu_social">
                <span className="menu_title">follow us</span>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-pinterest" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Home */}
          <div className="home">
            {/* Background image artist https://unsplash.com/@thepootphotographer */}
            <div
              className="home_background parallax_background parallax-window"
              data-parallax="scroll"
              data-image-src="/images/contact.jpg"
              data-speed="0.8"
            />
            <div className="home_container">
              <div className="container">
                <div className="row justify-content-center ">
                  <div className="col">
                    <div className="home_content text-center">
                      <div className="home_title">Login</div>
                      <div className="breadcrumbs">
                        <ul>
                          <li>
                            <Link to="index.html">Home</Link>
                          </li>
                          <li>Contact</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="container-fluid">
              <div className="row row-xl-eq-height">
                {/* Contact Content */}
                <div className="col-xl-12">
                  <div className="contact_content d-flex justify-content-center">
                    <div className="row">
                      {/* <div className="col-xl-6">
              <div className="contact_about">
                <div className="logo_container">
                  <a href="#">
                    <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                      
            
                    </div>
                  </a>
                </div>
              
              </div>
            </div> */}
                    </div>
                    <div className="contact_form_container">
                      <form
                        onSubmit={handleSubmit}
                        id="contact_form"
                        className="contact_form"
                      >
                        <div>
                          <div className="row">
                            <div className="col-lg-12 contact_name_col mb-4">
                              <input
                                type="email"
                                className="contact_input"
                                placeholder="Email"
                                required="required"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                            <div className="col-lg-12">
                              <input
                                type="password"
                                className="contact_input"
                                placeholder="password"
                                required="required"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center">
                          <button className="contact_button">
                            <span>Login</span>
                            <span className="button_arrow">
                              <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                              />
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                \
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Login;
