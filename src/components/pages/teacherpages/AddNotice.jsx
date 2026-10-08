import { useEffect, useState } from "react";
import NoticeServices from "../../../services/NoticeServices";
import { toast } from "react-toastify";
import GroupServices from "../../../services/GroupServices";
import { useNavigate } from "react-router-dom";

const AddNotice = () => {
  const [NoticeID, setNoticeID] = useState("");
  const [GroupId, setGroupId] = useState("");

  const [Description, setDescription] = useState("");
  const [Title, setTitle] = useState("");
  const [FileUrl, setFileUrl] = useState("");
  const [TeacherID, setTeacherID] = useState("");
  const [Data, setData] = useState([]);

  const [load, setload] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    FatchData();
  }, []);

  const FatchData = async () => {
    let data = await GroupServices.All();
    setData(data);
  };

  const HandleForm = async (e) => {
    e.preventDefault();

    let data = {
      NoticeID: NoticeID,
      GroupId: GroupId,
      Description: Description,
      Title: Title,
      FileUrl: FileUrl,
      TeacherID: TeacherID,
    };

    console.log(data);
    try {
      let result = await NoticeServices.Add(data);

      if (result == 1) {
        toast.success("Notice Added");
        nav("/teacher/managenotice/");
      } else {
        toast.error("Failed to add");
      }
    } catch (err) {
      toast.error(err);
    } finally {
      setload(false);
    }
  };
  return (
    <>
      {load ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999,
          }}
        >
          <HashLoader size={100} color="#f49522" />
        </div>
      ) : (
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
                      <div className="home_title">Add Notice</div>
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
                                name="material"
                                value={NoticeID}
                                onChange={(e) => {
                                  setNoticeID(e.target.value);
                                }}
                                type="text"
                                placeholder="Notice Id"
                                className="contact_input"
                                required="required"
                              />
                            </div>

                            <div className="col-xl-8 my-2">
                              <select
                                value={GroupId}
                                onChange={(e) => setGroupId(e.target.value)}
                                className="contact_input"
                                name=""
                                id=""
                              >
                                <option value="">Group</option>
                                {Data.map((el) => (
                                  <option value={el.id}>{el.GroupName}</option>
                                ))}
                              </select>
                            </div>

                            <div className="col-xl-8 my-2">
                              <input
                                name="email"
                                value={Title}
                                onChange={(e) => {
                                  setTitle(e.target.value);
                                }}
                                type="text"
                                placeholder="Title"
                                className="contact_input"
                                required="required"
                              />
                            </div>
                            <div className="col-xl-8 my-2">
                              <input
                                value={Description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder="Description"
                                className="contact_input"
                                required="required"
                              />
                            </div>
                            <div className="col-xl-8 my-2">
                              <input
                                name="Title"
                                value={FileUrl}
                                onChange={(e) => {
                                  setFileUrl(e.target.value);
                                }}
                                type="text"
                                placeholder="link"
                                className="contact_input"
                              />
                            </div>
                            <div className="col-xl-8 my-2">
                              <input
                                name="TeacherID"
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
      )}
    </>
  );
};

export default AddNotice;
