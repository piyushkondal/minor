import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GroupServices from '../../../services/GroupServices'
import CategoryServices from '../../../services/CategoryServices'

export default function Home(){
   const [data2, setData2] = useState([])
  
      useEffect(() => {
    FatchData()


     }
  )
    const FatchData = async () => {
       let data2 = await CategoryServices.All()
   
        setData2(data2)
    
     }
    

  
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
          <a href="index.html">Home</a>
        </li>
        <li className="menu_mm">
          <a href="courses.html">Courses</a>
        </li>
        <li className="menu_mm">
          <a href="instructors.html">Instructors</a>
        </li>
        <li className="menu_mm">
          <a href="#">Events</a>
        </li>
        <li className="menu_mm">
          <a href="blog.html">Blog</a>
        </li>
        <li className="menu_mm">
          <a href="contact.html">Contact</a>
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
            <a href="#">
              <i className="fa fa-pinterest" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">    
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* Home */}
  <div className="home">
    <div className="home_slider_container">
      {/* Home Slider */}
      <div className="owl-carousel owl-theme home_slider">
        {/* Slider Item */}
        <div className="owl-item">
          {/* Background image artist https://unsplash.com/@benwhitephotography */}
          <div
            className="home_slider_background"
            style={{ backgroundImage: "url(/images/index.jpg)" }}
          />
          <div className="home_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_content text-center">
                    <div className="home_logo">
                      <img src="images/home_logo.png" alt="" />
                    </div>
                    <div className="home_text">
                      <div className="home_title">Learn With Us</div>
                      <div className="home_subtitle">
                        Maecenas rutrum viverra sapien sed fermentum. Morbi
                        tempor odio eget lacus tempus pulvinar. Praesent vel
                        nisl fermentum, gravida augue ut, fermentum ipsum.
                      </div>
                    </div>
                    <div className="home_buttons">
                      <div className="button home_button">
                        <a href="#">
                          learn more
                          <div className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="button home_button">
                        <a href="#">
                          see all courses
                          <div className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Item */}
        <div className="owl-item">
          {/* Background image artist https://unsplash.com/@benwhitephotography */}
          <div
            className="home_slider_background"
            style={{ backgroundImage: "url(images/index.jpg)" }}
          />
          <div className="home_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_content text-center">
                    <div className="home_logo">
                      <img src="images/home_logo.png" alt="" />
                    </div>
                    <div className="home_text">
                      <div className="home_title">Complete Online Courses</div>
                      <div className="home_subtitle">
                        Maecenas rutrum viverra sapien sed fermentum. Morbi
                        tempor odio eget lacus tempus pulvinar. Praesent vel
                        nisl fermentum, gravida augue ut, fermentum ipsum.
                      </div>
                    </div>
                    <div className="home_buttons">
                      <div className="button home_button">
                        <a href="#">
                          learn more
                          <div className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="button home_button">
                        <a href="#">
                          see all courses
                          <div className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slider Item */}
        <div className="owl-item">
          {/* Background image artist https://unsplash.com/@benwhitephotography */}
          <div
            className="home_slider_background"
            style={{ backgroundImage: "url(images/index.jpg)" }}
          />
          <div className="home_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_content text-center">
                    <div className="home_logo">
                      <img src="images/home_logo.png" alt="" />
                    </div>
                    <div className="home_text">
                      <div className="home_title">Complete Online Courses</div>
                      <div className="home_subtitle">
                        Maecenas rutrum viverra sapien sed fermentum. Morbi
                        tempor odio eget lacus tempus pulvinar. Praesent vel
                        nisl fermentum, gravida augue ut, fermentum ipsum.
                      </div>
                    </div>
                    <div className="home_buttons">
                      <div className="button home_button">
                        <a href="#">
                          learn more
                          <div className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="button home_button">
                        <a href="#">
                          see all courses
                          <div className="button_arrow">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Featured Course */}
  <div className="featured">
    <div className="container">
      <div className="row">
        <div className="col">
          {/* Home Slider Nav */}
          <div className="home_slider_nav_container d-flex flex-row align-items-start justify-content-between">
            <div className="home_slider_nav home_slider_prev trans_200">
              <i className="fa fa-angle-left" aria-hidden="true" />
            </div>
            <div className="home_slider_nav home_slider_next trans_200">
              <i className="fa fa-angle-right" aria-hidden="true" />
            </div>
          </div>
          <div className="featured_container">
            <div className="row">
              <div className="col-lg-6 featured_col">
                <div className="featured_content">
                  <div className="featured_header d-flex flex-row align-items-center justify-content-start">
                    <div className="featured_tag">
                      <a href="#">Featured</a>
                    </div>
                    <div className="featured_price ml-auto">
                      Price: <span>$35</span>
                    </div>
                  </div>
                  <div className="featured_title">
                    <h3>
                      <a href="courses.html">I.K.G Punjab Technical University</a>
                    </h3>
                  </div>
                  <div className="featured_text">
                    Maecenas rutrum viverra sapien sed fermentum. Morbi tempor
                    odio eget lacus tempus pulvinar. Donec vehicula efficitur
                    nibh, in pretium nulla interdum non.
                  </div>
                  <div className="featured_footer d-flex align-items-center justify-content-start">
                    <div className="featured_author_image">
                      <img src="images/featured_author.jpg" alt="" />
                    </div>
                    <div className="featured_author_name">
                      By <a href="#">James S. Morrison</a>
                    </div>
                    <div className="featured_sales ml-auto">
                      <span>352</span> Sales
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 featured_col">
                {/* Background image artist https://unsplash.com/@jtylernix */}
                <div
                  className="featured_background"
                  style={{ backgroundImage: "url(images/featured.png)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Courses */}
  <div className="courses">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="section_title text-center">
            <h2>Choose your course</h2>
            <div className="super_container">
          {/* Courses */}
          <div className="courses">
            <div className="container">
           
            
             
              <div className="row courses_row">

                {
                  data2.map((el) => {
                    return<>
                    
                    <div className="col-lg-4 col-md-6 ">
                      <div className="course">
                        <div className="course_image">
                          <img src={el.image} alt="" style={{height:"200px", width:"100%"}} />
                        </div>
                        <div className="course_body">
                          <div className="course_header d-flex flex-row align-items-center justify-content-start">
                          
                         
                          </div>
                          <div className="course_title">
                            <h3>
                            
                              {el.CategoryName}
                            
                            </h3>
                          </div>
                          <div className="course_text">
                         {el.Description}
                          </div>
                      
                        </div>
                      </div>
                    </div>
                    
                    </>
                    
                  } )
                }



              </div>

            </div>
          </div>
          </div>

          </div>
         
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          {/* Courses Slider */}
          <div className="courses_slider_container">
            <div className="owl-carousel owl-theme courses_slider">
              {/* Slider Item */}
              <div className="owl-item">
                <div className="course">
                  <div className="course_image">
                    <img src="images/course_1.jpg" alt="" />
                  </div>
                  <div className="course_body">
                    <div className="course_header d-flex flex-row align-items-center justify-content-start">
                      <div className="course_tag">
                        <a href="#">Featured</a>
                      </div>
                      <div className="course_price ml-auto">
                        Price: <span>$35</span>
                      </div>
                    </div>
                    <div className="course_title">
                      <h3>
                        <a href="courses.html">Online Literature Course</a>
                      </h3>
                    </div>
                    <div className="course_text">
                      Maecenas rutrum viverra sapien sed ferm entum. Morbi
                      tempor odio eget lacus tempus pulvinar.
                    </div>
                    <div className="course_footer d-flex align-items-center justify-content-start">
                      <div className="course_author_image">
                        <img
                          src="images/featured_author.jpg"
                          alt="https://unsplash.com/@anthonytran"
                        />
                      </div>
                      <div className="course_author_name">
                        By <a href="#">James S. Morrison</a>
                      </div>
                      <div className="course_sales ml-auto">
                        <span>352</span> Sales
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item">
                <div className="course">
                  <div className="course_image">
                    <img src="images/course_2.jpg" alt="" />
                  </div>
                  <div className="course_body">
                    <div className="course_header d-flex flex-row align-items-center justify-content-start">
                      <div className="course_tag">
                        <a href="#">New</a>
                      </div>
                      <div className="course_price ml-auto">
                        Price: <span>$35</span>
                      </div>
                    </div>
                    <div className="course_title">
                      <h3>
                        <a href="courses.html">Social Media Course</a>
                      </h3>
                    </div>
                    <div className="course_text">
                      Maecenas rutrum viverra sapien sed ferm entum. Morbi
                      tempor odio eget lacus tempus pulvinar.
                    </div>
                    <div className="course_footer d-flex align-items-center justify-content-start">
                      <div className="course_author_image">
                        <img src="images/course_author_2.jpg" alt="" />
                      </div>
                      <div className="course_author_name">
                        By <a href="#">Mark Smith</a>
                      </div>
                      <div className="course_sales ml-auto">
                        <span>352</span> Sales
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider Item */}
              <div className="owl-item">
                <div className="course">
                  <div className="course_image">
                    <img
                      src="images/course_3.jpg"
                      alt="https://unsplash.com/@annademy"
                    />
                  </div>
                  <div className="course_body">
                    <div className="course_header d-flex flex-row align-items-center justify-content-start">
                      <div className="course_tag">
                        <a href="#">Featured</a>
                      </div>
                      <div className="course_price ml-auto">
                        Price: <span>$35</span>
                      </div>
                    </div>
                    <div className="course_title">
                      <h3>
                        <a href="courses.html">Marketing Course</a>
                      </h3>
                    </div>
                    <div className="course_text">
                      Maecenas rutrum viverra sapien sed ferm entum. Morbi
                      tempor odio eget lacus tempus pulvinar.
                    </div>
                    <div className="course_footer d-flex align-items-center justify-content-start">
                      <div className="course_author_image">
                        <img src="images/course_author_3.jpg" alt="" />
                      </div>
                      <div className="course_author_name">
                        By <a href="#">Julia Williams</a>
                      </div>
                      <div className="course_sales ml-auto">
                        <span>352</span> Sales
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Courses Slider Nav */}
            <div className="courses_slider_nav courses_slider_prev trans_200">
              <i className="fa fa-angle-left" aria-hidden="true" />
            </div>
            <div className="courses_slider_nav courses_slider_next trans_200">
              <i className="fa fa-angle-right" aria-hidden="true" />
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
            <div className="milestone_counter" data-end-value={4}>
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
        {/* <div className="col-lg-3 milestone_col">
          <div className="milestone text-center">
            <div className="milestone_icon">
              <img src="images/milestone_4.svg" alt="" />
            </div>
            <div className="milestone_counter" data-end-value={39}>
              0
            </div>
            <div className="milestone_text">Countries</div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  {/* Sections */}
  <div className="grouped_sections">
    <div className="container">
      <div className="row">
        {/* Why Choose Us */}
        {/* <div className="col-lg-4 grouped_col">
          <div className="grouped_title">Why Choose Us?</div>
          <div className="accordions">
            <div className="accordion_container">
              <div className="accordion d-flex flex-row align-items-center active">
                <div>Mauris vehicula nisi congue?</div>
              </div>
              <div className="accordion_panel">
                <div>
                  <p>
                    Suspendisse tincidunt magna eget massa hendrerit efficitur.
                    Ut euismod pellentesque imperdiet. Cras laoreet gravida
                    lectus, at viverra lorem venenatis in. Aenean id varius
                    quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion_container">
              <div className="accordion d-flex flex-row align-items-center">
                <div>Vehicula nisi congue, blandit?</div>
              </div>
              <div className="accordion_panel">
                <div>
                  <p>
                    Suspendisse tincidunt magna eget massa hendrerit efficitur.
                    Ut euismod pellentesque imperdiet. Cras laoreet gravida
                    lectus, at viverra lorem venenatis in. Aenean id varius
                    quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion_container">
              <div className="accordion d-flex flex-row align-items-center">
                <div>Mauris vehicula nisi congue?</div>
              </div>
              <div className="accordion_panel">
                <div>
                  <p>
                    Suspendisse tincidunt magna eget massa hendrerit efficitur.
                    Ut euismod pellentesque imperdiet. Cras laoreet gravida
                    lectus, at viverra lorem venenatis in. Aenean id varius
                    quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion_container">
              <div className="accordion d-flex flex-row align-items-center">
                <div>Nisi congue, blandit purus sed?</div>
              </div>
              <div className="accordion_panel">
                <div>
                  <p>
                    Suspendisse tincidunt magna eget massa hendrerit efficitur.
                    Ut euismod pellentesque imperdiet. Cras laoreet gravida
                    lectus, at viverra lorem venenatis in. Aenean id varius
                    quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Events */}
        <div className="col-lg-4 grouped_col">
          <div className="grouped_title">Upcoming Events</div>
          <div className="events">
            {/* Event */}
            <div className="event d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="event_date d-flex flex-column align-items-center justify-content-center">
                  <div className="event_day">20</div>
                  <div className="event_month">April</div>
                </div>
              </div>
              <div className="event_body">
                <div className="event_title">
                  <a href="#">New Marketing Course Release</a>
                </div>
                <div className="event_subtitle">Location: Online Platform</div>
              </div>
            </div>
            {/* Event */}
            <div className="event d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="event_date d-flex flex-column align-items-center justify-content-center">
                  <div className="event_day">23</div>
                  <div className="event_month">April</div>
                </div>
              </div>
              <div className="event_body">
                <div className="event_title">
                  <a href="#">Students Art Workshop</a>
                </div>
                <div className="event_subtitle">Location: Online Platform</div>
              </div>
            </div>
            {/* Event */}
            <div className="event d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="event_date d-flex flex-column align-items-center justify-content-center">
                  <div className="event_day">25</div>
                  <div className="event_month">April</div>
                </div>
              </div>
              <div className="event_body">
                <div className="event_title">
                  <a href="#">Launch Party for a new Platform</a>
                </div>
                <div className="event_subtitle">Location: Online Platform</div>
              </div>
            </div>
            {/* Event */}
            <div className="event d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="event_date d-flex flex-column align-items-center justify-content-center">
                  <div className="event_day">27</div>
                  <div className="event_month">April</div>
                </div>
              </div>
              <div className="event_body">
                <div className="event_title">
                  <a href="#">New Marketing Course</a>
                </div>
                <div className="event_subtitle">Location: Online Platform</div>
              </div>
            </div>
            {/* Event */}
            <div className="event d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="event_date d-flex flex-column align-items-center justify-content-center">
                  <div className="event_day">29</div>
                  <div className="event_month">April</div>
                </div>
              </div>
              <div className="event_body">
                <div className="event_title">
                  <a href="#">New Marketing Course</a>
                </div>
                <div className="event_subtitle">Location: Online Platform</div>
              </div>
            </div>
          </div>
        </div>
        {/* News */}
        <div className="col-lg-4 grouped_col">
          <div className="grouped_title">Latest News</div>
          <div className="news">
            {/* News Post */}
            <div className="news_post d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="news_post_image">
                  <img
                    src="images/news_1.jpg"
                    alt="https://unsplash.com/@beccatapert"
                  />
                </div>
              </div>
              <div className="news_post_body">
                <div className="news_post_date">April 02, 2018</div>
                <div className="news_post_title">
                  <a href="news.html">Why Choose online education?</a>
                </div>
                <div className="news_post_author">
                  By <a href="#">William Smith</a>
                </div>
              </div>
            </div>
            {/* News Post */}
            <div className="news_post d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="news_post_image">
                  <img
                    src="images/news_2.jpg"
                    alt="https://unsplash.com/@nbb_photos"
                  />
                </div>
              </div>
              <div className="news_post_body">
                <div className="news_post_date">April 02, 2018</div>
                <div className="news_post_title">
                  <a href="news.html">Books, Kindle or tablet?</a>
                </div>
                <div className="news_post_author">
                  By <a href="#">William Smith</a>
                </div>
              </div>
            </div>
            {/* News Post */}
            <div className="news_post d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="news_post_image">
                  <img
                    src="images/news_3.jpg"
                    alt="https://unsplash.com/@rawpixel"
                  />
                </div>
              </div>
              <div className="news_post_body">
                <div className="news_post_date">April 02, 2018</div>
                <div className="news_post_title">
                  <a href="news.html">Why Choose online education?</a>
                </div>
                <div className="news_post_author">
                  By <a href="#">William Smith</a>
                </div>
              </div>
            </div>
            {/* News Post */}
            <div className="news_post d-flex flex-row align-items-start justify-content-start">
              <div>
                <div className="news_post_image">
                  <img
                    src="images/news_4.jpg"
                    alt="https://unsplash.com/@jtylernix"
                  />
                </div>
              </div>
              <div className="news_post_body">
                <div className="news_post_date">April 02, 2018</div>
                <div className="news_post_title">
                  <a href="news.html">Books, Kindle or tablet?</a>
                </div>
                <div className="news_post_author">
                  By <a href="#">William Smith</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  {/* Join */}
  <div className="join">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="section_title text-center">
            <h2>Join Our Platform Today</h2>
          </div>
          <div className="section_subtitle">
            Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
            euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
            viverra lorem venenatis in. Aenean id varius quam. Nullam bibendum
            interdum dui, ac tempor lorem convallis ut
          </div>
        </div>
      </div>
    </div>
    <div className="button join_button">
      <Link to="/register">
        register now
        <div className="button_arrow">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </div>
      </Link>
    </div>
  </div>

        </>
    )

}