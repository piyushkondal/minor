import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";

import GroupServices from "../../../../services/GroupServices";
import CloudnaryServices from "../../../../services/CloudnaryServices";
const UpdateGroup = () => {
  const [name, setname] = useState(" ");
  const [description, setdescription] = useState(" ");
  const [image, setimage] = useState();
  const [id1, setid1] = useState("");
  const [TeacherID, setTeacherID] = useState();
  const [ImageURL, setImageURL] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    let data = await GroupServices.single(id);
    console.log(data);
    setname(data.GroupName);
    setdescription(data.Description);
    setImageURL(data.image);
    setid1(data.CategoryID);
    setTeacherID(data.TeacherID);
  };

  const [load, setload] = useState(false);

  const nav = useNavigate();

  const HandleForm = async (e) => {
    e.preventDefault();
    let url = ImageURL;

    if (!!image) {
      url = await CloudnaryServices.UploadImage(image);
    }

    let data = {
      name: name,
      description: description,
      image: url,
      TeacherID: TeacherID,
      CategoryID: id1,
    };

    console.log(data);
    let result = await GroupServices.Update(data, id);

    if (result == 1) {
      toast.success("Group Updated");
      nav("/admin/manageGroup");
    } else {
      toast.error("Failed to add");
    }
  };
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
            <div className="row  ">
              <div className="col">
                <div className="home_content text-center">
                  <div className="home_title">Add Category</div>
                  <div className="breadcrumbs">
                    {/* <ul>
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>Contact</li>
                </ul> */}
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
                <div className="row ">
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
                      <div className="contact_about_text"></div>
                    </div>
                  </div>
                  <div className="col-xl-6"></div>
                </div>
                <div className="contact_form_container">
                  <form
                    action="#"
                    id="contact_form"
                    onSubmit={HandleForm}
                    method="post"
                    className="contact_form"
                  >
                    <div>
                      <div className="row justify-content-center">
                        <div className="col-xl-8 my-2">
                          <input
                            name="email"
                            value={name}
                            onChange={(e) => {
                              setname(e.target.value);
                            }}
                            id="email"
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter category name'"
                            placeholder="Email"
                            className="contact_input"
                            required="required"
                          />
                        </div>
                        <div className="col-xl-8 my-2">
                          <input
                            name="image"
                            onChange={(e) => {
                              setimage(e.target.files[0]);
                            }}
                            id="image"
                            type="file"
                            placeholder="Email"
                            className="contact_input"
                          />
                        </div>
                        <div className="col-xl-8 my-2">
                          <input
                            name="password"
                            id="password"
                            value={description}
                            onChange={(e) => {
                              setdescription(e.target.value);
                            }}
                            type="text"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Enter description'"
                            placeholder="Password"
                            required="required"
                            className="contact_input"
                          />
                        </div>
                        <div className="col-xl-8 my-2">
                          <input
                            name="TeacherID"
                            id="TeacherID"
                            value={TeacherID}
                            onChange={(e) => {
                              setTeacherID(e.target.value);
                            }}
                            type="text"
                            placeholder="TeacherID"
                            className="contact_input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="contact_button">
                        send
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
  );
};

export default UpdateGroup;
