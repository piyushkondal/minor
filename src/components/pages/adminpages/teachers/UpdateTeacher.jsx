import { useEffect, useState } from "react"
import TeacherServices from "../../../../services/TeacherServices"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"


const UpdateTeacher = () => {
  const [TeacherName, setTeacherName] = useState("" )
  const [TeacherID, setTeacherID] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  
  const {id}=useParams()

  useEffect(()=>{
    fatchData()
  },[])

  const fatchData=async()=>{
    let data= await TeacherServices.single(id)
    setTeacherName(data.TeacherName)
    setTeacherID(data.TeacherID)
    setEmail(data.Email)
    setPassword(data.Password)
   
  }

  const [load, setload] = useState(false)

  const nav=useNavigate()

  const HandleForm = async (e) => {
    e.preventDefault()
   

    let data = {
      TeacherName: TeacherName,
      TeacherID:TeacherID,
      Email:Email,
      Password:Password,
    }

    console.log(data);
    let result = await TeacherServices.Update(data,id)

    

    if (result == 1) {
      toast.success("TeacherUpdated")
      nav("/admin/manageteacher")
    } else {
      toast.error("Failed to add")
    }

  }
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
                  <div className="contact_about_text">
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
      
              </div>
            </div>
            <div className="contact_form_container">
              <form action="#" id="contact_form" onSubmit={HandleForm} method="post" className="contact_form">
                <div>
                  <div className="row justify-content-center" >
                    <div className="col-xl-8 my-2">
                      <input
                         name="name"
                    
                         value={TeacherName}
                         onChange={(e)=>{
                            setTeacherName(e.target.value)
                          }}

                          
                            type="text"
                      
                         placeholder="Teacher Name"
                        className="contact_input"
                        required="required"
                      />
                    </div>
                   
                    <div className="col-xl-8 my-2" >
                      <input
                      name="id"
                    
                    
                     value={TeacherID}
                    onChange={(e)=>{
                        setTeacherID(e.target.value)
                    }}
                    type="text"
                    
                    placeholder="Teacher ID"
                    className="contact_input"
                    
                      />
                    </div>
                     <div className="col-xl-8 my-2">
                      <input
                         name="Email"
                    
                         value={Email}
                         onChange={(e)=>{
                            setEmail(e.target.value)
                          }}

                         
                        type="email"
                         placeholder="Email"
                          className="contact_input"
                        
                        
                      />
                    </div>
                     <div className="col-xl-8 my-2">
                      <input
                         name="Password"
                    
                         value={Password}
                         onChange={(e)=>{
                            setPassword(e.target.value)
                          }}

                         
                        type="password"
                         placeholder="Password"
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


  )
}

export default UpdateTeacher
