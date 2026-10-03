import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../../../services/AuthService'
import { toast } from 'react-toastify'
import Swal from "sweetalert2"


function AdminHeader() {
  let isLogin=AuthService.getIsLogin()
  const nav=useNavigate()

  const logout= () => {
  
  
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout !"
    }).then((result) => {
      if (result.isConfirmed) {
        AuthService.clear()
        toast.info("Logout")
        nav("/login")
        Swal.fire({
          title: "Logout!",
          // text: "YoSwalur file has been deleted.",
          icon: "success"
        });
      }
    });
     
    


  }
  return (
    <>
    
    <header className="header">
  {/* Top Bar */}
  <div className="top_bar">
    <div className="top_bar_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
              <ul className="top_bar_contact_list">
                <li>
                  <div className="question">Have any questions?</div>
                </li>
                <li>
                  <div>(009) 35475 6688933 32</div>
                </li>
                <li>
                  <div>info@elaerntemplate.com</div>
                </li>
              </ul>
              <div className="top_bar_login ml-auto">
                <ul>
                  <li>
                    <Link to="#">Register</Link>
                  </li>
                  <li>
                    <Link to="#">Login</Link>
                  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
                    <img src="images/logo.png" alt=""style={{ height:"60px", width:"60px" }} />
                  </div>
                  <div className="logo_text"></div>
                </div>
              </Link>
            </div>
            <nav className="main_nav_contaner ml-auto">
              <ul className="main_nav">
                <li className="active">
                  <Link to="/admin">Dashboard</Link>
                </li>
                {/* <li>
                  <Link to="/about">about us</Link>
                </li>
                <li>
                  <Link to="/courses">courses</Link>
                </li>
                <li>
                  <Link to="/news">news</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>*/}
                <li>
                  <Link to="/admin/manageGroup">Group</Link>
                </li> 
                <li>          
                  <Link to="/admin/manageCategory">Category</Link>
                </li>
                <li>          
                  <Link to="/admin/manageteacher">Teacher</Link>
                </li>
                <li>          
                  <Link to="/admin/manageStudent">Student</Link>
                </li>




                <li>
                    {isLogin?
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                  :
                    <Link to="#">Login</Link>
                    }
                  </li>
              </ul>
              <div className="search_button">
                <i className="fa fa-search" aria-hidden="true" />
              </div>
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
  )
}

export default AdminHeader