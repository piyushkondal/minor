import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Modal from "react-modal";
import "./Description.css";
import NoticeServices from "../../../services/NoticeServices";
import MaterialServices from "../../../services/MaterialServices";
import GroupServices from "../../../services/GroupServices";
import AssignmentServices from "../../../services/AssignmentServices";

// Required for accessibility when using react-modal
Modal.setAppElement("#root");

export default function Description() {
  const { id } = useParams();
  const [announcements, setAnnouncements] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [groupInfo, setGroupInfo] = useState();
  const [assignments, setAssignments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const payload = { value: id };

    try {
      // Mock/Real DB fetch calls
      const data = await NoticeServices.All(payload, "GroupId");
      console.log(data);

      setAnnouncements(data);

      const materialData = await MaterialServices.All(payload, "GroupId");
      console.log(materialData);
      setMaterials(materialData);

      // Fetch Group Info & Assignments

      const groupData = await GroupServices.single(id);
      console.log(groupData);

      setGroupInfo(groupData);

      const assignmentData = await AssignmentServices.All(payload, "GroupId");
      console.log(assignmentData);

      setAssignments(assignmentData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="banner-wrapper">
      {/* Top Header Section */}
      <div className="group-header-container">
        <div className="group-header-left">
          <h1 className="group-title">
            {groupInfo?.GroupName || "Group Name"}
          </h1>
          <p className="group-description">
            {groupInfo?.Description || "This is the default group description."}
          </p>
        </div>
        <div className="group-header-right">
          <button
            className="assignment-link-btn"
            onClick={() => setIsModalOpen(true)}
          >
            View Assignments
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="banner-container">
        {/* Left Section (75%) - Announcements */}
        <div className="banner-left">
          {announcements.length > 0 ? (
            announcements.map((el, index) => (
              <div className="banner-left1">
                <div key={el.id || index} className="announcement-item">
                  <span className="banner-badge">Announcement</span>
                  <h2 className="banner-left-title">{el.Title}</h2>
                  <p className="banner-left-desc">{el.Description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="banner-left-desc">No announcements available.</p>
          )}
        </div>

        {/* Right Section (25%) - Materials */}
        <div className="banner-right">
          {materials.length > 0 ? (
            materials.map((item, index) => (
              <div className="banner-right1">
                <div key={item.id || index} className="material-item">
                  <h3 className="banner-right-title">{item.Title}</h3>
                  <p className="banner-right-desc">{item.FileUrl}</p>
                  <a
                    href={item.downloadUrl || "#"}
                    className="download-button"
                    download
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {item.buttonText || "Download"}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="banner-right-desc">No materials available.</p>
          )}
        </div>
      </div>

      {/* Assignments Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Assignments Modal"
        className="assignment-modal"
        overlayClassName="assignment-modal-overlay"
      >
        <div className="modal-header">
          <h2>Group Assignments</h2>
          <button
            className="close-modal-btn"
            onClick={() => setIsModalOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          {assignments.length > 0 ? (
            assignments.map((assignment, index) => (
              <div key={assignment.id || index} className="assignment-item">
                <h3>{assignment.SubjectName}</h3>
                <p>{assignment.description}</p>
                {assignment.dueDate && (
                  <span className="due-date">Due: {assignment.dueDate}</span>
                )}
              </div>
            ))
          ) : (
            <p>No assignments found for this group.</p>
          )}
        </div>
      </Modal>
    </div>
  );
}
