import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="super_container">
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
              <span className="menu_title">phone:</span>(009) 35475
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
            data-image-src="/images/about.jpg"
            data-speed="0.8"
          />
          <div className="home_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_content text-center">
                    <div className="home_title">About us</div>
                    <div className="breadcrumbs">
                      <ul>
                        <li>
                          <Link to="index.html">Home</Link>
                        </li>
                        <li>About us</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <div className="about">
          <div className="container">
            <div className="row about_row row-lg-eq-height">
              <div className="col-lg-6">
                <div className="about_content">
                  <div className="about_title">Our Platform's main goal</div>
                  <div className="about_text">
                    <p>
                      Suspendisse tincidunt magna eget massa hendrerit
                      efficitur. Ut euismod pellentesque imperdiet. Cras laoreet
                      gravida lectus, at viverra lorem venenatis in. Aenean id
                      varius quam. Nullam bibendum interdum dui, ac tempor lorem
                      convallis ut. Maecenas rutrum viverra sapien sed
                      fermentum. Morbi tempor odio eget lacus tempus pulvinar.
                      Praesent vel nisl fermentum, gravida augue. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Integer id
                      convallis libero, sed blandit nibh. Nam ultricies
                      tristique nibh, consequat ornare nibh. Quisque vitae odio
                      ligula.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about_image">
                  <img
                    src="images/about_1.jpg"
                    alt="https://unsplash.com/@jtylernix"
                  />
                </div>
              </div>
            </div>
            <div className="row about_row row-lg-eq-height">
              <div className="col-lg-6 order-lg-1 order-2">
                <div className="about_image">
                  <img src="images/about_1.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div className="about_content">
                  <div className="about_title">eLearn's Vision</div>
                  <div className="about_text">
                    <p>
                      Suspendisse tincidunt magna eget massa hendrerit
                      efficitur. Ut euismod pellentesque imperdiet. Cras laoreet
                      gravida lectus, at viverra lorem venenatis in. Aenean id
                      varius quam. Nullam bibendum interdum dui, ac tempor lorem
                      convallis ut. Maecenas rutrum viverra sapien sed
                      fermentum. Morbi tempor odio eget lacus tempus pulvinar.
                      Praesent vel nisl fermentum, gravida augue. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Integer id
                      convallis libero, sed blandit nibh. Nam ultricies
                      tristique nibh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div className="milestones">
          {/* Background image artis https://unsplash.com/@thepootphotographer */}
          <div
            className="parallax_background parallax-window"
            data-parallax="scroll"
            data-image-src="images/milestones.jpg"
            data-speed="0.8"
          />
          <div className="container">
            <div className="row milestones_container">
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_1.svg" alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value={1548}>
                    0
                  </div>
                  <div className="milestone_text">Online Courses</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_2.svg" alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value={7286}>
                    0
                  </div>
                  <div className="milestone_text">Students</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_3.svg" alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value={257}>
                    0
                  </div>
                  <div className="milestone_text">Teachers</div>
                </div>
              </div>
              {/* Milestone */}
              <div className="col-lg-3 milestone_col">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src="images/milestone_4.svg" alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value={39}>
                    0
                  </div>
                  <div className="milestone_text">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Teachers */}
        <div className="teachers">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="teachers_title text-center">
                  Meet the Teachers
                </div>
              </div>
            </div>
            <div className="row teachers_row">
              {/* Teacher */}
              <div className="col-lg-4 col-md-6">
                <div className="teacher">
                  <div className="teacher_image">
                    <img
                      src="images/teacher_1.jpg"
                      alt="https://unsplash.com/@nickkarvounis"
                    />
                  </div>
                  <div className="teacher_body text-center">
                    <div className="teacher_title">
                      <Link to="#">Jonathan Smith</Link>
                    </div>
                    <div className="teacher_subtitle">Marketing</div>
                    <div className="teacher_social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
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
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 col-md-6">
                <div className="teacher">
                  <div className="teacher_image">
                    <img
                      src="images/teacher_2.jpg"
                      alt="https://unsplash.com/@rawpixel"
                    />
                  </div>
                  <div className="teacher_body text-center">
                    <div className="teacher_title">
                      <Link to="#">Michelle Williams</Link>
                    </div>
                    <div className="teacher_subtitle">Art &amp; Design</div>
                    <div className="teacher_social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
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
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 col-md-6">
                <div className="teacher">
                  <div className="teacher_image">
                    <img
                      src="images/teacher_3.jpg"
                      alt="https://unsplash.com/@taylor_grote"
                    />
                  </div>
                  <div className="teacher_body text-center">
                    <div className="teacher_title">
                      <Link to="#">Jack Gallagan</Link>
                    </div>
                    <div className="teacher_subtitle">Marketing</div>
                    <div className="teacher_social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
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
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 col-md-6">
                <div className="teacher">
                  <div className="teacher_image">
                    <img
                      src="images/teacher_4.jpg"
                      alt="https://unsplash.com/@benjaminrobyn"
                    />
                  </div>
                  <div className="teacher_body text-center">
                    <div className="teacher_title">
                      <Link to="#">Christinne Smith</Link>
                    </div>
                    <div className="teacher_subtitle">Marketing</div>
                    <div className="teacher_social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
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
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 col-md-6">
                <div className="teacher">
                  <div className="teacher_image">
                    <img
                      src="images/teacher_5.jpg"
                      alt="https://unsplash.com/@christinhumephoto"
                    />
                  </div>
                  <div className="teacher_body text-center">
                    <div className="teacher_title">
                      <Link to="#">Michelle Williams</Link>
                    </div>
                    <div className="teacher_subtitle">Art &amp; Design</div>
                    <div className="teacher_social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
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
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Teacher */}
              <div className="col-lg-4 col-md-6">
                <div className="teacher">
                  <div className="teacher_image">
                    <img
                      src="images/teacher_6.jpg"
                      alt="https://unsplash.com/@rawpixel"
                    />
                  </div>
                  <div className="teacher_body text-center">
                    <div className="teacher_title">
                      <Link to="#">Jack Gallagan</Link>
                    </div>
                    <div className="teacher_subtitle">Marketing</div>
                    <div className="teacher_social">
                      <ul>
                        <li>
                          <Link to="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
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
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <div className="button teachers_button">
                  <Link to="#">
                    see all teachers
                    <div className="button_arrow">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
