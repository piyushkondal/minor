import { useEffect, useState } from "react"
import SubmissionServices from "../../../services/SubmissionServices"
import { toast } from "react-toastify"

const AddSubmission = () => {
  const [SubmissionID, setSubmissionID] = useState("")
  const [AssingmentID, setAssingmentID] = useState("")
  const [StudentId, setStudentId]= useState("")
  const [SubjectName, setSubjectName]= useState("")
  const [FileUrl, setFileUrl] = useState("")
  const [SubmittedAt, setSubmittedAt] = useState("")
  const [Data, setData] = useState([])

  const [load, setload] = useState(false)

   useEffect(() => {
    FatchData()
  }, [])

  const FatchData = async () => {
    let data = await SubmissionServices.All()
    setData(data)
  }

  const HandleForm = async (e) => {
    e.preventDefault()

    let data = {
   SubmissionID:SubmissionID,
    AssingmentID:AssingmentID,
   StudentId:StudentId,
   SubjectName:SubjectName,
    FileUrl:FileUrl,
    SubmittedAt:SubmittedAt,
    }

    console.log(data);
    let result = await SubmissionServices.Add(data)

    

    if (result == 1) {
      toast.success("Submission Added")
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
              <div className="home_title">Add Submission</div>
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
              <form action="#" id="contact_form" onSubmit={HandleForm} method="post" className="contact_form">
                <div>
                  <div className="row justify-content-center" >
                    <div className="col-xl-8 my-2">
                      <input
                         name="material"
                    
                         value={SubmissionID}
                         onChange={(e)=>{
                            setSubmissionID(e.target.value)
                          }}

            
                        type="text"
                         placeholder="Submission Id"
                        className="contact_input"
                        required="required"
                      />
                    </div>

                     <div className="col-xl-8 my-2">
                      <input
                         name="SubjectID"
                    
                         value={AssingmentID}
                         onChange={(e)=>{
                            setAssingmentID(e.target.value)
                          }}

            
                        type="text"
                         placeholder="Assingment Id"
                        className="contact_input"
                        required="required"
                      />
                    </div>
                    <div className="col-xl-8 my-2">
                      <input
                         name="email"
                    
                         value={StudentId}
                         onChange={(e)=>{
                            setStudentId(e.target.value)
                          }}

            
                        type="text"
                         placeholder="Student Id"
                        className="contact_input"
                        required="required"
                      />
                    </div>
                     <div className="col-xl-8 my-2">
                      <input
                        value={SubjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                        type="text"
                         placeholder="Subject Name"
                        className="contact_input"
                        required="required"

                        />
                    </div>
                    <div className="col-xl-8 my-2">
                      <input
                         name="Title"
                    
                         value={FileUrl}
                         onChange={(e)=>{
                            setFileUrl(e.target.value)
                          }}

                        
                        type="text"
                        
                         placeholder="Title"
                        className="contact_input"
                        
                      />
                    </div>
                     <div className="col-xl-8 my-2">
                      <input
                         name="FileUrl"
                    
                         value={SubmittedAt}
                         onChange={(e)=>{
                            setSubmittedAt(e.target.value)
                          }}

                         
                        type="text"
                         placeholder="File URL"
                          className="contact_input"
                        
                        
                      />
                    </div>
                  
                   
                  </div>
                </div>
                
                <div className="d-flex justify-content-center">
                 <button style={{
                            backgroundColor:"#ff8a00"
                          }} type="submit" className="contact_button btn ">
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

export default AddSubmission