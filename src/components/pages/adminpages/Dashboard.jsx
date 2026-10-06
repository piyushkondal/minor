import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import CategoryServices from "./../../../Services/CategoryServices";
// import { db } from "..../firebase";
const Dashboard = () => {
  const [stats, setStats] = useState({
    categories: 0,
    groups: 0,
    Student: 0,
    Teacher: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const Csize = CategoryServices.all1();
        // Fetch packages
        const groupsSnap = await getDocs(collection(db, "groups"));
        const groupsCount = GroupSnap.size;

        // Fetch hiddengems
        const StudentSnap = await getDocs(collection(db, "Student"));
        const StudentCount = studentSnap.size;

        // Fetch users
        const TeacherSnap = await getDocs(collection(db, "Teacher"));
        const TeacherCount = TeacherSnap.size;

        // Fetch bookings

        setStats({
          categories: Csize,
          groups: groupsCount,
          Student: StudentCount,
          Teacher: TeacherCount,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div className="container">
        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            color: "#0a3d62",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Admin Dashboard
        </h2>

        {/* Summary Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "40px",
          }}
        >
          <DashboardCard title="Categories" value={stats.categories} />
          <DashboardCard title="Packages" value={stats.groups} />
          <DashboardCard title="Hidden Gems" value={stats.Student} />
          <DashboardCard title="Users Registered" value={stats.Teacher} />
        </div>

        {/* Quick Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        ></div>
      </div>
    </section>
  );
};

const DashboardCard = ({ title, value }) => (
  <div
    style={{
      flex: "1 1 200px",
      backgroundColor: "#ffffff",
      border: "1px solid #de7616",
      borderRadius: "8px",
      padding: "20px",
      margin: "10px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    }}
  >
    <h4 style={{ marginBottom: "10px" }}>{title}</h4>
    <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>{value}</p>
  </div>
);

export default Dashboard;
