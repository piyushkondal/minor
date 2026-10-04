import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import AuthService from "../../../services/AuthService";

function TeacherHeader() {
  let isLogin = AuthService.getIsLogin();
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
                      <li className="active">
                        <Link to="/teacher">Dashboard</Link>
                      </li>
                      <li className="active">
                        <Link to="/teacher/Groups">Groups</Link>
                      </li>

                      <li>
                        <Link to="/teacher/manageAssignment">
                          Manage Assignment
                        </Link>
                      </li>
                      <li>
                        <Link to="/teacher/managematerial">
                          Manage Material
                        </Link>
                      </li>
                      <li>
                        <Link to="/teacher/managenotice">Manage Notice</Link>
                      </li>
                      <li>
                        <Link to="/teacher/managepyq">Manage Pyq</Link>
                      </li>

                      {/* <li>
                  <Link to="/teacher/ManageAssingment">Manage Assingment</Link>
                </li> */}

                      {/* <Link to="/teacher/manageCategory">Category</Link> */}

                      <li>
                        {isLogin ? (
                          <button className="btn btn-danger" onClick={logout}>
                            Logout
                          </button>
                        ) : (
                          <Link to="#">Login</Link>
                        )}
                      </li>
                    </ul>

                    {/* Hamburger */}
                    <div className="hamburger menu_mm">
                      <i className="fa fa-bars menu_mm" aria-hidden="true" />
                    </div>
                  </nav>
                </div>
              </div>
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
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TeacherHeader;
