import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layouts/user/UserLayout";
import Home from "./components/pages/userpages/Home";
import AdminLayout from "./components/layouts/admin/AdminLayout";
import About from "./components/pages/userpages/About";
import Login from "./components/pages/userpages/Login";
import { ToastContainer } from "react-toastify";
import Contact from "./components/pages/userpages/contact";
import Dashboard from "./components/pages/adminpages/Dashboard";
import AddCategory from "./components/pages/adminpages/category/AddCategory";
import ManageCategory from "./components/pages/adminpages/category/ManageCategory";
import UpdateCategory from "./components/pages/adminpages/category/UpdateCategory";
import Register from "./components/pages/userpages/Register";
import TeacherLayout from "./components/layouts/teacher/Teacherlayout";
//  import TeacherAddcategory from './components/pages/teacherpages/category/TeacherAddcategory'
// // import TeacherManagecategory from './components/pages/teacherpages/category/TeacherManagecategory'
import TeacherDashboard from "./components/pages/teacherpages/TeacherDashboard";
import ViewCategory from "./components/pages/userpages/ViewCategory";
import ViewGroup from "./components/pages/userpages/ViewGroup";
import ManageGroup from "./components/pages/adminpages/groups/ManageGroup";
import UpdateGroup from "./components/pages/adminpages/groups/UpdateGroup";
import AddGroup from "./components/pages/adminpages/groups/AddGroup";
import Groups from "./components/pages/teacherpages/Groups";
import GroupDetail from "./components/pages/userpages/GroupDetail";
import AddMaterial from "./components/pages/teacherpages/AddMaterial";

import AddNotice from "./components/pages/teacherpages/AddNotice";
import AddPyq from "./components/pages/teacherpages/AddPyq";
import ManageTeacher from "./components/pages/adminpages/teachers/ManageTeacher";

import AddTeacher from "./components/pages/adminpages/teachers/AddTeacher";
import UpdateTeacher from "./components/pages/adminpages/teachers/UpdateTeacher";
import UserProfile from "./components/pages/userpages/UserProfile";

import ManageMaterial from "./components/pages/teacherpages/ManageMaterial";
import ManageNotice from "./components/pages/teacherpages/ManageNotice";
import ManagePyq from "./components/pages/teacherpages/ManagePyq";
import AddSubmission from "./components/pages/userpages/AddSubmission";
import AddAssignment from "./components/pages/teacherpages/AddAssignment";
import Modal from "./components/pages/userpages/Modal";
import ManageStudent from "./components/pages/adminpages/student/ManageStudent";
import Description from "./components/pages/userpages/Description";
import ManageAssignment from "./components/pages/teacherpages/ManageAssignment";
import UpdateAssignment from "./components/pages/teacherpages/UpdateAssignment";
import UpdateMaterial from "./components/pages/teacherpages/UpdateMaterial";
import UpdatePyq from "./components/pages/teacherpages/UpdatePyq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/viewCategory/" element={<ViewCategory />}></Route>
            <Route path="/viewgroup/:id" element={<ViewGroup />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/groupdetail" element={<GroupDetail />}></Route>
            <Route path="/userprofile/" element={<UserProfile />}></Route>
            <Route path="/addsubmission/" element={<AddSubmission />}></Route>
            <Route path="/modal" element={<Modal />}>
              {" "}
            </Route>
            <Route path="/description/:id" element={<Description />}>
              {" "}
            </Route>
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="/admin/addCategory" element={<AddCategory />}></Route>
            <Route
              path="/admin/manageCategory"
              element={<ManageCategory />}
            ></Route>
            <Route
              path="/admin/updateCategory/:id"
              element={<UpdateCategory />}
            ></Route>
            <Route path="/admin/addGroup" element={<AddGroup />}>
              {" "}
            </Route>
            <Route path="/admin/manageGroup" element={<ManageGroup />}>
              {" "}
            </Route>
            <Route path="/admin/updateGroup/:id" element={<UpdateGroup />}>
              {" "}
            </Route>
            <Route
              path="/admin/manageteacher"
              element={<ManageTeacher />}
            ></Route>
            <Route path="/admin/UpdateTeacher/:id" element={<UpdateTeacher />}>
              {" "}
            </Route>
            <Route path="/admin/addteacher" element={<AddTeacher />}>
              {" "}
            </Route>
            <Route path="/admin/manageStudent" element={<ManageStudent />}>
              {" "}
            </Route>
          </Route>
          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<TeacherDashboard />}></Route>
            <Route
              path="/teacher/addMaterial"
              element={<AddMaterial />}
            ></Route>
            <Route
              path="/teacher/addAssignment"
              element={<AddAssignment />}
            ></Route>
            <Route path="/teacher/addNotice" element={<AddNotice />}></Route>
            <Route path="/teacher/addPyq" element={<AddPyq />}></Route>
            {/* //  { <Route path="/teacher/manageCategory" element={<TeacherManagecategory/>}></Route> */}
            <Route path="/teacher/Groups" element={<Groups />}></Route>
            <Route
              path="/teacher/manageAssignment/"
              element={<ManageAssignment />}
            ></Route>
            <Route
              path="/teacher/managematerial/"
              element={<ManageMaterial />}
            ></Route>
            <Route
              path="/teacher/managenotice/"
              element={<ManageNotice />}
            ></Route>
            <Route path="/teacher/managepyq/" element={<ManagePyq />}></Route>
            <Route
              path="/teacher/updateassignment/:id"
              element={<UpdateAssignment />}
            ></Route>

            <Route
              path="/teacher/updatematerial/:id"
              element={<UpdateMaterial />}
            ></Route>
            <Route
              path="/teacher/updatenotice/:id"
              element={<UpdateMaterial />}
            ></Route>
            <Route
              path="/teacher/updatepyq/:id"
              element={<UpdatePyq />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
