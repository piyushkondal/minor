import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NoticeServices from "../../../services/NoticeServices";
import { toast } from "react-toastify";

const UpdateNotice = () => {
  const [NoticeID, setNoticeID] = useState("");
  const [GroupId, setGroupId] = useState("");

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [FileUrl, setFileUrl] = useState("");
  const [TeacherID, setTeacherID] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    let data = await NoticeServices.single(id);
    setNoticeID(data.NoticeID);
    setGroupId(data.GroupId);

    setTitle(data.Title);
    setDescription(data.Description);

    setFileUrl(data.FileUrl);

    setTeacherID(data.TeacherID);
  };

  const [load, setload] = useState(false);

  const nav = useNavigate();

  const HandleForm = async (e) => {
    e.preventDefault();

    let data = {
      NoticeID: NoticeID,
      GroupId: GroupId,

      Title: Title,
      Description: Description,

      FileUrl: FileUrl,

      TeacherID: TeacherID,
    };

    console.log(data);
    let result = await NoticeServices.Update(data, id);

    if (result == 1) {
      toast.success("NoticeUpdated");
      nav("/admin/manageNotice");
    } else {
      toast.error("Failed to add");
    }
  };
  return (
    <>
      {/* Menu */}

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
                  <div className="home_title">Update Teacher</div>
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
          <div className="row row-xl-eq-height    justify-content-center ">
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
                            name="id"
                            value={NoticeID}
                            onChange={(e) => {
                              setNoticeID(e.target.value);
                            }}
                            type="id"
                            placeholder="NoticeID"
                            className="contact_input"
                          />
                        </div>
                        <div className="col-xl-8 my-2">
                          <input
                            name="id"
                            value={GroupId}
                            onChange={(e) => {
                              GroupId(e.target.value);
                            }}
                            type="id"
                            placeholder="GroupId"
                            className="contact_input"
                          />
                        </div>

                        <div className="col-xl-8 my-2">
                          <input
                            name="Title"
                            value={Title}
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                            type="text"
                            placeholder="Title"
                            className="contact_input"
                          />
                        </div>
                        <div className="col-xl-8 my-2">
                          <input
                            value={Description}
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            type="text"
                            placeholder="Description"
                            className="contact_input"
                          />
                        </div>

                        <div className="col-xl-8 my-2">
                          <input
                            name="FileUrl"
                            value={FileUrl}
                            onChange={(e) => {
                              setFileUrl(e.target.value);
                            }}
                            type="text"
                            placeholder="FileURL"
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

export default UpdateNotice;
