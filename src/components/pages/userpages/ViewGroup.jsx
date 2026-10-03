
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GroupServices from "../../../services/GroupServices";


export default function viewGroup(){

  const {id}= useParams();
     const [data, setData] = useState([])
    
        useEffect(() => {
            FatchData()
        }, [])
    
        const FatchData = async () => {

          let payload={
            value:id
          }
            let data = await GroupServices.All(payload,"CategoryID")
    
            setData(data)
        }
     return(
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
        {
                  data.map((el) => {
                    return (<>
                    <div className="col-lg-4 col-md-6">
                      <div className="course">
                        <div className="course_image">
                          <img src={el.image} alt="" style={{height:"200px", width:"100%"}} />
                        </div>
                        <div className="course_body">
                          <div className="course_header d-flex flex-row align-items-center justify-content-start">
                          
                         
                          </div>
                          <div className="course_title">
                            <h3>
                               <Link to={`/description/${el.id}`}>
                              {el.GroupName}
                              </Link>
                            </h3>
                          </div>
                          <div className="course_text">
                         {el.Description}
                          </div>
                      
                        </div>
                      </div>
                    </div>
                    </>)
                    
                    
                  })
                }



              </div>

            </div>
          </div>


        </div>


      </>
  
  )
}