import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import CategoryServices from "../../../services/CategoryServices";
import AuthService from "../../../services/AuthService";
import UserServices from "../../../services/UserServices";

export default function ViewCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const FetchStudentCategory = async () => {
      try {
        setLoading(true);
        setError("");

        // Get the currently logged-in student's UID
        const uid = AuthService.getUserId();

        if (!uid) {
          return;
        }

        // Fetch the logged-in student's record
        const userData = await UserServices.AccessUsers(uid);

        // Handle either an object or an array response
        const student = Array.isArray(userData) ? userData[0] : userData;

        if (!student) {
          throw new Error("Student record not found.");
        }

        // Get the category/course assigned to this student
        const studentCourse = student.Course;

        if (!studentCourse) {
          if (!cancelled) setCategories([]);
          return;
        }

        // Fetch all categories
        const allCategories = await CategoryServices.All();

        // Match the student's assigned course/category
        const matchedCategories = allCategories.filter((category) => {
          return (
            category.id === studentCourse ||
            category.CategoryName === studentCourse
          );
        });

        if (!cancelled) {
          setCategories(matchedCategories);
        }
      } catch (err) {
        console.error("Error fetching student category:", err);

        if (!cancelled) {
          setError("Unable to load your category. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    FetchStudentCategory();

    return () => {
      cancelled = true;
    };
  }, []);

  // Do not display categories to logged-out users
  if (!AuthService.getUserId()) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <div className="container my-5">Loading your category...</div>;
  }

  if (error) {
    return <div className="container my-5 text-danger">{error}</div>;
  }

  return (
    <div className="super_container">
      <div className="courses">
        <div className="container">
          <h2 className="mb-4">My Category</h2>

          <div className="row courses_row">
            {categories.length > 0 ? (
              categories.map((el) => (
                <div className="col-lg-4 col-md-6" key={el.id}>
                  <div className="course">
                    <div className="course_image">
                      <img
                        src={el.image}
                        alt={el.CategoryName || "Category"}
                        style={{
                          height: "200px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="course_body">
                      <div className="course_title">
                        <h3>
                          <Link to={`/viewGroup/${el.id}`}>
                            {el.CategoryName}
                          </Link>
                        </h3>
                      </div>

                      <div className="course_text">{el.Description}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>No category has been assigned to your account.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
