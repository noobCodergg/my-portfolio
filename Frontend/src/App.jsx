import { Routes, Route, useLocation } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ManagePrize from "./Admin/ManagePrize";
import RequestedUsers from './pages/RequestedUsers';
import UploadProjects from './pages/UploadProjetcs';
import ProjectDetail from './pages/ProjectDetail';
import Login from './pages/Login';

import Navbar from './Components/Navbar';
import AdminNav from './Components/AdminNav';
import Footer from './Components/Footer';
import Footer1 from './Components/Footer1';
import ProtectedRoute from './Routes/ProtectedRoutes';
import UserList from './pages/UserList';
import TermsAndConditions from './pages/Term&Condition';
import PrivacyPolicy from './pages/PrivecyPolicy';

function App() {
  const location = useLocation();

  const adminRoutes = ["/manageprize", "/upload", "/users","/userlist"];
  const isAdminPage = adminRoutes.includes(location.pathname);

  return (
    <div>
      {/* Dynamic Navbar */}
      {isAdminPage ? <AdminNav /> : <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/detail/:projectId' element={<ProjectDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/terms&conditions' element={<TermsAndConditions/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>

        {/* Protected Admin Routes */}
        <Route path="/manageprize" element={
          <ProtectedRoute>
            <ManagePrize />
          </ProtectedRoute>
        } />

        <Route path='/users' element={
          <ProtectedRoute>
            <RequestedUsers />
          </ProtectedRoute>
        } />

        <Route path='/upload' element={
          <ProtectedRoute>
            <UploadProjects />
          </ProtectedRoute>
        } />
      

      <Route path='/userlist' element={
          <ProtectedRoute>
            <UserList/>
          </ProtectedRoute>
        } />
      </Routes>

      {/* Footer only for user pages */}
      {!isAdminPage && <Footer />}
      {!isAdminPage && <Footer1 />}
    </div>
  );
}

export default App;
