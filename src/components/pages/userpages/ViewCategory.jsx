import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryServices from "../../../services/CategoryServices";
import AuthService from "../../../services/AuthService";
import UserServices from "../../../services/UserServices";

export default function ViewCategory() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    FatchData();

    //  const fetchUsers = async () => {
    // const userId = AuthService.getUserId();
    // console.log("Current UID:", userId);

    // if (userId) return;

    // const data = await UserServices.AccessUsers(userId);
    // console.log("Fetched users Data:", data);
  });
  // fetchUsers();
  // }, [])

  const FatchData = async () => {
    const uid = AuthService.getUserId();
    const d2 = UserServices.AccessUsers(uid);
    setUsers(d2);
    const course = users.Course;
    console.log(course);

    let value = course;

    const data2 = await CategoryServices.All(value, "CategoryName");

    setData2(data2);
  };

  return (
    <>
      {/* {Array.isArray(users) && users.length >0 ? (
  users.map((e) => ( */}

      <div className="super_container">
        {/* Courses */}
        <div className="courses">
          <div className="container">
            <div className="row courses_row">
              {data2.map((el) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 ">
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
                              <Link to={`/viewgroup/${el.id}`}>
                                {el.CategoryName}
                              </Link>
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

      {/* ))
 ): (
    <p className="text-center text-muted">Please Wait</p>
  )} */}
    </>
  );
}
