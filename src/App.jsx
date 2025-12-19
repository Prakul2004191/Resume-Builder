import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeForm from "./pages/ResumeForm";
import ResumePreview from "./pages/ResumePreview";
import Profile from "./pages/Profile";
import ResumeList from "./pages/ResumeList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<ResumeForm />} />
        <Route path="/preview/:id" element={<ResumePreview />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/resumes" element={<ResumeList />} />
      </Routes>
    </BrowserRouter>
  );
}
