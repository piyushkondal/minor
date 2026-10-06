import { useEffect, useState } from "react";
import CloudnaryServices from "../../../../services/CloudnaryServices";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import GroupServices from "../../../../services/GroupServices";
import CategoryServices from "../../../../Services/CategoryServices";

const AddGroup = () => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState();
  const [id, setid] = useState("");
  const [TeacherID, setTeacherID] = useState("");
  const [Data, setData] = useState([]);

  const [load, setload] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    FatchData();
  }, []);

  const FatchData = async () => {
    let data = await CategoryServices.All();
    setData(data);
  };

  const HandleForm = async (e) => {
    e.preventDefault();

    const url = await CloudnaryServices.UploadImage(image);

    let data = {
      name: name,
      id: id,
      TeacherID: TeacherID,
      description: description,
      image: url,
    };

    console.log(data);
    try {
      let result = await GroupServices.Add(data);

      if (result == 1) {
        toast.success("Group Added");
        nav("/admin/manageGroup");
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
                      <div className="home_title">Add Group</div>
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
                                name="email"
                                value={name}
                                onChange={(e) => {
                                  setname(e.target.value);
                                }}
                                id="email"
                                type="text"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Enter category name'"
                                placeholder="Name"
                                className="contact_input"
                                required="required"
                              />
                            </div>
                            <div className="col-xl-8 my-2">
                              <select
                                value={id}
                                onChange={(e) => setid(e.target.value)}
                                className="contact_input"
                                name=""
                                id=""
                              >
                                <option value="">Category</option>
                                {Data.map((el) => (
                                  <option value={el.id}>
                                    {el.CategoryName}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-xl-8 my-2">
                              <input
                                name="email"
                                onChange={(e) => {
                                  setimage(e.target.files[0]);
                                }}
                                id="email"
                                type="file"
                                onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Enter category name'"
                                placeholder="Email"
                                className="contact_input"
                              />
                            </div>
                            <div className="col-xl-8 my-2">
                              <input
                                name="email"
                                value={description}
                                onChange={(e) => {
                                  setdescription(e.target.value);
                                }}
                                type="text"
                                placeholder="Description"
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

export default AddGroup;
