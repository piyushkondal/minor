import { useEffect, useState } from "react";
import StudentServices from "../../../../services/StudentServices";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ManageStudent = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  // Fetch students from Firebase
  const FatchData = async () => {
    try {
      const data = await StudentServices.All();
      setData(data);
    } catch (error) {
      console.error("Fetch students error:", error);
      toast.error("Unable to fetch students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FatchData();
  }, []);

  // Toggle Active / Block
  const ToggleStatus = async (student) => {
    if (updatingId !== null) return;

    const id = student.id;
    const oldStatus = student.status === "Active";
    const newStatus = oldStatus ? "Block" : "Active";

    // Prevent repeated clicks and show the intended status immediately
    setUpdatingId(id);
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );

    try {
      await StudentServices.UpdateStatus(id, newStatus);

      toast.success(
        newStatus === "Active"
          ? "Student activated successfully"
          : "Student blocked successfully",
      );
    } catch (error) {
      console.error("Update status error:", error);

      // Restore previous status if Firebase update fails
      setData((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: oldStatus ? "Active" : "Block",
              }
            : item,
        ),
      );

      toast.error("Failed to update student status");
    } finally {
      setUpdatingId(null);
    }
  };

  // Delete student
  const DeleteStudent = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await StudentServices.delete(id);

      setData((prev) => prev.filter((student) => student.id !== id));

      toast.success("Student deleted successfully");

      await Swal.fire({
        title: "Deleted!",
        text: "Student has been deleted.",
        icon: "success",
      });
    } catch (error) {
      console.error("Delete student error:", error);
      toast.error("Student was not deleted");
    }
  };

  return (
    <>
      {/* Page Header */}
      <div className="home">
        <div
          className="home_background"
          style={{
            backgroundImage: "url('/images/contact.jpg')",
          }}
        />

        <div className="home_container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <div className="home_content text-center">
                  <div className="home_title">Manage Student</div>

                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <Link to="/Home">Home</Link>
                      </li>
                      <li>Manage Student</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="container my-5">
        <h3 className="mb-4">Student Management</h3>

        {loading ? (
          <p>Loading students...</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Profile</th>
                  <th>Course</th>
                  <th>Created At</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {Data.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center">
                      No students found.
                    </td>
                  </tr>
                ) : (
                  Data.map((el, i) => {
                    const isActive = el.status === "Active";
                    const isUpdating = updatingId === el.id;

                    return (
                      <tr key={el.id}>
                        <td>{i + 1}</td>
                        <td>{el.name || "-"}</td>
                        <td>{el.email || "-"}</td>
                        <td>{el.contact || "-"}</td>

                        <td>
                          {el.profile ? (
                            <a
                              href={el.profile}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View Profile
                            </a>
                          ) : (
                            "-"
                          )}
                        </td>

                        <td>{el.Course || "-"}</td>

                        <td>
                          {el.createdAt?.toDate
                            ? el.createdAt.toDate().toLocaleDateString()
                            : el.createdAt || "-"}
                        </td>

                        {/* Active / Block switch */}
                        <td>
                          <div className="d-flex flex-column gap-1">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`student-status-${el.id}`}
                                checked={isActive}
                                disabled={isUpdating}
                                onChange={() => ToggleStatus(el)}
                              />

                              <label
                                className={`form-check-label fw-semibold ${
                                  isActive ? "text-success" : "text-danger"
                                }`}
                                htmlFor={`student-status-${el.id}`}
                              >
                                {isUpdating
                                  ? "Updating..."
                                  : isActive
                                  ? "Active"
                                  : "Block"}
                              </label>
                            </div>
                          </div>
                        </td>

                        {/* Actions */}
                        <td>
                          <div className="d-flex gap-2">
                            <Link
                              className="btn btn-primary btn-sm"
                              to={`/admin/UpdateStudent/${el.id}`}
                            >
                              Update
                            </Link>

                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => DeleteStudent(el.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageStudent;
