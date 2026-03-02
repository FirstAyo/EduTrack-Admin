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
import AddFees from "./pages/AddFees";
import Attendance from "./pages/Attendance";
import Library from "./pages/Library";
import AddLibraryBook from "./pages/AddLibraryBook";

function App() {
  return (
    <>
      <section className="">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/add-teacher" element={<AddTeacher />} />
            <Route path="/add-staff" element={<AddStaff />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/teacher-list" element={<TeacherList />} />
            <Route path="/staff-list" element={<StaffList />} />
            <Route path="/course-list" element={<CourseList />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/fees-collection" element={<FeesCollection />} />
            <Route path="/add-fees" element={<AddFees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/library" element={<Library />} />
            <Route path="/add-library-book" element={<AddLibraryBook />} />
          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
