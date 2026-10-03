import { useEffect, useState } from "react";
import TeacherServices from "../../../../services/TeacherServices";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import UserServices from "../../../../services/UserServices";

const AddTeacher = () => {
  const [TeacherName, setTeacherName] = useState("");
  const [TeacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const [Data, setData] = useState([]);
  const [load, setload] = useState(false);

  useEffect(() => {
    FatchData();
  }, []);

  const FatchData = async () => {
    let data = await TeacherServices.All();
    setData(data);
  };

  const HandleForm = async (e) => {
    e.preventDefault();

    let data = {
      TeacherName: TeacherName,

      TeacherId: TeacherId,
      email: email,
      password: password,
    };
    console.log(data);
    let result = await TeacherServices.Add(data);
    // let res = await UserServices.Register2(data)

    if (result == 1) {
      toast.success("Teacher Added");
    } else {
      toast.error("Failed to add");
    }
  };
  return (
    <>
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
                  <div className="home_title">Add Teacher</div>
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
          <div className="row row-xl-eq-height    justify-content-center">
            {/* Contact Content */}
            <div className="col-xl-6">
              <div className="contact_content">
                <div className="logo_container">
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
                            name="name"
                            value={TeacherName}
                            onChange={(e) => {
                              setTeacherName(e.target.value);
                            }}
                            type="text"
                            placeholder="Name"
                            className="contact_input"
                            required="required"
                          />
                        </div>

                        <div className="col-xl-8 my-2">
                          <input
                            name="id"
                            value={TeacherId}
                            onChange={(e) => {
                              setTeacherId(e.target.value);
                            }}
                            type="text"
                            placeholder="Teacher Id"
                            className="contact_input"
                          />
                        </div>
                        <div className="col-xl-8 my-2">
                          <input
                            name="Email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="Email"
                            className="contact_input"
                          />
                        </div>
                        <div className="col-xl-8 my-2">
                          <input
                            name="Password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            type="password"
                            placeholder="Password"
                            className="contact_input"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        style={{
                          backgroundColor: "#ff8a00",
                        }}
                        type="submit"
                        className="contact_button btn "
                      >
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
export default AddTeacher;
