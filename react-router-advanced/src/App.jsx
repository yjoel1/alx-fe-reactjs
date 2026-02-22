import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;