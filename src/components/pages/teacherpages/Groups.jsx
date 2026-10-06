import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GroupServices from "../../../services/GroupServices";
import AuthService from "../../../services/AuthService";
import TeacherServices from "../../../services/TeacherServices";

export default function Groups() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    FatchData();
  }, []);

  const FatchData = async () => {
    let uid = await AuthService.getUserId();
    let d2 = TeacherServices.single(uid);
    let id = d2.TeacherID;
    let payload = {
      value: id,
    };
    console.log(d2);
    let data = await GroupServices.All(payload, "TeacherID");

    setData(data);
  };

  return (
    <>
      <div className="super_container">
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
                    <div className="home_title">View groups</div>
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

        {/* Teachers */}
        <div className="teachers">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="teachers_title text-center"></div>
              </div>
            </div>
            <div className="row teachers_row">
              {/* Teacher */}
              {Data.map((el) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 mt-5 mb-3">
                      <div className="course">
                        <div className="course_image">
                          <img
                            src={el.image}
                            alt=""
                            style={{ height: "200px", width: "100%" }}
                          />
                        </div>
                        <div className="course_body">
                          <div className="course_header d-flex flex-row align-items-center justify-content-start"></div>
                          <div className="course_title">
                            <h3>
                              <a href="courses.html">{el.CategoryName}</a>
                            </h3>
                          </div>
                          <div className="course_text">{el.Description}</div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
