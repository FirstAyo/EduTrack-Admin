// src/App.jsx

import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import AddTeacher from "./pages/AddTeacher";
import AddStaff from "./pages/AddStaff";
import StudentList from "./pages/StudentList";
import TeacherList from "./pages/TeacherList";
import StaffList from "./pages/StaffList";
import CourseList from "./pages/CourseList";
import AddCourse from "./pages/AddCourse";
import FeesCollection from "./pages/FeesCollection";

function App() {
  return (
    <>
      <section className="">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/addstaff" element={<AddStaff />} />
            <Route path="/studentlist" element={<StudentList />} />
            <Route path="/teacherlist" element={<TeacherList />} />
            <Route path="/stafflist" element={<StaffList />} />
            <Route path="/courselist" element={<CourseList />} />
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/feescollection" element={<FeesCollection />} />
          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
