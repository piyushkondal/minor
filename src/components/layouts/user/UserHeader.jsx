import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function UserHeader() {
  let islogin = AuthService.getIsLogin();

  const nav = useNavigate();

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout !",
    }).then((result) => {
      if (result.isConfirmed) {
        AuthService.clear();
        toast.info("Logout");
        nav("/login");
        Swal.fire({
          title: "Logout!",
          // text: "YoSwalur file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <header className="header">
        {/* Top Bar */}

        {/* Header Content */}
        <div className="header_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <Link to="#">
                      <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                        <div className="logo_img">
                          <img
                            src="images/logo.png"
                            alt=""
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                        <div className="logo_text"></div>
                      </div>
                    </Link>
                  </div>
                  <nav className="main_nav_contaner ml-auto">
                    <ul className="main_nav">
                      <ul
                        id="navigation"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                          listStyle: "none",
                          margin: "10px",
                          marginLeft: "10px",
                          padding: "0",
                        }}
                      >
                        <li className="active">
                          <Link to="/">home</Link>
                        </li>
                        <li>
                          <Link to="/about">about us</Link>
                        </li>

                        <li>
                          <Link to="/contact">contact</Link>
                        </li>
                        <li>
                          <Link to="/viewCategory">viewCategory</Link>
                        </li>

                        <li>
                          <Link to="/register">register</Link>
                        </li>
                        <li>
                          <Link to="/userprofile">User Profile</Link>
                        </li>

                        <li>
                          {islogin ? (
                            <button className="btn btn-danger" onClick={logout}>
                              Logout
                            </button>
                          ) : (
                            <Link to="/login">Login</Link>
                          )}
                        </li>
                        <div className="userprofile"></div>
                      </ul>

                      {/* Hamburger */}
                      <div className="hamburger menu_mm">
                        <i className="fa fa-bars menu_mm" aria-hidden="true" />
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* islogin ? (
                            <Link className="nav-link" to="/userProfile">
                              <i className="bi bi-person-circle profile-icon" style={{ fontSize: '2rem', marginRight:"35px" }}></i>
                            </Link>
                          ) */}
            </div>
          </div>
        </div>
        {/* Header Search Panel */}
        <div className="header_search_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                  <form action="#" className="header_search_form">
                    <input
                      type="search"
                      className="search_input"
                      placeholder="Search"
                      required="required"
                    />
                    <button className="header_search_button d-flex flex-column align-items-center justify-content-center">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default UserHeader;
