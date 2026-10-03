import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import TeacherServices from "../../../../services/TeacherServices"
import { Link } from "react-router-dom"

const ManageTeacher = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        FatchData()
        
    }, )

    const FatchData = async () => {
        let data = await TeacherServices.All()

        setData(data)
    }

    const DeleteTeacher= async (id)=>{

  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {
  if (result.isConfirmed){
 let res= await TeacherServices.delete(id)

    if(res==1){
      toast.success("Teacher Deleted");
      FatchData()
    }else{
      toast.error("Not Deleted")
    }
   Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
}
});
      


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
          <Link to="/Home">Home</Link>
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
        <div className="row justify-content-center">
          <div className="col">
            <div className="home_content text-center">
              <div className="home_title">Manage Teacher</div>
              <div className="breadcrumbs">
                <ul>
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>contact</li>
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
        <div className="col-xl-12">
          <div className="contact_content">
            <div className="row justify-content-center">
              <div className="col-xl-8">
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
                   
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-6">
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
              </div> */}
            </div>
             <Link  className="btn btn-primary" style={{
                                        backgroundColor:"#ff8a00"
                                      }}to={"/admin/addteacher/"} >+ Add Teacher</Link>

            <div className="row row-xl-8" className="row justify-content-center">
              <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sno</th>
                                        <th scope="col">Teacher ID</th>
                                        <th scope="col">Teacher Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                        <th scope="col">create At</th>
                                        <th scope="col">status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Data.map((el,i) => {
                                            return <>
                                                <tr>
                                                    <th scope="row">{i+1}</th>
                                                    <td>{el.TeacherID}</td>
                                                    <td>{el.TeacherName}</td>
                                                    <td>{el.Email}</td>
                                                    
                                                    
                                                    
                                                    <td><Link class="btn btn-primary" to={"/admin/UpdateTeacher/"+el.id}>Update</Link> </td>
                                                    <td><button 
                                                    onClick={() => {
                                                      DeleteTeacher(el.id)

                                                    }} className='btn btn-danger' >Delete </button></td>
                                                    <td></td>
                                                  <td>
                                                   {el.createAt?.toDate().toLocaleString()}
                                                   </td>
                                                    <td>{el.status?"Active":"Block"}</td>
                                                </tr>
                                            </>
                                        })
                                    }


                                </tbody>
                            </table>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</>

    )
}

export default ManageTeacher
