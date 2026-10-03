import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import MaterialServices from "../../../services/MaterialServices";
import { toast } from "react-toastify";

const UpdateMaterial = () => {
  const [MaterialID, setMaterialID] = useState("");
  const [GroupId, setGroupId] = useState("");
  const [SubjectName, setSubjectName] = useState("");
  const [Title, setTitle] = useState("");
  const [FileUrl, setFileUrl] = useState("");
  const [UploadedBy, setUploadedBy] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    let data = await MaterialServices.single(id);
    setMaterialID(data.MaterialID);
    setGroupId(data.GroupId);
    setSubjectName(data.SubjectName);
    setTitle(data.Title);

    setFileUrl(data.FileUrl);

    setUploadedBy(data.UploadedBy);
  };

  const [load, setload] = useState(false);

  const nav = useNavigate();

  const HandleForm = async (e) => {
    e.preventDefault();

    let data = {
      MaterialID: MaterialID,
      GroupId: GroupId,
      SubjectName: SubjectName,
      Title: Title,

      FileUrl: FileUrl,

      UploadedBy: UploadedBy,
    };

    console.log(data);
    let result = await MaterialServices.Update(data, id);

    if (result == 1) {
      toast.success("AssignmentUpdated");
      nav("/admin/manageAssignment");
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
                            value={MaterialID}
                            onChange={(e) => {
                              setMaterialID(e.target.value);
                            }}
                            type="id"
                            placeholder="MaterialID"
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
                            value={SubjectName}
                            onChange={(e) => {
                              setSubjectName(e.target.value);
                            }}
                            type="text"
                            placeholder="Subject Name"
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
                            name="UploadedBy"
                            value={UploadedBy}
                            onChange={(e) => {
                              setUploadedBy(e.target.value);
                            }}
                            type="text"
                            placeholder="Uploaded By"
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

export default UpdateMaterial;
