import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserServices from '/src/Services/UserServices'
import CloudnaryServices from '../../../services/CloudnaryServices'



const Register=()=>{

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [profile, setProfile] = useState(null);
  const [Course, setCourse] = useState("");

   const nav=useNavigate()

  const handleSubmit =async (e) => {
    e.preventDefault();

    let ImageUrl= await CloudnaryServices.UploadImage(profile)

    const userData = {
      name,
      email,
      password,
      contact,
      profile:ImageUrl,
      Course,
    };

   let res=await UserServices.Register(userData)
   if(res==1){
    toast.success("register and Login successfully")
    nav("/")
   }else{
    toast.error("Retry")
   }

  };

    return(
        <>
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
              <div className="home_title">Register</div>
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
  {/* Contact */}
  <div className="contact">
    <div className="container-fluid">
      <div className="row row-xl-eq-height">
        {/* Contact Content */}
        <div className="col-xl-12">
          <div className="contact_content">
            {/* <div className="row justify-content-center "> 
              <div className="<div className="col-xl-6>
                <div className="contact_about">
                  <div className="logo_container">
                    <Link to="#">
                      <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                        <div className="logo_img">
                          <img src="images/logo.png" alt="" />
                        </div>
                        <div className="logo_text justify-content-center">login</div>
                      </div>
                    </Link>
                  </div>
                  <div className="contact_about_text">
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
      
              </div>
            </div> */}
            <div className="contact_form_container">
              <form action="#" id="contact_form" onSubmit={handleSubmit} method="post" className="contact_form">
                <div>
                  <div className="row justify-content-center" >
                    <div className="col-xl-8 my-2" >
                      <input
                      name="name"
                    id="name"
                    required
                     value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter You Name'"
                    placeholder="Name"
                    required="required"
                     className="contact_input"
                      />
                    </div>
                    <div className="col-xl-8 my-2">
                      <input
                         name="email"
                    
                         value={email}
                         onChange={(e)=>{
                            setEmail(e.target.value)
                          }}

                          id="email"
                        type="email"
                         onfocus="this.placeholder = ''"
                         onblur="this.placeholder = 'Enter email address'"
                         placeholder="Email"
                        className="contact_input"
                        required="required"
                      />
                    </div>
                    <div className="col-xl-8 my-2" >
                      <input
                      name="passward"
                    id="passward"
                    required
                     value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    type="password"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter You Password'"
                    placeholder="Password"
                    required="required"
                     className="contact_input"
                      />
                    </div>
                    <div className="col-xl-8 my-2" >
                      <input
                      name="contact"
                    id="contact"
                    required
                     value={contact}
                    onChange={(e)=>{
                        setContact(e.target.value)
                    }}
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter You Contact'"
                    placeholder="Contact"
                    required="required"
                     className="contact_input"
                      />
                    </div>
                    <div className="col-xl-8 my-2" >
                      <input
                      name="profile"
                    
                    required 
                     
                    accept="image/*"
                    onChange={(e) => setProfile(e.target.files[0])}
                    type="file"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter You Password'"
                    placeholder="Password"
                    required="required"
                     className="contact_input"
                      />
                    </div>
                    <div className="col-xl-8 my-2" >
                      <input
                      name="address"
                    id="address"
                    required
                     value={Course}
                    onChange={(e)=>{
                        setCourse(e.target.value)
                    }}
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter You Address'"
                    placeholder="Course"
                    required="required"
                     className="contact_input"
                      />
                    </div>

                  </div>
                </div>
                 <div className="d-flex justify-content-center">
                <button   style={{
                            backgroundColor:"#ff8a00"}} type="submit" className="contact_button btn ">
                          Register
                  </button>
                  </div> 
              </form>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div> 
   
  
    </>
        </>
    )

}
export default Register