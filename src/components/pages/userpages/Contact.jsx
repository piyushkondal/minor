import { Link } from "react-router-dom";
export default function Contact() {
  return (
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
              <Link to="/">Home</Link>
            </li>
            <li className="menu_mm">
              <Link to="/courses">Courses</Link>
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="menu_extra">
          <div className="menu_phone">
            <span className="menu_title">phone:</span>+01822-282531
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
            <div className="row">
              <div className="col">
                <div className="home_content text-center">
                  <div className="home_title">Contact</div>
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
            <div className="col-xl-6">
              <div className="contact_content">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="contact_about">
                      <div className="logo_container">
                        <Link to="#">
                          <div className="logo_content d-flex flex-row align-items-end justify-content-start">
                            <div className="logo_img">
                              <img src="images/logo.png" alt="" />
                            </div>
                            <div className="logo_text">learn</div>
                          </div>
                        </Link>
                      </div>
                      <div className="contact_about_text">
                        <p>
                          Suspendisse tincidunt magna eget massa hendrerit
                          efficitur. Ut euismod pellentesque imperdiet. Cras
                          laoreet gravida lectus, at viverra lorem venenatis in.
                          Aenean id varius quam. Nullam bibendum interdum dui,
                          ac tempor lorem convallis ut. Maecenas rutrum viverra
                          sapien sed fermentum. Morbi tempor odio eget lacus
                          tempus pulvinar.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact_info_container">
                      <div className="contact_info_main_title">Contact Us</div>
                      <div className="contact_info">
                        <div className="contact_info_item">
                          <div className="contact_info_title">Address:</div>
                          <div className="contact_info_line">
                            1481 Creekside Lane Avila Beach, CA 93424
                          </div>
                        </div>
                        <div className="contact_info_item">
                          <div className="contact_info_title">Phone:</div>
                          <div className="contact_info_line">
                            +53 345 7953 32453
                          </div>
                        </div>
                        <div className="contact_info_item">
                          <div className="contact_info_title">Email:</div>
                          <div className="contact_info_line">
                            yourmail@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_form_container">
                  <form action="#" id="contact_form" className="contact_form">
                    <div>
                      <div className="row">
                        <div className="col-lg-6 contact_name_col">
                          <input
                            type="text"
                            className="contact_input"
                            placeholder="Name"
                            required="required"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="email"
                            className="contact_input"
                            placeholder="E-mail"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="contact_input"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div>
                      <textarea
                        className="contact_input contact_textarea"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <button className="contact_button">
                      <span>send message</span>
                      <span className="button_arrow">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Contact Map */}
            <div className="col-xl-6 map_col">
              <div className="contact_map">
                {/* Google Map */}
                <div id="google_map" className="google_map">
                  <div className="map_container">
                    <div id="map" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
